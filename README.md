# Aplikasi Pengelola Keuangan Pribadi

## Deskripsi Singkat
Aplikasi pengelola keuangan pribadi ini merupakan Web App Full-Stack yang memungkinkan pengguna untuk mencatat pemasukan dan pengeluaran secara mudah dan terstruktur. Aplikasi ini membantu pengguna dalam memantau arus kas serta mengelola keuangan pribadi secara efisien.

## Fitur Utama
- Input data pemasukan dan pengeluaran
- Melihat total pemasukan dan pengeluaran
- Menyusun laporan keuangan berdasarkan tanggal
- Operasi CRUD lengkap untuk data pemasukan dan pengeluaran
- Tampilan menarik dan responsif

## Teknologi yang Digunakan
- Frontend: HTML, CSS, JavaScript (atau framework pilihan)
- Backend: Node.js/Express (atau framework pilihan)
- Database: PostgreSQL / MySQL

## Instalasi dan Penjalankan Aplikasi

### 1. Clone Repository
```bash
git clone <URL_REPO_ANDA>
cd <nama-folder-repo>
      2. Buat dan Konfigurasi Database

Pastikan PostgreSQL/MySQL sudah terinstall dan berjalan.
Buat database baru, misalnya keuangan_pribadi.
Import tabel menggunakan skrip SQL berikut:


          
            
            
          
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
      
Pastikan konfigurasi koneksi database di backend sudah benar.

3. Menjalankan Backend

          
            
            
          
          cd backend
npm install
npm start
      4. Menjalankan Frontend

          
            
            
          
          cd ../frontend
npm install
npm run dev
      5. Akses Aplikasi
Buka browser dan menuju http://localhost:3000 (atau port yang digunakan).

Catatan

Pastikan database sudah berjalan dan tabel sudah dibuat sebelum menjalankan backend.
Sesuaikan konfigurasi koneksi database di file konfigurasi backend.


Penutup
Semoga aplikasi ini membantu dalam pengelolaan keuangan pribadi secara efektif. Jika mengalami kendala, silakan hubungi dosen pembimbing.

Disusun oleh:Nama: Theo Aleksander WilliamNIM: 25552012015Kelas: TIF PK 23 CIDDosen Pengajar: Muhammad Reksa Ariansyah, M.KomTanggal: [Tanggal pembuatan]  

          
            
            
          
          
Jika Anda ingin saya buatkan file `.md` langsung, beritahu saja! Anda juga bisa menyesuaikan bagian `[URL_REPO_ANDA]`, `[Tanggal pembuatan]`, dan lainnya sesuai kebutuhan.
