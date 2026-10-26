# PANDUAN DEPLOYMENT & DOKUMENTASI SISTEM PT SAPALEWA

Website Company Profile Profesional: **https://ptsapalewa.web.id/**  
Sumber Audit Data Resmi: **https://sapalewa.web.id/**  
Entitas Usaha: **PT Sapalewa (Gubukhijau Corp)**

---

## 1. Ringkasan Halaman dan Komponen yang Dibangun

1. **Header & Navigasi (Top Bar Contract 3-Zona)**
   - Logo resmi PT Sapalewa dan identitas induk Gubukhijau Corp.
   - Menu navigasi: *Beranda*, *Tentang Kami*, *Layanan*, *Portofolio*, *Estimasi Biaya*, *Artikel*, *Kontak*.
   - Tombol aksi utama (CTA): *Konsultasi Cepat via WhatsApp*.
   - Drawer navigasi responsif khusus perangkat mobile dengan touch target ≥ 44px.

2. **Hero Section**
   - Headline kuat: *"Partner Kreatif & Solusi Digital Terpadu untuk Kemajuan Bisnis Anda"*.
   - Subheadline yang menjelaskan 3 pilar aktual: Desain Grafis, Percetakan, dan Website Bisnis.
   - Dual Call-to-Action (Konsultasi Penawaran & Jelajahi Layanan).
   - Visual carrier studio kreatif resolusi tinggi berlisensi.
   - Trust strip mitra klien terverifikasi.

3. **Profil Perusahaan (Tentang Kami)**
   - Gambaran umum, struktur induk di bawah **GUBUKHIJAU CORP**, filosofi *"Partner Kreatif & Imajinatif"*.
   - Visi dan Misi perusahaan.
   - 4 Nilai Utama: *Orientasi Hasil Nyata*, *Fastest Solution (1-3 hari)*, *Kejujuran Spesifikasi*, dan *Komunikasi Terbuka*.

4. **Layanan & Bidang Usaha (4 Pilar Aktual)**
   - **Jasa Desain Grafis Profesional**: Logo, Feed Medsos, Brosur, Spanduk, Kemasan Produk, file master lengkap (AI, PSD, PDF, SVG).
   - **Jasa Percetakan & Digital Printing**: Spanduk Outdoor/Indoor, Buku/Katalog, Brosur, Kalender, Jersey Sublimasi, Kartu Nama.
   - **Jasa Pembuatan Website & Landing Page**: Landing Page Iklan (Google/Meta Ads), Company Profile, Web Berita/Blog, integrasi WhatsApp & form pemesanan.
   - **Layanan Undangan Digital (Nikahin)**: Undangan web responsif, undangan gambar/video, RSVP & buku tamu digital.
   - Dilengkapi *Modal Spesifikasi Detail* untuk tiap layanan.

5. **Portofolio & Rekam Jejak (Mitra Nyata dari Sumber)**
   - Universitas Terbuka (UT Majene) — Institusi Pendidikan Tinggi Negeri.
   - Lapas Kelas III Mamasa — Kantor Wilayah Kemenkumham RI.
   - PT Wahana Sinar Terang (WST) — Niaga & Distribusi.
   - Buang Puing (`buangpuing.web.id`) — Jasa Konstruksi & Angkutan.
   - Home AI Official (`toko-homeai.pro`) — Ekosistem Teknologi & Retail AI.
   - Yamani Beard Care (`yamanibeard.com`) — Brand Perawatan & E-Commerce.
   - Modal detail proyek dengan latar belakang, ringkasan, dan tautan langsung.

6. **Kalkulator Estimasi Proyek (Interactive Lead Generator)**
   - Pilihan kategori layanan & item spesifik.
   - Pilihan urgensi waktu: Express (1-2 hari), Standar (3-5 hari), Fleksibel (7-10 hari).
   - Kalkulasi otomatis yang menghasilkan format pesan WhatsApp terstruktur dan tombol 1-klik kirim ke nomor admin.

7. **Alur Kerja & Keunggulan Kompetitif**
   - 4 Langkah Kerja: Konsultasi -> Konsep -> Revisi -> Produksi & Go-Live.
   - 6 Standar Mutu Layanan (Bebas template murahan, file master lengkap, SLA pasti).

8. **Artikel & Insight Bisnis**
   - 3 artikel edukasi: Landing page untuk iklan ads, panduan material kertas/cetak, dan konsistensi identitas visual.
   - Modal pembaca artikel lengkap dengan byline penulis.

9. **Kontak & Kerja Sama**
   - Saluran resmi terverifikasi: WhatsApp `0856-0252-0987`, Email `cs.sapalewa@gmail.com`.
   - Jam pelayanan: Senin - Sabtu 08.30 - 17.00 WIB.
   - Formulir permintaan penawaran fungsional dengan validasi input nomor Indonesia, email, anti-spam honeypot, dan notifikasi sukses.

10. **Footer & SEO Teknis**
    - JSON-LD Structured Data Schema.org (ProfessionalService & Organization).
    - Canonical URL: `https://ptsapalewa.web.id/`.
    - `robots.txt` dan `sitemap.xml`.
    - OpenGraph & Twitter Card metadata.

---

## 2. Catatan Data Sumber & Integritas Informasi

1. **Nomor Kontak & Email**: Diambil persis dari website sumber (`0856-0252-0987` dan `cs.sapalewa@gmail.com`).
2. **Afiliasi Induk**: Menggunakan nama resmi induk perusahaan yang tercantum pada footer sumber: `GUBUKHIJAU CORP`.
3. **Data Legalitas / Alamat Fisik**: Website sumber tidak mencantumkan nomor NIB/AHU atau alamat gedung jalan spesifik. Sesuai instruksi *"Jangan mengarang legalitas atau sertifikasi fiktif"*, kami menampilkan deskripsi jujur dan profesional bahwa PT Sapalewa beroperasi secara digital dan mengirimkan produk fisik ke seluruh Indonesia di bawah naungan Gubukhijau Corp. Jika dokumen NIB/AHU atau alamat kantor definitif sudah disiapkan, dapat langsung diisikan pada `src/data/companyData.ts`.

---

## 3. Langkah Menghubungkan Domain `ptsapalewa.web.id`

### Opsi A: Deployment via Vercel (Rekomendasi)
1. Push repositori ini ke GitHub / GitLab.
2. Buka dashboard [Vercel](https://vercel.com) dan pilih **Add New Project**.
3. Import repositori, pilih framework preset **Vite**.
4. Klik **Deploy**.
5. Setelah build selesai, buka tab **Settings > Domains**.
6. Tambahkan domain: `ptsapalewa.web.id` dan `www.ptsapalewa.web.id`.
7. Di penyedia registrar domain Anda (IDwebhost, Niagahoster, DomaiNesia, dll.), tambahkan DNS Record berikut:
   - **Type A**: `@` mengarah ke IP Vercel: `76.76.21.21`
   - **Type CNAME**: `www` mengarah ke: `cname.vercel-dns.com`
8. Tunggu propagasi DNS (umumnya 5 menit - 2 jam). Sertifikat SSL Let's Encrypt akan terpasang otomatis.

### Opsi B: Build Mandiri untuk Hosting cPanel / VPS Nginx
1. Jalankan perintah kompilasi produksi:
   ```bash
   npm run build
   ```
2. Folder `dist/` akan dihasilkan berisi seluruh file HTML, CSS, JavaScript, aset gambar, `robots.txt`, dan `sitemap.xml`.
3. Upload seluruh isi folder `dist/` ke direktori `public_html` di cPanel atau root web server Nginx/Apache.
4. Pastikan file `.htaccess` atau konfigurasi Nginx mengarahkan fallback route ke `index.html`:
   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
   }
   ```
