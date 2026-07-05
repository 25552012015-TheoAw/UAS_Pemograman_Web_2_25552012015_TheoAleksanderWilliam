const API = 'http://localhost:5000';

async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API}${endpoint}`);

        // Cek apakah server merespons dengan sukses
        if (!response.ok) {
            console.error(`Error ${response.status}: Tidak dapat mengambil data dari ${endpoint}`);
            return []; // Kembalikan array kosong agar aplikasi tidak berhenti
        }

        return await response.json();
    } catch (err) {
        console.error("Fetch Error:", err);
        return [];
    }
}

// --- Auth ---
async function loginUser(username, password) {
    const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    if (res.ok) { localStorage.setItem('user', username); return true; }
    return false;
}

async function registerUser(username, password) {
    const res = await fetch(`${API}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    return res.ok;
}

function handleLogout() {
    if (confirm("Apakah Anda yakin ingin keluar dari akun?")) {
        localStorage.removeItem('user'); // Sesuai dengan key login
        window.location.href = 'login.html';
    }
}

// --- CRUD Kategori (Rumpun 1) ---
async function addCategory(name) {
    await fetch(`${API}/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });
}

async function deleteCategory(id) {
    const res = await fetch(`${API}/categories/${id}`, { method: 'DELETE' });
    if (!res.ok) alert("Gagal hapus: Kategori ini masih digunakan oleh transaksi!");
    return res.ok;
}

// --- CRUD Transaksi (Rumpun 2 - Berelasi) ---
async function addTransaction(data) {
    // Data diharapkan berisi { amount, description, category_id }
    await fetch(`${API}/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

async function deleteTransaction(id) {
    await fetch(`${API}/transactions/${id}`, { method: 'DELETE' });
}

// --- Tabungan ---
async function addSavings(data) {
    await fetch(`${API}/savings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

async function deleteSavings(id) {
    await fetch(`${API}/savings/${id}`, { method: 'DELETE' });
}