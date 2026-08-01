import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo/Head';
// Real Capstone Drywall job site photos
import heroBg from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_1785560771418.jpeg';
import project1 from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_(2)_1785560779700.jpeg';
import project2 from '@assets/WhatsApp_Image_2026-07-30_at_21.50.55_1785560755445.jpeg';
import project3 from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_(1)_1785560764251.jpeg';
import project4 from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_(1)_1785560789215.jpeg';
import project5 from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_1785560802133.jpeg';
import project6 from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_1785560771418.jpeg';

const services = [
  "Drywall Installation",
  "Commercial Drywall Taping & Plastering",
  "Metal Steel Stud Framing",
  "T-Bar & Acoustic Ceilings",
  "Metal Ceiling Panels & Installation",
  "Specialty Ceilings & Soffit Assemblies",
  "Insulation",
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "2", label: "Regions Served" },
];

export default function Home() {
  return (
    <>
      <Head
        title="Capstone Drywall | Full-Service Wall & Ceiling Contractor — BC"
        description="Full-service drywall and ceiling contractor serving Vancouver Island and the Lower Mainland. Drywall installation, taping, steel stud framing, acoustic ceilings, and more."
      />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[620px] flex items-center overflow-hidden">
        {/* Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Capstone Drywall job site"
            className="w-full h-full object-cover"
          />
          {/* Gradient — dark on left, lighter on right so photo shows */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/85 via-[#0b1220]/60 to-[#0b1220]/20" />
        </div>

        <div className="container mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Red left-border accent — RWC-style */}
            <div className="flex items-start gap-5 mb-8">
              <div className="w-1.5 bg-primary self-stretch rounded-full shrink-0 mt-1" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight uppercase">
                Building the Highest Standards
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Full-service wall &amp; ceiling contractor serving Vancouver Island and the Lower Mainland. Residential and commercial — done right.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base font-bold shadow-xl shadow-primary/30">
                  Request a Free Quote
                </Button>
              </Link>
              <a href="tel:6725137213">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/30 text-white hover:bg-white/10 hover:border-white/60">
                  <Phone className="mr-2 h-5 w-5" />
                  (672) 513-7213
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center text-white">
                <p className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</p>
                <p className="text-sm text-white/80 font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: heading + copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32 space-y-6"
            >
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
                What We Do
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We deliver precision craftsmanship across the full scope of wall and ceiling systems — from framing right through to finish. Residential and commercial, any size.
              </p>
              <Link href="/services">
                <Button size="lg" className="mt-4">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Right: service list — clean lined rows like the uploaded reference */}
            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {services.map((service, idx) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Link href="/services">
                    <div className="group flex items-center justify-between py-5 cursor-pointer hover:pl-2 transition-all duration-200">
                      <span className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
                        {service}
                      </span>
                      <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary rounded flex items-center justify-center shrink-0 transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CAPSTONE ── */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {[project1, project2, project3, project4].map((img, i) => (
                <div key={i} className={`overflow-hidden rounded-sm ${i === 0 ? 'row-span-2' : ''}`}>
                  <img
                    src={img}
                    alt={`Capstone project ${i + 1}`}
                    className={`w-full object-cover ${i === 0 ? 'h-full' : 'h-48'}`}
                  />
                </div>
              ))}
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-8"
            >
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                The Capstone Standard
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We've built our reputation on showing up, doing the work right, and leaving a clean site behind. Whether it's one room or an entire commercial build-out, the standard doesn't change.
              </p>
              <ul className="space-y-4">
                {[
                  "Experienced tradespeople on every job",
                  "Clean, organized work sites",
                  "On time, on budget delivery",
                  "Residential & commercial capability",
                  "Fully licensed and insured in BC",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button size="lg" className="mt-2">
                  Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Our Work</p>
              <h2 className="text-4xl font-extrabold text-secondary">Recent Projects</h2>
            </div>
            <Link href="/projects">
              <Button variant="outline" size="lg">View Full Gallery <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[project1, project2, project3, project4, project5, project6].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ArrowRight className="text-white w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-3">
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Where We Work</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
                Proudly Serving British Columbia
              </h2>
              <p className="text-slate-600 max-w-md">
                Based in Surrey, BC — Capstone Drywall operates across two major BC regions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 shrink-0">
              {["Vancouver Island", "Lower Mainland"].map((area) => (
                <div key={area} className="flex items-center gap-4 border-2 border-slate-200 hover:border-primary transition-colors rounded-sm px-8 py-5 min-w-[220px]">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg font-bold text-secondary">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-primary font-bold uppercase tracking-widest text-sm">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-400 text-lg">
              Contact Capstone Drywall today for a free quote. We're ready to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base font-bold">
                  Request a Free Quote
                </Button>
              </Link>
              <a href="tel:6725137213">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/30 text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" />
                  (672) 513-7213
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="py-12 bg-[#080f1a] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center py-4 gap-2">
              <Phone className="w-5 h-5 text-primary mb-1" />
              <p className="font-bold">Call Us</p>
              <a href="tel:6725137213" className="text-slate-400 hover:text-primary transition-colors">(672) 513-7213</a>
            </div>
            <div className="flex flex-col items-center py-4 gap-2">
              <Mail className="w-5 h-5 text-primary mb-1" />
              <p className="font-bold">Email Us</p>
              <a href="mailto:info@capstonedrywall.com" className="text-slate-400 hover:text-primary transition-colors">info@capstonedrywall.com</a>
            </div>
            <div className="flex flex-col items-center py-4 gap-2">
              <MapPin className="w-5 h-5 text-primary mb-1" />
              <p className="font-bold">Based In</p>
              <p className="text-slate-400">12699 68A Ave, Surrey BC V3W 1H3</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
