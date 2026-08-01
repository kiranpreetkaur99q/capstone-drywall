import React from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@assets/WhatsApp_Image_2026-07-29_at_11.43.20_1785425424981.jpeg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="bg-white rounded px-3 py-2 inline-block">
                <img
                  src={logo}
                  alt="Capstone Drywall – Commercial & Residential"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-secondary-foreground/80 leading-relaxed text-sm">
              Professional drywall contracting services for residential and commercial projects. Quality workmanship, reliable service, and attention to detail you can count on.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-secondary-foreground/80 hover:text-primary transition-colors">Project Gallery</Link></li>
              <li><Link href="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Drywall Installation</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Commercial Drywall Taping & Plastering</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Metal Steel Stud Framing</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">T-Bar & Acoustic Ceilings</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Metal Ceiling Panels & Installation</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Specialty Ceilings & Soffit Assemblies</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Insulation</Link></li>
            </ul>
            <div className="pt-2 border-t border-white/10">
              <p className="text-xs text-secondary-foreground/50 uppercase tracking-wider font-semibold mb-2">Service Areas</p>
              <ul className="space-y-1">
                <li className="text-secondary-foreground/80 text-sm">Vancouver Island</li>
                <li className="text-secondary-foreground/80 text-sm">Lower Mainland</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white mb-1">Phone</span>
                  <a href="tel:6725137213" className="hover:text-primary transition-colors">(672) 513-7213</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white mb-1">Email</span>
                  <a href="mailto:capstoneroofinginfo@gmail.com" className="hover:text-primary transition-colors">capstoneroofinginfo@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white mb-1">Address</span>
                  <span>12699 68A Ave, Surrey BC V3W 1H3</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
          <p>&copy; {currentYear} Capstone Drywall. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>Designed for Trades professionals.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
