import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { Calculator, Clock, MessageSquare, ArrowRight, Check, Sparkles } from 'lucide-react';

interface ProjectEstimatorProps {
  initialServiceId?: string;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ initialServiceId }) => {
  const [selectedService, setSelectedService] = useState<string>(initialServiceId || 'web-design');
  const [selectedItems, setSelectedItems] = useState<string[]>(['Landing Page Iklan (Google/Meta Ads)']);
  const [urgency, setUrgency] = useState<'express' | 'standard' | 'flexible'>('standard');
  const [notes, setNotes] = useState('');

  // Options by service
  const serviceOptions: Record<string, { label: string; items: string[] }> = {
    'graphic-design': {
      label: 'Desain Grafis Profesional',
      items: [
        'Desain Logo & Brand Identity Baru',
        'Desain Feed & Story Media Sosial (Paket Bulanan)',
        'Desain Brosur / Company Profile Lipat 3',
        'Desain Spanduk & Banner Event / Promosi',
        'Desain Kemasan & Label Botol / Kotak Produk',
        'Desain Kartu Nama Korporat & ID Card',
      ],
    },
    'printing-service': {
      label: 'Percetakan & Digital Printing',
      items: [
        'Cetak Spanduk Vinyl Outdoor (Frontlite/Backlite)',
        'Cetak Buku Laporan / Katalog Produk (Jilid Spiral/Lem)',
        'Cetak Brosur Full Colour (Art Paper 150g)',
        'Cetak Kalender Meja / Dinding Perusahaan',
        'Cetak Jersey Sublimasi / Seragam Komunitas',
        'Cetak Kartu Nama Eksklusif (Laminasi Doff)',
      ],
    },
    'web-design': {
      label: 'Pembuatan Website & Landing Page',
      items: [
        'Landing Page Iklan (Google/Meta Ads)',
        'Website Company Profile Perusahaan Multi-halaman',
        'Website Portal Berita / Blog Edukasi',
        'Integrasi WhatsApp Direct & Form Pemesanan',
        'Optimasi Kecepatan Muat & SEO On-Page Dasar',
        'Setup Domain Bisnis, Hosting & SSL Aman',
      ],
    },
    'digital-invitation': {
      label: 'Layanan Undangan Digital (Nikahin)',
      items: [
        'Website Undangan Pernikahan Interaktif',
        'Undangan Gambar Digital (Story & Feed Instagram)',
        'Undangan Video Animasi HD Berdurasi 1 Menit',
        'Fitur RSVP & Buku Tamu Digital Terintegrasi',
        'Integrasi Google Maps Lokasi Resepsi',
      ],
    },
  };

  const currentOptions = serviceOptions[selectedService] || serviceOptions['web-design'];

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      if (selectedItems.length > 1) {
        setSelectedItems(selectedItems.filter((i) => i !== item));
      }
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const getEstimatedTimeline = () => {
    if (urgency === 'express') return '1 - 2 Hari Kerja (Prioritas Cepat)';
    if (urgency === 'standard') return '3 - 5 Hari Kerja (Jadwal Standar)';
    return '7 - 10 Hari Kerja (Jadwal Fleksibel)';
  };

  // Generate formatted WhatsApp message URL
  const generateWhatsAppUrl = () => {
    const serviceName = currentOptions.label;
    const itemsList = selectedItems.map((item, idx) => `${idx + 1}. ${item}`).join('\n');
    const urgencyLabel =
      urgency === 'express'
        ? 'Express (1-2 Hari)'
        : urgency === 'standard'
        ? 'Standar (3-5 Hari)'
        : 'Fleksibel (7+ Hari)';

    const text = `Halo Admin PT Sapalewa,\n\nSaya ingin konsultasi estimasi proyek melalui website:\n\n*Bidang Layanan:* ${serviceName}\n*Urgensi Waktu:* ${urgencyLabel}\n*Estimasi Jadwal:* ${getEstimatedTimeline()}\n\n*Kebutuhan Spesifik:*\n${itemsList}\n\n${notes ? `*Catatan Tambahan:* ${notes}\n\n` : ''}Mohon informasi ketersediaan slot dan penawaran biaya resmi. Terima kasih!`;

    return `https://wa.me/6285602520987?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="kalkulator" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
            <span>Alat Bantu Calon Klien</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Kalkulator Estimasi Proyek</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Rencanakan Kebutuhan & Jadwal Pekerjaan Anda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Pilih layanan dan cakupan pengerjaan yang Anda butuhkan. Dapatkan estimasi alur kerja
            serta kirimkan ringkasan kebutuhan ini langsung ke tim PT Sapalewa dengan satu klik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
            {/* Step 1: Select Service Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                1. Pilih Kategori Layanan Utama
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {Object.entries(serviceOptions).map(([key, opt]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setSelectedService(key);
                      setSelectedItems([serviceOptions[key].items[0]]);
                    }}
                    className={`p-3 text-left text-xs sm:text-sm font-semibold rounded-xl border transition-all ${
                      selectedService === key
                        ? 'border-cyan-600 bg-cyan-50/50 text-cyan-950 font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Items Needed */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Pilih Cakupan Item (Bisa Pilih Lebih dari Satu)
                </label>
                <span className="text-[11px] text-slate-400 font-medium">
                  {selectedItems.length} item dipilih
                </span>
              </div>
              <div className="space-y-2">
                {currentOptions.items.map((item) => {
                  const isChecked = selectedItems.includes(item);
                  return (
                    <div
                      key={item}
                      onClick={() => toggleItem(item)}
                      className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors text-xs sm:text-sm ${
                        isChecked
                          ? 'border-cyan-500 bg-cyan-50/30 text-slate-900 font-medium'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-sm flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? 'bg-cyan-600 text-white' : 'border border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                3. Tingkat Urgensi Pengerjaan
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { key: 'express', title: 'Express', sub: '1 - 2 Hari' },
                  { key: 'standard', title: 'Standar', sub: '3 - 5 Hari' },
                  { key: 'flexible', title: 'Fleksibel', sub: '7 - 10 Hari' },
                ].map((u) => (
                  <button
                    key={u.key}
                    type="button"
                    onClick={() => setUrgency(u.key as any)}
                    className={`p-3 text-center rounded-xl border transition-all ${
                      urgency === u.key
                        ? 'border-cyan-600 bg-cyan-50/50 text-cyan-950 font-bold'
                        : 'border-slate-200 text-slate-700 bg-white hover:border-slate-300'
                    }`}
                  >
                    <p className="text-xs font-bold">{u.title}</p>
                    <p className="text-[10px] text-slate-500">{u.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional note */}
            <div>
              <label htmlFor="kalkulator-notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                4. Catatan Khusus / Deskripsi Singkat (Opsional)
              </label>
              <textarea
                id="kalkulator-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Misal: Sudah punya logo sendiri, butuh spanduk ukuran 3x1 meter, atau ingin integrasi form pesanan."
                className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>Ringkasan Estimasi Proyek</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                {currentOptions.label}
              </h3>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <p className="text-[11px] text-slate-400 uppercase font-semibold">
                    Estimasi Tenggat Waktu
                  </p>
                  <p className="text-sm font-bold text-cyan-300 mt-0.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {getEstimatedTimeline()}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-semibold mb-2">
                    Item yang Dikonfirmasi ({selectedItems.length}):
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {selectedItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                  <p>
                    Biaya resmi akan dihitung secara transparan berdasarkan volume pekerjaan, jenis kertas/bahan cetak, atau kompleksitas integrasi web. Tanpa komitmen tersembunyi.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Kirim Ringkasan ke WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[10px] text-slate-500 mt-2">
                Nomor Resmi Admin: {COMPANY_INFO.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
