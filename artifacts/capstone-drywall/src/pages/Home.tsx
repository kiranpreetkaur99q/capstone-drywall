import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowRight, Phone, MapPin, Mail, Shield, Star,
  Layers, Wrench, Grid3X3, Volume2, Wind,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo/Head';

// Real Capstone Drywall job site photos
import heroBg   from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_1785560771418.jpeg';
import photo1   from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_(2)_1785560779700.jpeg';
import photo2   from '@assets/WhatsApp_Image_2026-07-30_at_21.50.55_1785560755445.jpeg';
import photo3   from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_(1)_1785560764251.jpeg';
import photo4   from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_(1)_1785560789215.jpeg';
import photo5   from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_1785560802133.jpeg';
import breakBg  from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_1785560771418.jpeg';

const services = [
  { icon: Layers,    title: "Drywall Installation",              desc: "New builds, renovations, and complete remodels — perfectly hung and ready to finish.", id: "drywall-installation" },
  { icon: Wrench,    title: "Taping & Plastering",               desc: "Seamless, paint-ready surfaces with multi-coat plastering and feather-edge blending.",  id: "taping-plastering"    },
  { icon: Grid3X3,   title: "Steel Stud Framing",                desc: "Precision metal framing for partitions, walls, and bulkheads — commercial grade.",       id: "steel-stud-framing"   },
  { icon: Volume2,   title: "T-Bar & Acoustic Ceilings",         desc: "Suspended grid systems and acoustic tile for offices, clinics, and retail spaces.",       id: "tbar-acoustic-ceilings"},
  { icon: Wind,      title: "Insulation",                        desc: "Batt, blown-in, and board insulation for residential and commercial applications.",        id: "insulation"           },
];

const whyPoints = [
  "Experienced tradespeople on every job",
  "Clean, organised work sites",
  "On time, on budget delivery",
  "Residential & commercial capability",
  "Fully licensed and insured in BC",
];

const stats = [
  { value: "5+",   label: "Years in Business"    },
  { value: "200+", label: "Projects Completed"   },
  { value: "100%", label: "Licensed & Insured"   },
];

export default function Home() {
  return (
    <>
      <Head
        title="Capstone Drywall | Full-Service Wall & Ceiling Contractor — BC"
        description="Full-service drywall and ceiling contractor serving Vancouver Island and the Lower Mainland. Drywall installation, taping, steel stud framing, acoustic ceilings, and more."
      />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[660px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Capstone Drywall job site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d18]/95 via-[#060d18]/70 to-[#060d18]/10" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary z-10" />

        <div className="container mx-auto px-6 z-10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary text-white font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-sm mb-8"
            >
              <Star className="w-3 h-3 fill-white" />
              BC's Trusted Drywall Contractor
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-[1.0] tracking-tight uppercase mb-6">
              Built Right.<br />
              <span className="text-primary">Every Time.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Full-service wall &amp; ceiling contractor serving Vancouver Island and the Lower Mainland — residential and commercial, done right.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 text-base font-bold shadow-xl shadow-primary/40">
                  Get a Free Quote
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-8 bg-white/30" />
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-primary py-5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center px-4 py-1">
                <p className="text-2xl md:text-4xl font-extrabold text-white">{value}</p>
                <p className="text-[11px] md:text-sm font-semibold text-white/75 uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              <p className="text-primary font-bold uppercase tracking-widest text-sm">What We Do</p>
              <span className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Our Services</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
              Precision craftsmanship across the full scope of wall and ceiling systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <Link href={`/services#${service.id}`}>
                  <div className="group border border-slate-100 rounded-sm p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer h-full flex flex-col bg-white hover:bg-primary/[0.02]">
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-sm flex items-center justify-center mb-5 transition-colors duration-300 shrink-0">
                      <service.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors mb-2 leading-snug">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">{service.desc}</p>
                    <div className="flex items-center gap-1 mt-4 text-primary text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Extra card: CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: services.length * 0.06 }}
            >
              <Link href="/contact">
                <div className="group bg-primary rounded-sm p-6 cursor-pointer h-full flex flex-col justify-between hover:bg-primary/90 transition-colors duration-300">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-sm flex items-center justify-center mb-5">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">Free Quote</h3>
                    <p className="text-sm text-white/80 leading-relaxed">Get a no-obligation estimate for your project today.</p>
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-white font-bold text-sm">
                    Request Now <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED PHOTO BREAK ── */}
      <section className="relative h-[480px] md:h-[560px] overflow-hidden flex items-center">
        <img src={photo2} alt="Capstone Drywall commercial project" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d18]/90 via-[#060d18]/70 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Promise</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              5 Years. 200+ Projects.<br />Zero Compromises.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Every job gets our full attention — from the first stud to the final coat. We don't cut corners because our reputation depends on every single wall we build.
            </p>
            <Link href="/projects">
              <Button size="lg" className="h-12 px-8 font-bold">
                See Our Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              <p className="text-primary font-bold uppercase tracking-widest text-sm">How It Works</p>
              <span className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Our Process</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
              From first call to final coat — here's exactly what to expect when you work with Capstone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-slate-100 z-0" />

            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "Contact us by phone or form. We'll discuss your project scope, timeline, and budget — no pressure, no obligation.",
              },
              {
                step: "02",
                title: "Detailed Quote",
                desc: "We visit the site, take measurements, and provide a clear, detailed written quote so there are no surprises.",
              },
              {
                step: "03",
                title: "Scheduled Execution",
                desc: "Our experienced crew arrives on time, works clean, and keeps you informed throughout every stage of the job.",
              },
              {
                step: "04",
                title: "Final Walkthrough",
                desc: "We inspect every surface with you before we leave. Your satisfaction is the sign-off — not the clock.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                  <span className="text-primary font-extrabold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/contact">
              <Button size="lg" className="h-13 px-10 font-bold shadow-lg shadow-primary/30">
                Start With a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CAPSTONE ── */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Photo mosaic */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="row-span-2 overflow-hidden rounded-sm">
                <img src={photo1} alt="Capstone project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="overflow-hidden rounded-sm h-52">
                <img src={photo3} alt="Capstone project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="overflow-hidden rounded-sm h-52">
                <img src={photo4} alt="Capstone project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
              <div className="flex items-center gap-3">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                <p className="text-primary font-bold uppercase tracking-widest text-sm">Why Choose Us</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                The Capstone Standard
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We've built our reputation on showing up, doing the work right, and leaving a clean site behind. One room or an entire commercial build-out — the standard doesn't change.
              </p>
              <ul className="space-y-4">
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
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                <p className="text-primary font-bold uppercase tracking-widest text-sm">Our Work</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Recent Projects</h2>
            </div>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Gallery grid — first item tall, rest square */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[240px]">
            {[
              { img: photo5, title: "Residential Drywall Project",    tag: "Residential" },
              { img: photo1, title: "Custom Coffered Ceiling",         tag: "Residential" },
              { img: photo2, title: "Interior Steel Stud Corridor",    tag: "Commercial"  },
              { img: photo3, title: "Drywall & Ceiling Grid Install",  tag: "Commercial"  },
              { img: photo4, title: "Drywall Finishing & Taping",      tag: "Residential" },
            ].map((p, idx) => (
              <Link key={idx} href="/projects" className={`block ${idx === 0 ? 'row-span-2' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="relative overflow-hidden rounded-sm group cursor-pointer h-full"
                >
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d18]/90 via-[#060d18]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{p.tag}</span>
                    <span className="text-white font-bold text-base leading-snug">{p.title}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                <p className="text-primary font-bold uppercase tracking-widest text-sm">Where We Work</p>
              </div>
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
                  className="flex items-center gap-4 border-2 border-primary/20 hover:border-primary bg-white hover:bg-primary/5 transition-all duration-200 rounded-sm px-8 py-5 min-w-[220px] cursor-default group"
                >
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize:'60px 60px'}} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Get Started</p>
              <span className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Contact Capstone Drywall today for a free, no-obligation quote. Serving Vancouver Island and the Lower Mainland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base font-bold shadow-lg shadow-primary/40">
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
              <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center mb-1">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-sm uppercase tracking-wider text-white/60">Call Us</p>
              <a href="tel:6725137213" className="text-white hover:text-primary transition-colors font-semibold">(672) 513-7213</a>
            </div>
            <div className="flex flex-col items-center py-4 gap-2">
              <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center mb-1">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-sm uppercase tracking-wider text-white/60">Email Us</p>
              <a href="mailto:info@capstonedrywall.ca" className="text-white hover:text-primary transition-colors font-semibold">info@capstonedrywall.ca</a>
            </div>
            <div className="flex flex-col items-center py-4 gap-2">
              <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center mb-1">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-sm uppercase tracking-wider text-white/60">Based In</p>
              <p className="text-white font-semibold">Surrey, BC</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
