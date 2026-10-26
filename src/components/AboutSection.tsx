import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Target, Sparkles, Building2, Clock, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: '01. Orientasi Hasil Bisnis Nyata',
      desc: 'Setiap desain dan landing page yang kami rancang tidak semata-mata mengejar keindahan visual, melainkan difokuskan untuk memudahkan calon pelanggan memahami penawaran dan melakukan transaksi.',
    },
    {
      icon: Clock,
      title: '02. Komitmen Waktu & Kecepatan (Fastest Solution)',
      desc: 'Kami memahami dinamika bisnis yang bergerak cepat. Tersedia alur pengerjaan berkecepatan tinggi mulai dari 1 hari hingga paket terjadwal yang mengedepankan ketepatan waktu.',
    },
    {
      icon: ShieldCheck,
      title: '03. Kejujuran Spesifikasi & File Asli',
      desc: 'Kami tidak memotong sudut kualitas: material cetak sesuai gramatur yang disepakati, kode website bersih tanpa bloatware, dan file desain diserahkan lengkap dalam format master resolusi tinggi.',
    },
    {
      icon: Users,
      title: '04. Komunikasi Terbuka & Ramah Konsultasi',
      desc: 'Anda dapat mendiskusikan kebutuhan promosi secara santai namun profesional langsung dengan tim kami sebelum memutuskan bekerja sama, tanpa tekanan pembelian.',
    },
  ];

  return (
    <section id="tentang-kami" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
            <span>Profil Perusahaan</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Tentang PT Sapalewa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Membangun Reputasi Brand Melalui Estetika, Presisi Cetak, dan Teknologi Digital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Narrative & Corporate Structure */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-5 h-5 text-cyan-700" />
                <h3 className="text-base font-bold text-slate-900">
                  Struktur Induk: GUBUKHIJAU CORP
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                Sapalewa beroperasi secara resmi dalam ekosistem usaha <strong className="text-slate-900">GUBUKHIJAU CORP</strong>.
                Sinergi ini memberikan kepastian tata kelola operasional, integritas manajemen,
                serta daya dukung sarana produksi yang mumpuni untuk melayani pesanan dari berbagai skala—mulai dari
                pesanan UMKM lokal hingga kebutuhan pengadaan institusi dan korporasi.
              </p>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base">
              <p>
                Bermula dari komitmen untuk menyediakan akses desain dan percetakan berkualitas bagi pelaku usaha,
                PT Sapalewa terus bertransformasi mengadopsi perangkat lunak desain termutakhir, mesin percetakan digital beresolusi tinggi,
                serta metodologi pembuatan website modern yang ringan dan ramah mesin pencari.
              </p>
              <p>
                Filosofi kerja kami berakar pada semboyan <strong className="text-slate-900">"Partner Kreatif & Imajinatif untuk Usaha Anda"</strong>.
                Kami meyakini bahwa promosi yang efektif lahir dari perpaduan riset audiens yang tepat sasaran, visual yang memikat mata dalam 3 detik pertama,
                dan kemudahan akses bagi calon pelanggan untuk langsung menghubungi pemilik bisnis.
              </p>
            </div>

            {/* Visi & Misi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-2">Visi Kami</p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Menjadi mitra strategis terdepan di Indonesia dalam penyediaan solusi kreatif, percetakan presisi, dan ekosistem website bisnis yang berdaya saing tinggi.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-2">Misi Kami</p>
                <ul className="text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                  <li>Memberikan solusi promosi berkecepatan tinggi tanpa kompromi kualitas.</li>
                  <li>Membuka kemudahan akses digital bagi UMKM dan institusi.</li>
                  <li>Menjaga transparansi proses dan file master lengkap bagi klien.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100">
              <img
                src="/src/assets/images/brand_design_craft_1792989255906.jpg"
                alt="Proses Kurasi Desain Grafis dan Tipografi PT Sapalewa"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="p-5 bg-white border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Standar Karya
                </p>
                <p className="text-sm font-bold text-slate-900 mt-1">
                  Mendukung Format Layar & Cetak Industri
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Setiap karya disesuaikan dengan profil warna (RGB / CMYK 300DPI) agar tidak terjadi deviasi saat ditampilkan di layar maupun dicetak massal.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-950 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Nilai Kerja Utama
                </span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                "Kami selalu berusaha berkembang dan memberikan yang terbaik untuk para klien dan pelanggan jasa desain kami."
              </p>
              <p className="text-xs text-slate-400 mt-2 font-medium">
                — Prinsip Layanan Sapalewa (sapalewa.web.id)
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Values Grid */}
        <div className="border-t border-slate-200/80 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-1">Prinsip Kerja</p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Mengapa Calon Klien Mempercayakan Proyeknya Kepada Kami
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const IconComp = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-cyan-300 hover:shadow-xs transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
