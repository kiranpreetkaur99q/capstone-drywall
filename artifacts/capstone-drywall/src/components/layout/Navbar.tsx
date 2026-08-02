import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@assets/WhatsApp_Image_2026-07-29_at_11.43.20_1785425424981.jpeg';

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Red accent bar at top */}
      <div className="h-1 bg-primary w-full" />

      {/* Main nav bar */}
      <div className={`w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white border-b border-slate-100'}`}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Capstone Drywall"
              className="h-[68px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-sm group ${
                      location === link.path
                        ? 'text-primary'
                        : 'text-slate-600 hover:text-secondary'
                    }`}
                  >
                    {link.name}
                    {/* Active underline */}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full transition-all duration-200 ${
                      location === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                    }`} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA area */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="tel:6725137213"
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-primary" />
              </div>
              <span>(672) 513-7213</span>
            </a>
            <Link href="/contact">
              <Button className="h-10 px-5 text-sm font-bold tracking-wide shadow-md shadow-primary/20 gap-1.5">
                Free Quote
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-secondary rounded-sm hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-5 flex flex-col gap-5">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-sm text-base font-semibold transition-colors ${
                      location === link.path
                        ? 'bg-primary/10 text-primary'
                        : 'text-secondary hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                    {location === link.path && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
              <a href="tel:6725137213" className="flex items-center gap-3 text-base font-semibold text-secondary px-1">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>(672) 513-7213</span>
              </a>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full h-12 text-base font-bold tracking-wide">
                  Request a Free Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
