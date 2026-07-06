const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'keuangan_pribadi',
    password: 'admin123',
    port: 5432
});

// --- Auth ---
app.post('/register', async(req, res) => {
    try {
        const { username, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO users (username, password) VALUES($1, $2)', [username, hash]);
        res.status(201).json({ message: "Sukses" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/login', async(req, res) => {
    try {
        const { username, password } = req.body;
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (result.rows.length > 0 && await bcrypt.compare(password, result.rows[0].password)) {
            res.json({ status: 'OK' });
        } else { res.status(401).send('Gagal'); }
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- Transactions ---
app.get('/transactions', async(req, res) => {
    try {
        const query = `
            SELECT t.id, t.amount, t.description, t.category_id, t.type, c.name as category
            FROM transactions t
            LEFT JOIN categories c ON t.category_id = c.id
            ORDER BY t.id DESC
        `;
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// Pastikan rute ini ada di index.js
app.get('/transactions/by-category', async(req, res) => {
    try {
        const query = `
            SELECT c.name, SUM(t.amount) as total
            FROM transactions t
            JOIN categories c ON t.category_id = c.id
            WHERE LOWER(t.type) = 'pengeluaran'
            GROUP BY c.name
        `;
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error("Error pada /transactions/by-category:", err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/transactions/by-date', async(req, res) => {
    try {
        // Kita ambil created_at dan beri alias 'date'
        const query = `
            SELECT description, amount, type, 
            TO_CHAR(created_at, 'YYYY-MM-DD') as date 
            FROM transactions
        `;
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/transactions', async(req, res) => {
    try {
        const { amount, description, category_id, type } = req.body;
        const query = "INSERT INTO transactions (amount, description, category_id, type) VALUES ($1, $2, $3, $4)";
        await pool.query(query, [amount, description, category_id, type]);
        res.status(201).json({ message: "Sukses" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- Kategori & Tabungan ---
app.get('/categories', async(req, res) => {
    const result = await pool.query('SELECT * FROM categories ORDER BY id ASC');
    res.json(result.rows);
});

app.post('/categories', async(req, res) => {
    const { name } = req.body;
    await pool.query('INSERT INTO categories (name) VALUES ($1)', [name]);
    res.status(201).json({ message: "Sukses" });
});

app.get('/savings', async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM savings');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/savings', async(req, res) => {
    const { name, target_amount } = req.body;
    await pool.query('INSERT INTO savings (name, target_amount, current_amount) VALUES ($1, $2, 0)', [name, target_amount]);
    res.status(201).send('Success');
});

// --- Rute Anggaran ---
app.get('/budgets', async(req, res) => {
    try {
        const query = `
            SELECT b.id, c.name as cat, b.amount_limit as limit
            FROM budgets b
            JOIN categories c ON b.category_id = c.id
        `;
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/budgets/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { limit } = req.body;
        await pool.query("UPDATE budgets SET amount_limit = $1 WHERE id = $2", [limit, id]);
        res.status(200).send('Budget updated');
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.listen(5000, () => console.log('Server berjalan di port 5000'));