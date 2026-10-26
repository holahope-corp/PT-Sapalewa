import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'web-design',
    message: '',
    honeypot: '', // anti-bot spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Nama lengkap wajib diisi.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Nomor WhatsApp / telepon wajib diisi.';
    } else if (!/^(\+62|62|0)[0-9]{8,13}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      errs.phone = 'Format nomor telepon/WhatsApp tidak valid (contoh: 085602520987).';
    }
    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Format email tidak valid.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Pesan kebutuhan minimal 10 karakter.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot detected silently

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        service: 'web-design',
        message: '',
        honeypot: '',
      });
    }, 600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
            <span>Kontak & Kerja Sama</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Konsultasi Proyek</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Mari Wujudkan Kebutuhan Promosi dan Ekosistem Digital Anda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Hubungi tim PT Sapalewa melalui saluran komunikasi resmi di bawah ini atau kirimkan
            rincian kebutuhan Anda melalui formulir terverifikasi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Saluran Komunikasi Resmi
              </h3>

              {/* WhatsApp & Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 font-medium">WhatsApp / Telepon:</p>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{COMPANY_INFO.phoneDisplay}</span>
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </a>
                  <p className="text-[11px] text-slate-500">Respon cepat hari kerja.</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 font-medium">Email Korespondensi:</p>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-cyan-800 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmailToClipboard}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors"
                      title="Salin email"
                      aria-label="Salin email"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {copiedEmail && (
                    <span className="text-[10px] text-emerald-700 font-medium">Email tersalin!</span>
                  )}
                </div>
              </div>

              {/* Operational Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 font-medium">Jam Pelayanan:</p>
                  <p className="text-sm font-semibold text-slate-900">{COMPANY_INFO.workingHours}</p>
                  <p className="text-[11px] text-slate-500">Pesan di luar jam kerja akan dibalas pada hari kerja berikutnya.</p>
                </div>
              </div>

              {/* Entity info */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/70">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 font-medium">Badan Usaha & Wilayah Operasional:</p>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    PT Sapalewa (Gubukhijau Corp) — Melayani seluruh wilayah Indonesia via jaringan digital dan ekspedisi fisik.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Konsultasi Langsung WhatsApp
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Ingin respon instan dalam hitungan menit? Anda dapat langsung berdiskusi dengan admin kami di WhatsApp.
              </p>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                <span>Buka WhatsApp Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
            {isSuccess && submittedData ? (
              <div className="p-6 rounded-xl bg-emerald-50/80 border border-emerald-200 animate-in fade-in">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Pesan Berhasil Terkirim ke PT Sapalewa!</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  Terima kasih, <strong>{submittedData.name}</strong>. Tim representatif kami telah menerima ringkasan kebutuhan Anda dan akan menghubungi nomor <strong>{submittedData.phone}</strong> atau email <strong>{submittedData.email}</strong> dalam waktu maksimal 1x24 jam kerja.
                </p>

                <div className="mt-5 p-4 rounded-lg bg-white border border-emerald-200 text-xs space-y-1">
                  <p className="text-slate-500 font-mono">Ringkasan Pengiriman:</p>
                  <p><strong>Layanan:</strong> {SERVICES_DATA.find(s => s.id === submittedData.service)?.name || submittedData.service}</p>
                  {submittedData.company && <p><strong>Perusahaan/Usaha:</strong> {submittedData.company}</p>}
                  <p><strong>Detail Kebutuhan:</strong> {submittedData.message}</p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/6285602520987?text=${encodeURIComponent(
                      `Halo PT Sapalewa, saya baru saja mengirimkan form atas nama ${submittedData.name} mengenai ${submittedData.service}. Mohon dicek. Terima kasih!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Konfirmasi Cepat via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    Kirim Pesan Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100">
                  Formulir Permintaan Penawaran & Konsultasi
                </h3>

                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Contoh: Rahmat Hidayat"
                      className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:ring-1 focus:outline-hidden transition-colors ${
                        errors.name
                          ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-600'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      No. WhatsApp / Telepon <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="Contoh: 081234567890"
                      className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:ring-1 focus:outline-hidden transition-colors ${
                        errors.phone
                          ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-600'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Alamat Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="nama@perusahaan.com"
                      className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:ring-1 focus:outline-hidden transition-colors ${
                        errors.email
                          ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Perusahaan / Institusi (Opsional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="PT / CV / Lembaga / Toko"
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-700 mb-1">
                    Layanan yang Diperlukan <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 focus:outline-hidden bg-white"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.category.toUpperCase()})
                      </option>
                    ))}
                    <option value="custom">Kebutuhan Custom / Kolaborasi Lainnya</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Detail Kebutuhan atau Catatan Proyek <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Jelaskan kebutuhan Anda, seperti jenis desain, jumlah cetak, atau fitur website yang diinginkan..."
                    className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border focus:ring-1 focus:outline-hidden transition-colors ${
                      errors.message
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500'
                        : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-600'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-cyan-700 disabled:bg-slate-400 rounded-lg transition-colors shadow-xs"
                  >
                    {isSubmitting ? (
                      <span>Mengirim Formulir...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Permintaan Konsultasi</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Data Anda aman dan hanya digunakan untuk keperluan korespondensi proyek resmi.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
