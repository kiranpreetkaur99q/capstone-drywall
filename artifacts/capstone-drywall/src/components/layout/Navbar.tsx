import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
            <span className="text-primary-foreground font-bold text-xl tracking-tighter">CD</span>
          </div>
          <span className="font-bold text-2xl tracking-tight text-foreground">
            Capstone <span className="text-primary">Drywall</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a href="tel:555-0198" className="hidden lg:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>(555) 555-0198</span>
            </a>
            <Link href="/contact">
              <Button>Request a Quote</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-base font-medium transition-colors ${
                      location === link.path ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 pt-4 border-t">
              <a href="tel:555-0198" className="flex items-center gap-2 text-base font-medium text-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>(555) 555-0198</span>
              </a>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Request a Quote</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
