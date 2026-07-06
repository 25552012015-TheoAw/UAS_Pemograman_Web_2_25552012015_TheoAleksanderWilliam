# 💰 HoldMoney - Personal Financial Tracker

Aplikasi *Full-Stack* untuk mengelola keuangan pribadi secara efisien. Proyek ini dikembangkan sebagai pemenuhan **UAS Pemrograman Web 2**.

---

## 🚀 Fitur Utama
* **Dashboard Finansial**: Visualisasi total pemasukan, pengeluaran, saldo, dan akumulasi tabungan secara real-time.
* **Manajemen Transaksi**: Pencatatan arus kas yang mudah dengan kategori yang terorganisir.
* **Monitoring Anggaran**: Melacak limit pengeluaran per kategori untuk menjaga kedisiplinan finansial.
* **Target Tabungan**: Fitur manajemen impian/target tabungan dengan progres bar interaktif.
* **Analisis Data**: Grafik tren keuangan menggunakan *Chart.js* untuk memantau performa ekonomi Anda.
* **Kalender & Kategori**: Navigasi riwayat transaksi yang intuitif dan pengelompokan biaya.

## 🛠️ Tech Stack
* **Frontend**: HTML5, Tailwind CSS (Styling), JavaScript (Vanilla), Chart.js (Grafik).
* **Backend**: Node.js, Express.js.
* **Database**: PostgreSQL.

## 📂 Struktur Folder
```text
HoldMoney/
├── backend/          # RESTful API & Koneksi Database
├── frontend/         # File UI (.html, .js)
├── .gitignore        # Konfigurasi pengabaian file node_modules
└── README.md         # Dokumentasi Project
````
🗄️ Konfigurasi Database
Aplikasi ini memerlukan database PostgreSQL. Berikut langkah persiapannya:

Buat Database:

SQL
```
CREATE DATABASE holdmoney;
```
Buat Tabel:
Jalankan perintah ini di database holdmoney:
```
SQL
CREATE TABLE transactions (id SERIAL PRIMARY KEY, type VARCHAR(20), amount NUMERIC, description TEXT, date DATE);
CREATE TABLE savings (id SERIAL PRIMARY KEY, name VARCHAR(100), target_amount NUMERIC, current_amount NUMERIC DEFAULT 0);
```

Koneksi Backend:
Buka backend/index.js dan sesuaikan bagian pool dengan setelan database Anda:
```
JavaScript
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'holdmoney',
    password: 'password_anda',
    port: 5432,
});
```

⚙️ Cara Menjalankan Aplikasi
Clone Repository:
```
Bash
git clone [https://github.com/username/HoldMoney-Financial-App.git](https://github.com/username/HoldMoney-Financial-App.git)
```
Install & Jalankan Backend:
```
Bash
cd backend
npm install
node index.js
```

Akses Frontend:
Buka file ```frontend/dashboard.html``` di browser Anda.

👤 Pengembang

Nama: Theo Aleksander William

NIM: 25552012015

Kelas: TIF PK 23 CID

Dosen Pengajar/Pembimbing :Muhammad Reksa Ariansyah, M.Kom.



Dibuat dengan dedikasi untuk efisiensi manajemen keuangan pribadi.
