# UAS_Pemograman_Web_2_25552012015_TheoAleksanderWilliam
Aplikasi Pengelola Keuangan Pribadi
Deskripsi Singkat
Aplikasi ini adalah web app full-stack yang dirancang untuk membantu pengguna mengelola keuangan pribadi mereka dengan fitur pencatatan pemasukan dan pengeluaran. Aplikasi ini mengintegrasikan database PostgreSQL/MySQL dan menyediakan operasi CRUD lengkap yang saling berelasi, dengan antarmuka pengguna yang menarik dan responsif.
Fitur Utama

Input, edit, hapus data pemasukan dan pengeluaran
Melihat ringkasan total pemasukan dan pengeluaran
Menyusun laporan berdasarkan rentang tanggal
Tampilan antarmuka yang menarik dan user-friendly

Teknologi yang Digunakan

Frontend: HTML, CSS, JavaScript (atau framework/library sesuai pilihan)
Backend: Node.js/Express (atau framework lain sesuai pilihan)
Database: PostgreSQL / MySQL

Panduan Instalasi dan Menjalankan Aplikasi
1. Clone Repository           
cd <nama-folder-repo>
      2. Setup Database

Pastikan PostgreSQL/MySQL sudah terinstall dan berjalan.
Buat database baru, misalnya keuangan_pribadi.
Import skrip tabel berikut untuk membuat struktur database:

          -- Membuat tabel pemasukan
CREATE TABLE pemasukan (
    id SERIAL PRIMARY KEY,
    sumber VARCHAR(255) NOT NULL,
    jumlah NUMERIC(12,2) NOT NULL,
    tanggal DATE NOT NULL
);

-- Membuat tabel pengeluaran
CREATE TABLE pengeluaran (
    id SERIAL PRIMARY KEY,
    kategori VARCHAR(255) NOT NULL,
    jumlah NUMERIC(12,2) NOT NULL,
    tanggal DATE NOT NULL,
    catatan TEXT
);
      
Pastikan konfigurasi koneksi database sudah sesuai di backend.
3. Menjalankan Backend   
cd backend
npm install
npm start
4. Menjalankan Frontend
          cd ../frontend
npm install
npm run dev
      5. Akses Aplikasi
Buka browser dan akses http://localhost:3000 (atau port sesuai pengaturan).

Catatan

Pastikan database sudah berjalan dan tabel telah dibuat sebelum menjalankan backend.
Sesuaikan konfigurasi koneksi database di file konfigurasi backend.


Penutup
Semoga aplikasi ini membantu dalam pengelolaan keuangan pribadi secara efektif. Jika ada kendala, silakan menghubungi dosen pembimbing.

(Disusun oleh : Theo Aleksander William - 25552012015 - TIF PK 23 CID - )
Dosen Pengajar : Muhammad Reksa Ariansyah , M.Kom
