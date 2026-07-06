<<<<<<< HEAD
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

          
            
            
          
          
Jika Anda ingin saya buatkan file `.md` langsung, beritahu saja! Anda juga bisa menyesuaikan bagian , `[29-06-2026]`, dan lainnya sesuai kebutuhan.
=======
# UAS_Pemograman_Web_2_25552012015_TheoAleksanderWilliam
Berikut ringkasan dan saran agar `README.md` Anda terlihat rapi dan profesional di GitHub:

---

**Judul dan Deskripsi Singkat:**  
Judul aplikasi "Pengelola Keuangan Pribadi" dengan penjelasan singkat bahwa ini adalah Web App Full-Stack untuk mencatat pemasukan dan pengeluaran secara terstruktur, membantu pengguna memantau arus kas.

**Fitur Utama:**  
- Input data pemasukan dan pengeluaran  
- Melihat total pemasukan dan pengeluaran  
- Laporan keuangan berdasarkan tanggal  
- CRUD lengkap untuk data pemasukan dan pengeluaran  
- Tampilan menarik dan responsif

**Teknologi Digunakan:**  
- Frontend: HTML, CSS, JavaScript (atau framework pilihan)  
- Backend: Node.js/Express (atau framework pilihan)  
- Database: PostgreSQL / MySQL

**Panduan Instalasi dan Menjalankan:**  
1. Clone repository dan masuk ke foldernya.  
2. Buat database dan import tabel dengan skrip SQL yang diberikan.  
3. Jalankan backend: `npm install` lalu `npm start` di folder backend.  
4. Jalankan frontend: `npm install` lalu `npm run dev` di folder frontend.  
5. Buka browser di `http://localhost:3000`.

**Catatan:**  
- Pastikan database berjalan dan tabel sudah dibuat sebelum menjalankan backend.  
- Konfigurasi koneksi database di backend harus sesuai.

**Penutup:**  
Semoga aplikasi ini membantu pengelolaan keuangan pribadi. Jika ada kendala, hubungi dosen pembimbing.

**Informasi Pembuat:**  
Disusun oleh: Theo Aleksander William  
NIM: 25552012015  
Kelas: TIF PK 23 CID  
Dosen Pengajar: Muhammad Reksa Ariansyah, M.Kom  
Tanggal: 29-06-2026

---
>>>>>>> 9f0f75342dabbf736b5263f2ebd8f22015ebb31e
