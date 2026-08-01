import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone, MapPin, Mail, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo/Head';
// Real Capstone Drywall job site photos
import heroBg  from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_1785560771418.jpeg';
import project1 from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_(2)_1785560779700.jpeg';
import project2 from '@assets/WhatsApp_Image_2026-07-30_at_21.50.55_1785560755445.jpeg';
import project3 from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_(1)_1785560764251.jpeg';
import project4 from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_(1)_1785560789215.jpeg';
import project5 from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_1785560802133.jpeg';
import project6 from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_1785560771418.jpeg';

const services = [
  { title: "Drywall Installation",                     id: "drywall-installation"  },
  { title: "Commercial Drywall Taping & Plastering",   id: "taping-plastering"     },
  { title: "Metal Steel Stud Framing",                 id: "steel-stud-framing"    },
  { title: "T-Bar & Acoustic Ceilings",                id: "tbar-acoustic-ceilings"},
  { title: "Metal Ceiling Panels & Installation",      id: "metal-ceiling-panels"  },
  { title: "Specialty Ceilings & Soffit Assemblies",   id: "specialty-ceilings"    },
  { title: "Insulation",                               id: "insulation"            },
];

const whyPoints = [
  "Experienced tradespeople on every job",
  "Clean, organised work sites",
  "On time, on budget delivery",
  "Residential & commercial capability",
  "Fully licensed and insured in BC",
];

const galleryProjects = [
  { img: project1, title: "Custom Coffered Ceiling",        tag: "Residential" },
  { img: project2, title: "Interior Steel Stud Corridor",   tag: "Commercial"  },
  { img: project3, title: "Drywall & Ceiling Grid Install",  tag: "Commercial"  },
  { img: project4, title: "Drywall Finishing & Taping",      tag: "Residential" },
  { img: project5, title: "Residential Drywall Project",     tag: "Residential" },
  { img: project6, title: "Commercial Framing Build-Out",    tag: "Commercial"  },
];

export default function Home() {
  return (
    <>
      <Head
        title="Capstone Drywall | Full-Service Wall & Ceiling Contractor — BC"
        description="Full-service drywall and ceiling contractor serving Vancouver Island and the Lower Mainland. Drywall installation, taping, steel stud framing, acoustic ceilings, and more."
      />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Capstone Drywall job site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/90 via-[#0b1220]/65 to-[#0b1220]/20" />
        </div>

        <div className="container mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary font-bold uppercase tracking-widest text-sm px-4 py-2 rounded-sm mb-7"
            >
              5+ Years Experience
            </motion.div>

            <div className="flex items-start gap-5 mb-7">
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-white/30"
          />
        </motion.div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — sticky heading */}
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
                We deliver precision craftsmanship across the full scope of wall and ceiling systems — from framing right through to finish. Click any service to learn more.
              </p>
              {/* Inline trust badge */}
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-sm px-5 py-4">
                <Shield className="w-6 h-6 text-primary shrink-0" />
                <span className="text-sm font-semibold text-secondary">Fully Licensed &amp; Insured in BC</span>
              </div>
              <Link href="/services">
                <Button size="lg" className="mt-2">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Right — numbered service rows with anchor links */}
            <div className="divide-y divide-slate-100 border-t border-slate-100">
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                >
                  <Link href={`/services#${service.id}`}>
                    <div className="group flex items-center gap-5 py-5 cursor-pointer hover:bg-slate-50 px-3 -mx-3 rounded-sm transition-all duration-200">
                      {/* Number */}
                      <span className="text-xs font-bold text-slate-300 group-hover:text-primary transition-colors w-6 shrink-0 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {/* Title */}
                      <span className="flex-1 text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
                        {service.title}
                      </span>
                      {/* Arrow box */}
                      <div className="w-9 h-9 bg-slate-100 group-hover:bg-primary rounded-sm flex items-center justify-center shrink-0 transition-colors duration-200">
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
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
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Staggered photo grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="row-span-2 overflow-hidden rounded-sm">
                <img src={project1} alt="Capstone project" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-sm h-48">
                <img src={project2} alt="Capstone project" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-sm h-48">
                <img src={project3} alt="Capstone project" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-white space-y-7"
            >
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                The Capstone Standard
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We've built our reputation on showing up, doing the work right, and leaving a clean site behind. Whether it's one room or an entire commercial build-out, the standard doesn't change.
              </p>
              <ul className="space-y-3">
                {whyPoints.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{point}</span>
                  </motion.li>
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
              <Button variant="outline" size="lg">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Masonry-style grid: first item is tall */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
            {galleryProjects.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${idx === 0 ? 'row-span-2' : ''}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{p.tag}</span>
                  <span className="text-white font-bold text-base leading-snug">{p.title}</span>
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
                <motion.div
                  key={area}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-4 border-2 border-slate-200 hover:border-primary transition-colors rounded-sm px-8 py-5 min-w-[220px] cursor-default"
                >
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg font-bold text-secondary">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 bg-secondary overflow-hidden">
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize:'60px 60px'}} />
        {/* Red accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />

        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-primary font-bold uppercase tracking-widest text-sm">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Contact Capstone Drywall today for a free, no-obligation quote. We're ready to deliver exceptional results on Vancouver Island and the Lower Mainland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base font-bold shadow-lg shadow-primary/30">
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
              <a href="mailto:info@capstonedrywall.ca" className="text-slate-400 hover:text-primary transition-colors">info@capstonedrywall.ca</a>
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
