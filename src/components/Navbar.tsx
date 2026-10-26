import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang-kami' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Estimasi Biaya', href: '#kalkulator' },
    { label: 'Artikel', href: '#artikel' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single logo image */}
          <a
            href="#beranda"
            className="flex items-center shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md"
            aria-label="PT Sapalewa Beranda"
          >
            <img
              src="/logo-sapalewa.png"
              alt="PT Sapalewa"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </a>

          {/* Zone 2: 4-5 concise single-line text links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Konsultasi Cepat</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-150">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi via WhatsApp</span>
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <span>Formulir Penawaran</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
