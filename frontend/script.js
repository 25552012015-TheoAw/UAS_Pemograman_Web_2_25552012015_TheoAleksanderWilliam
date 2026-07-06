/**
 * HoldMoney - Global Script
 * Konfigurasi API dan Fungsi Utama
 */
const API = 'http://localhost:5000';

// --- Fungsi Dasar Fetching ---
async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API}${endpoint}`);
        if (!response.ok) {
            console.error(`Error ${response.status}...`);
            return []; // <--- Jika API error, ia mengembalikan array kosong
        }
        return await response.json();
    } catch (err) {
        return []; // <--- Jika koneksi gagal, ia mengembalikan array kosong
    }
}

// Fungsi bantu untuk Update data (PUT)
async function updateData(endpoint, data) {
    try {
        const res = await fetch(`${API}${endpoint}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.ok;
    } catch (err) {
        console.error("Update Error:", err);
        return false;
    }
}

// --- Auth ---
function handleLogout() {
    if (confirm("Apakah Anda yakin ingin keluar dari akun?")) {
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    }
}

// --- CRUD Transaksi ---
async function addTransaction(data) {
    const payload = {...data, amount: parseFloat(data.amount) };
    await fetch(`${API}/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
}