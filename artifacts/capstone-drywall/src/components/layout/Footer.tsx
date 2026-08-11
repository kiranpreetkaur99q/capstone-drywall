import React from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@assets/WhatsApp_Image_2026-07-29_at_11.43.20_1785425424981.jpeg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Red top accent bar */}
      <div className="h-1 bg-primary w-full" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="bg-white rounded-sm p-2">
                <img
                  src={logo}
                  alt="Capstone Drywall"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[15px] font-extrabold text-white uppercase tracking-wider leading-none">
                  Capstone
                </span>
                <span className="text-[13px] font-bold text-primary uppercase tracking-[0.18em] leading-none mt-1">
                  Drywall
                </span>
              </div>
            </Link>
            <p className="text-secondary-foreground/70 leading-relaxed text-sm">
              Professional drywall contracting services for residential and commercial projects across Vancouver Island and the Lower Mainland.
            </p>
            {/* Mini trust badge */}
            <div className="inline-flex items-center gap-2 border border-primary/40 rounded-sm px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Licensed & Insured in BC</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="w-3 h-0.5 bg-primary inline-block rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Project Gallery', path: '/projects' },
                { label: 'Contact Us', path: '/contact' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link href={path} className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="w-3 h-0.5 bg-primary inline-block rounded-full" />
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {[
                'Drywall Installation',
                'Commercial Taping & Plastering',
                'Metal Steel Stud Framing',
                'T-Bar & Acoustic Ceilings',
                'Insulation',
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">Service Areas</p>
              <p className="text-secondary-foreground/70 text-sm">Vancouver Island &amp; Lower Mainland</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="w-3 h-0.5 bg-primary inline-block rounded-full" />
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/15 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-0.5">Phone</span>
                  <a href="tel:6725137213" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">(672) 513-7213</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/15 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-0.5">Email</span>
                  <a href="mailto:info@capstonedrywall.ca" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">info@capstonedrywall.ca</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/15 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-0.5">Address</span>
                  <span className="text-secondary-foreground/80 text-sm">12699 68A Ave,<br />Surrey BC V3W 1H3</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/40">
          <p>&copy; {currentYear} Capstone Drywall. All rights reserved.</p>
          <span>Serving BC Since 2019</span>
        </div>
      </div>
    </footer>
  );
}
