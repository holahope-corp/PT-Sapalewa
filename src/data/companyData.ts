export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  category: 'design' | 'print' | 'web' | 'invitation';
  turnaround: string;
  deliverables: string[];
  benefits: string[];
  image: string;
  illustration: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  categoryKey: 'web' | 'design' | 'print' | 'branding';
  summary: string;
  details: string;
  year: string;
  results?: string;
  logoImg?: string;
  url?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  author: string;
}

export const COMPANY_INFO = {
  name: 'PT Sapalewa',
  legalGroup: 'GUBUKHIJAU CORP',
  brandName: 'Sapalewa',
  tagline: 'Partner Kreatif & Imajinatif untuk Kemajuan Bisnis Anda',
  subheadline:
    'Layanan terpadu desain grafis profesional, percetakan & digital printing presisi tinggi, serta pembuatan website & landing page yang dirancang untuk mendorong konversi penjualan nyata.',
  description:
    'PT Sapalewa (di bawah naungan GUBUKHIJAU CORP) hadir sebagai mitra solusi kreatif dan teknologi bagi bisnis, korporasi, UMKM, dan institusi di Indonesia. Kami menggabungkan estetika desain berkelas, standar produksi percetakan unggul, dan keahlian rekayasa web modern untuk membangun identitas merek yang kredibel dan menghasilkan dampak bisnis nyata.',
  phone: '0856-0252-0987',
  phoneDisplay: '0856-0252-0987',
  whatsappUrl:
    'https://wa.me/6285602520987?text=Halo%20PT%20Sapalewa,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20branding%20dan%20website.',
  email: 'cs.sapalewa@gmail.com',
  workingHours: 'Senin - Sabtu: 08.30 - 17.00 WIB',
  addressNote:
    'Kantor Operasional & Studio Produksi di Indonesia di bawah naungan GUBUKHIJAU CORP. Layanan kami menjangkau klien di seluruh wilayah Indonesia secara digital maupun pengiriman fisik.',
  sourceDomain: 'https://sapalewa.web.id/',
  canonicalDomain: 'https://ptsapalewa.web.id/',
  socialMedia: {
    facebook: 'https://facebook.com/sapalewa',
    twitter: 'https://twitter.com/sapalewa',
    youtube: 'https://youtube.com/@sapalewa',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'graphic-design',
    name: 'Jasa Desain Grafis Profesional',
    shortDesc:
      'Solusi desain visual dan identitas brand mulai dari logo, media sosial, banner, hingga materi promosi komprehensif.',
    fullDesc:
      'Layanan desain grafis terstruktur dan fleksibel untuk membantu brand Anda berkembang lebih cepat. Mulai dari identitas korporat, feed media sosial interaktif, kemasan produk, materi pameran, hingga kebutuhan promosi harian dengan ketelitian tipografi dan warna berstandar industri.',
    category: 'design',
    turnaround: '1 Hari (Express) · 3 Hari (Standard) · 7 Hari (Komprehensif)',
    deliverables: [
      'Logo Korporat & Panduan Brand Identity',
      'Desain Feed & Story Social Media (Instagram, LinkedIn)',
      'Desain Brosur, Flyer & Company Profile Cetak',
      'Desain Spanduk, Banner & Baliho Promosi',
      'Desain Kartu Nama & Kartu Identitas Perusahaan',
      'Kemasan & Label Produk Siap Produksi',
    ],
    benefits: [
      'File master lengkap: AI, PSD, PDF siap cetak, SVG, & PNG transparan',
      'Revisi terarah sesuai panduan visual brand',
      'Dukungan format CMYK 300 DPI untuk cetak & RGB untuk layar',
      'Proses pengerjaan cepat dan terkoordinasi',
    ],
    image: '/src/assets/images/brand_design_craft_1792989255906.jpg',
    illustration: '/service-graphic-design.png',
  },
  {
    id: 'printing-service',
    name: 'Jasa Percetakan & Digital Printing',
    shortDesc:
      'Produksi cetak skala kecil hingga besar dengan mesin mutakhir, warna akurat, dan pilihan material premium.',
    fullDesc:
      'Kami melayani kebutuhan cetak promosi kantor, merchandise, hingga material outdoor dengan standar kerapian maksimal. Dari kartu nama eksklusif ber-finishing foil/emboss, buku laporan tahunan, kalender perusahaan, jersey sablon printing, hingga spanduk vinyl tahan cuaca.',
    category: 'print',
    turnaround: '2 - 5 Hari Kerja (Tergantung Volume & Finishing)',
    deliverables: [
      'Cetak Spanduk & Banner Outdoor/Indoor (Frontlite, Backlite, Korona)',
      'Cetak Buku, Majalah, Booklet & Katalog Produk',
      'Cetak Brosur, Leaflet & Map Folder Perusahaan',
      'Cetak Kalender Dinding & Kalender Meja Eksklusif',
      'Cetak Jersey Sublimasi & Seragam Komunitas/Kantor',
      'Cetak Kartu Nama Kertas Linen, Art Carton, & PVC',
    ],
    benefits: [
      'Mesin digital printing dan offset resolusi tinggi',
      'Pilihan finishing: Laminasi Doff/Glossy, Spot UV, Foil Emas/Perak, Jilid Lem Panas',
      'Proofing warna sebelum cetak massal',
      'Pengemasan aman dan pengiriman ke seluruh kota di Indonesia',
    ],
    image: '/src/assets/images/printing_press_facility_1792989256029.jpg',
    illustration: '/service-printing.png',
  },
  {
    id: 'web-design',
    name: 'Jasa Pembuatan Website & Landing Page',
    shortDesc:
      'Pembuatan landing page konversi tinggi dan website company profile modern yang responsif serta siap iklan.',
    fullDesc:
      'Website merupakan etalase digital utama perusahaan Anda. Kami merancang website yang bukan hanya estetik, tetapi juga memiliki kecepatan muat tinggi, struktur SEO optimal, copywriting persuasif, dan alur konversi yang mengarahkan prospek langsung ke WhatsApp atau sistem pemesanan Anda.',
    category: 'web',
    turnaround: '3 - 10 Hari Kerja',
    deliverables: [
      'Landing Page Penjualan Khusus Kampanye Google Ads & Meta Ads',
      'Website Company Profile Perusahaan Multi-halaman',
      'Website Berita, Blog Edukasi & Media Publikasi',
      'Formulir Pemesanan Interaktif & Integrasi Tombol WhatsApp Direct',
      'Optimasi SEO On-Page, Kecepatan Muat & Aksesibilitas Mobile',
      'Setup Domain, Hosting, Email Bisnis & Sertifikat Keamanan SSL',
    ],
    benefits: [
      'Desain custom sesuai identitas perusahaan, tanpa tampilan template kaku',
      'Struktur konten dan copywriting disusun oleh tim berpengalaman',
      'Tracking conversion ready (Meta Pixel, Google Tag Manager)',
      'Garansi teknis dan panduan pengelolaan mandiri',
    ],
    image: '/service-landing-showcase.png',
    illustration: '/service-web-design.png',
  },
  {
    id: 'digital-invitation',
    name: 'Layanan Undangan Digital & Website Nikahin',
    shortDesc:
      'Platform undangan pernikahan dan acara berbasis web praktis, interaktif, dan mudah dibagikan kepada para tamu.',
    fullDesc:
      'Melalui unit produk Nikahin dari Sapalewa, kami menghadirkan pengalaman undangan online kekinian yang hemat biaya, ramah lingkungan, dan sarat fitur interaktif. Memudahkan calon mempelai mengelola daftar hadir dan membagikan momen bahagia secara personal ke keluarga dan sahabat.',
    category: 'invitation',
    turnaround: '1 - 2 Hari Kerja',
    deliverables: [
      'Website Undangan Pernikahan Interaktif Responsif',
      'Undangan Gambar Digital Format Story & Feed Medsos',
      'Undangan Video Animasi Elegan Beresolusi HD',
      'Fitur Buku Tamu Digital & Ucapan Doa Online',
      'Integrasi Google Maps Lokasi Resepsi & Pengingat Kalender',
      'Fitur RSVP Konfirmasi Kehadiran & Musik Latar Pilihan',
    ],
    benefits: [
      'Akses link undangan tanpa batasan kuota tamu undangan',
      'Personalisasi nama tamu otomatis pada tiap tautan',
      'Tampilan visual elegan dengan tema modern minimalist atau tradisional',
      'Penyimpanan galeri foto pre-wedding beresolusi tinggi',
    ],
    image: '/src/assets/images/digital_invitation_craft_1792989256576.jpg',
    illustration: '/service-digital-invitation.png',
  },
];

export const CLIENT_PARTNERS = [
  {
    name: 'Universitas Terbuka (UT Majene)',
    category: 'Institusi Pendidikan Tinggi',
    logo: '/partner-ut.png',
    role: 'Penyusunan Media Promosi & Branding Kampus',
    url: 'https://majene.ut.ac.id/',
  },
  {
    name: 'Lapas Kelas III Mamasa',
    category: 'Institusi Pemerintahan (Kemenkumham RI)',
    logo: '/partner-lapas.png',
    role: 'Media Publikasi & Desain Komunikasi Publik',
    url: 'https://lapaskls3mamasa.com/',
  },
  {
    name: 'Wahana Sinar Terang (WST)',
    category: 'Perusahaan Niaga & Distribusi',
    logo: '/partner-wst.png',
    role: 'Pengembangan Company Profile & Identitas Brand',
    url: 'https://wstketanggungan.web.id/',
  },
  {
    name: 'Buang Puing',
    category: 'Layanan Konstruksi & Pengangkutan',
    logo: '/partner-buangpuing.png',
    role: 'Landing Page Lead Generation & Iklan Berbayar',
    url: 'https://buangpuing.web.id/',
  },
  {
    name: 'Home AI Official',
    category: 'Platform Produk AI & Teknologi',
    logo: '/partner-homeai.png',
    role: 'Desain Visual Produk & Ekosistem Digital',
    url: 'https://toko-homeai.pro/',
  },
  {
    name: 'Yamani Beard Care',
    category: 'Brand Perawatan & Retail Online',
    logo: '/partner-yamani.png',
    role: 'Desain Kemasan, Label & Branding Toko Online',
    url: 'https://yamanibeard.com/',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Landing Page Konversi Buang Puing',
    client: 'Buang Puing Indonesia',
    category: 'Website & Landing Page',
    categoryKey: 'web',
    summary:
      'Pembuatan landing page responsif terintegrasi tombol WhatsApp direct untuk memfasilitasi kebutuhan pembuangan material puing bangunan di wilayah Jabodetabek.',
    details:
      'Dirancang dengan fokus pada kecepatan muat tinggi, kejelasan daftar harga per truk, form kalkulasi cepat, dan tombol call-to-action yang mudah ditekan pada perangkat smartphone.',
    year: '2025',
    results: 'Meningkatkan konversi pesan masuk calon klien secara terukur.',
    logoImg: '/partner-buangpuing.png',
    url: 'https://buangpuing.web.id/',
  },
  {
    id: 'port-2',
    title: 'Materi Komunikasi Visual & Media Informasi UT Majene',
    client: 'Universitas Terbuka (UPBJJ Majene)',
    category: 'Desain Grafis & Cetak',
    categoryKey: 'design',
    summary:
      'Perancangan materi spanduk sosialisasi mahasiswa baru, brosur jalur registrasi, dan grafis media sosial edukatif.',
    details:
      'Mengadopsi identitas resmi warna biru-kuning khas almamater dengan struktur tipografi yang ramah dibaca calon pendaftar di berbagai jenjang pendidikan.',
    year: '2025',
    results: 'Distribusi materi promosi resmi di seluruh kabupaten binaan.',
    logoImg: '/partner-ut.png',
    url: 'https://majene.ut.ac.id/',
  },
  {
    id: 'port-3',
    title: 'Identitas Visual & Kemasan Produk Yamani',
    client: 'Yamani Beard Care',
    category: 'Branding & Kemasan',
    categoryKey: 'branding',
    summary:
      'Pengembangan logo, kartu ucapan terima kasih (thank you card), stiker botol kosmetik pria, dan banner toko online di marketplace.',
    details:
      'Konsep maskulin elegan dengan dominasi monokrom dan aksen emas. File master siap dieksekusi oleh vendor cetak kemasan botol dan kardus luar.',
    year: '2025',
    results: 'Membangun impresi produk premium di segmen perawatan pria.',
    logoImg: '/partner-yamani.png',
    url: 'https://yamanibeard.com/',
  },
  {
    id: 'port-4',
    title: 'Portal Media Publikasi Lapas Kelas III Mamasa',
    client: 'Kemenkumham RI - Lapas Mamasa',
    category: 'Website & Publikasi',
    categoryKey: 'web',
    summary:
      'Penyusunan portal berita kegiatan pembinaan warga binaan, transparansi layanan publik, dan integrasi pengaduan masyarakat.',
    details:
      'Situs berkeamanan tinggi dengan navigasi struktural, pembaruan artikel berkala, dan akses ramah publik untuk memastikan akuntabilitas institusi negara.',
    year: '2025',
    results: 'Layanan keterbukaan informasi publik berjalan secara berkelanjutan.',
    logoImg: '/partner-lapas.png',
    url: 'https://lapaskls3mamasa.com/',
  },
  {
    id: 'port-5',
    title: 'Company Profile Digital Wahana Sinar Terang',
    client: 'PT Wahana Sinar Terang',
    category: 'Website & Identitas',
    categoryKey: 'web',
    summary:
      'Pembangunan company profile digital untuk menampilkan lini bisnis, armada transportasi, dan jangkauan wilayah distribusi klien.',
    details:
      'Dilengkapi katalog spesifikasi layanan niaga, tata kelola armada, dan form permintaan penawaran harga kemitraan B2B.',
    year: '2025',
    results: 'Mempermudah presentasi resmi kepada calon rekanan korporat.',
    logoImg: '/partner-wst.png',
    url: 'https://wstketanggungan.web.id/',
  },
  {
    id: 'port-6',
    title: 'Aset Digital & Ekosistem Display Home AI',
    client: 'Home AI Official',
    category: 'Desain Grafis & Aset Digital',
    categoryKey: 'design',
    summary:
      'Pembuatan infografis fitur produk berbasis kecerdasan buatan, banner etalase online, dan panduan visual media digital.',
    details:
      'Desain modern bernuansa teknologi futuristik yang menyederhanakan penjelasan teknis menjadi ilustrasi yang mudah dipahami calon konsumen.',
    year: '2025',
    results: 'Kejelasan informasi produk meningkatkan engagement pengunjung.',
    logoImg: '/partner-homeai.png',
    url: 'https://toko-homeai.pro/',
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Konsultasi & Penggalian Kebutuhan',
    desc: 'Kami mendengarkan target bisnis, referensi visual, volume kebutuhan, dan tenggat waktu yang Anda perlukan melalui diskusi terarah.',
  },
  {
    step: '02',
    title: 'Konsep & Eksplorasi Kreatif',
    desc: 'Tim kami merancang draf desain awal atau purwarupa struktur website dengan penekanan pada fungsionalitas dan identitas brand.',
  },
  {
    step: '03',
    title: 'Revisi & Penyempurnaan Detail',
    desc: 'Anda memberikan masukan untuk kami sempurnakan hingga seluruh detail visual, tipografi, dan alur teknis mencapai standar kepuasan.',
  },
  {
    step: '04',
    title: 'Produksi, Serah Terima & Go-Live',
    desc: 'File master asli diserahkan lengkap, proses cetak dikirim ke alamat tujuan, atau website diluncurkan ke server produksi.',
  },
];

export const WHY_US_POINTS = [
  {
    title: 'Layanan Terpadu di Satu Pintu',
    desc: 'Tidak perlu berpindah-pindah vendor. Dari konsep desain grafis, cetak fisik berkualitas, hingga peluncuran website bisnis, kami tangani secara selaras.',
  },
  {
    title: 'Pilihan Waktu Pengerjaan Fleksibel',
    desc: 'Kami memahami kebutuhan bisnis yang bergerak cepat. Tersedia opsi pengerjaan express (1 hari) untuk kebutuhan mendesak tanpa mengorbankan kualitas.',
  },
  {
    title: 'Bebas Template Murahan',
    desc: 'Setiap karya didesain khusus sesuai karakter dan target pasar brand Anda, memberikan diferensiasi yang kuat di antara para kompetitor.',
  },
  {
    title: 'Reputasi Klien Riil & Terverifikasi',
    desc: 'Dipercaya oleh institusi pendidikan negeri, lembaga negara, dan berbagai pelaku usaha mikro hingga korporasi di Indonesia.',
  },
  {
    title: 'Transparansi & Dukungan Responsif',
    desc: 'Komunikasi mudah via WhatsApp dan email resmi. Kami memberikan penawaran harga transparan tanpa biaya siluman tersembunyi.',
  },
  {
    title: 'Dukungan Induk Gubukhijau Corp',
    desc: 'Beroperasi dengan tata kelola manajemen profesional di bawah naungan korporasi yang berkomitmen pada integritas jangka panjang.',
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'landing-page-vs-website',
    title: 'Mengapa Bisnis Membutuhkan Landing Page Khusus untuk Iklan Berbayar?',
    category: 'Web & Digital Marketing',
    date: '18 Oktober 2026',
    readTime: '4 menit baca',
    excerpt:
      'Membedakan fungsi website company profile multi-halaman dan landing page satu halaman yang difokuskan khusus untuk konversi kampanye iklan.',
    author: 'Tim Editorial PT Sapalewa',
    content: [
      'Banyak pemilik bisnis melakukan kesalahan dengan mengarahkan seluruh anggaran iklan Google Ads atau Meta Ads ke halaman utama (homepage) website mereka. Padahal, homepage biasanya memuat terlalu banyak opsi navigasi yang memecah perhatian pengunjung.',
      'Landing page dirancang khusus dengan satu tujuan tunggal (Single Call-to-Action). Setiap elemen, mulai dari headline pemikat, bukti sosial (social proof), daftar manfaat, hingga tombol kontak langsung ke WhatsApp, disusun secara runut untuk memandu prospek mengambil keputusan dengan cepat.',
      'Di PT Sapalewa, kami merancang landing page dengan kecepatan muat sub-2 detik pada jaringan 4G/5G seluler serta formulir yang terhubung langsung dengan admin WhatsApp Anda.',
    ],
  },
  {
    id: 'panduan-material-cetak',
    title: 'Panduan Memilih Material Kertas & Finishing Cetak untuk Kebutuhan Korporat',
    category: 'Percetakan & Desain',
    date: '10 Oktober 2026',
    readTime: '5 menit baca',
    excerpt:
      'Mengenal perbedaan Art Paper, Art Carton, Linen, Ivory, serta efek finishing Doff vs Glossy agar media promosi Anda terlihat prestisius.',
    author: 'Tim Produksi Percetakan Sapalewa',
    content: [
      'Sentuhan fisik sebuah brosur, kartu nama, atau company profile cetak memberikan pengalaman sensorik yang tidak bisa digantikan oleh layar digital. Kualitas bahan mencerminkan seberapa serius perusahaan Anda menghargai calon kliennya.',
      'Untuk kartu nama korporat, penggunaan kertas Linen bertekstur atau Art Carton 310 gsm dengan lapisan laminasi Doff memberikan kesan eksklusif dan tahan gores. Sementara untuk spanduk outdoor, pastikan memilih bahan Flexi Frontlite dengan ketebalan minimal 340-440 gsm agar tahan cuaca hujan dan terik matahari.',
      'Tim PT Sapalewa selalu menyediakan sesi konsultasi gratis sebelum proses cetak massal agar material yang dipilih tepat guna dan efisien dari segi anggaran.',
    ],
  },
  {
    id: 'konsistensi-identitas-visual',
    title: 'Membangun Kredibilitas Usaha Melalui Konsistensi Identitas Visual',
    category: 'Branding & Identitas',
    date: '28 September 2026',
    readTime: '4 menit baca',
    excerpt:
      'Bagaimana keselarasan warna, logo, dan tipografi di seluruh media dapat menumbuhkan kepercayaan pelanggan hingga 80% lebih cepat.',
    author: 'Kreatif Director Sapalewa',
    content: [
      'Konsistensi adalah fondasi utama kepercayaan. Ketika calon pelanggan melihat feed media sosial, kartu nama, seragam kerja, dan website Anda menggunakan bahasa visual yang sama, pikiran mereka secara psikologis menilai bisnis Anda mapan dan terorganisir rapi.',
      'Banyak usaha gagal naik kelas bukan karena produk mereka buruk, melainkan karena visual mereka terlihat acak-acakan dan berganti-ganti warna setiap kali promosi dibuat.',
      'Panduan identitas visual (Brand Styleguide) yang kami susun di PT Sapalewa memastikan bahwa setiap staf atau vendor yang memproduksi materi bisnis Anda memiliki acuan warna hex, font resmi, dan tata letak logo yang pasti.',
    ],
  },
];
