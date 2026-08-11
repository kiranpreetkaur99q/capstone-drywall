import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Head } from '@/components/seo/Head';

// Real Capstone Drywall job site photos
import imgInstall    from '@assets/WhatsApp_Image_2026-08-08_at_11.56.22_1786475514099.jpeg';
import imgTaping     from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_1785560802133.jpeg';
import imgFraming1   from '@assets/WhatsApp_Image_2026-07-30_at_21.50.55_1785560755445.jpeg';
import imgFraming2   from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_1785560771418.jpeg';
import imgTBar       from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_(1)_1785560764251.jpeg';
import imgSoffit     from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_(2)_1785560779700.jpeg';
import imgInsulation from '@assets/WhatsApp_Image_2026-08-08_at_11.56.01_1786475434556.jpeg';

const services = [
  {
    id: "drywall-installation",
    title: "Drywall Installation",
    desc: "Expert hanging and installation of drywall for new builds, additions, and complete remodels. We ensure perfectly aligned boards, properly spaced fasteners, and structurally sound installations ready for finishing — whether it's a single room or an entire commercial build-out.",
    bullets: ["New construction & renovations", "Residential & commercial", "Level-ready for finishing"],
    img: imgInstall
  },
  {
    id: "taping-plastering",
    title: "Commercial Drywall Taping & Plastering",
    desc: "Precision joint treatment and plastering to create seamless, paint-ready surfaces. Our commercial taping process handles high-volume projects efficiently without sacrificing quality — delivering flat, crack-resistant walls and ceilings that stand the test of time.",
    bullets: ["Paper & mesh tape applications", "Multi-coat plastering", "Feather-edge blending for seamless results"],
    img: imgTaping
  },
  {
    id: "steel-stud-framing",
    title: "Metal Steel Stud Framing",
    desc: "Professional metal steel stud framing for interior partitions, walls, and bulkheads. Steel framing offers superior straightness, fire resistance, and longevity — ideal for commercial offices, retail build-outs, and any application where precision and durability matter.",
    bullets: ["Interior partitions & feature walls", "Commercial & residential builds", "Fire-rated stud assemblies"],
    img: imgFraming1
  },
  {
    id: "tbar-acoustic-ceilings",
    title: "T-Bar & Acoustic Ceilings",
    desc: "Installation of suspended T-bar grid systems and acoustic ceiling tiles for offices, schools, healthcare facilities, and retail spaces. We handle full grid layout, tile placement, and integration with lighting and HVAC to deliver a clean, professional finish every time.",
    bullets: ["T-bar suspended grid systems", "Acoustic tile installation", "Integration with lighting & HVAC"],
    img: imgTBar
  },
  {
    id: "metal-ceiling-panels",
    title: "Metal Ceiling Panels & Installation",
    desc: "Supply and installation of metal ceiling panels for modern commercial interiors. Metal panel ceilings offer a sleek, contemporary aesthetic combined with durability and ease of maintenance — perfect for lobbies, corridors, boardrooms, and high-end retail environments.",
    bullets: ["Snap-in & lay-in metal panels", "Custom grid configurations", "Commercial & institutional projects"],
    img: imgFraming2
  },
  {
    id: "specialty-ceilings",
    title: "Specialty Ceilings & Soffit Assemblies",
    desc: "Design and construction of custom soffit assemblies, curved soffits, bulkheads, and architectural ceiling features. We work from plans or collaborate directly with designers to bring complex ceiling concepts to life with precision and craftsmanship.",
    bullets: ["Custom soffits & bulkheads", "Curved & coffered ceiling details", "Coordination with mechanical & electrical trades"],
    img: imgSoffit
  },
  {
    id: "insulation",
    title: "Insulation",
    desc: "Supply and installation of insulation to improve energy efficiency, soundproofing, and comfort. We work with batt, blown-in, and rigid foam products, ensuring proper coverage and fit between studs, joists, and ceiling cavities before drywall goes up.",
    bullets: ["Thermal & acoustic insulation", "Walls, ceilings & floors", "Residential & commercial"],
    img: imgInsulation
  }
];

export default function Services() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  return (
    <>
      <Head 
        title="Our Services | Capstone Drywall" 
        description="Full-service drywall contractor: drywall installation, commercial taping & plastering, metal steel stud framing, T-bar & acoustic ceilings, metal ceiling panels, specialty ceilings, and insulation across Vancouver Island and the Lower Mainland." 
      />

      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">What We Do</h1>
            <p className="text-xl text-slate-300">
              Full-service drywall and ceiling contracting — executed with precision, efficiency, and an unwavering commitment to quality across Vancouver Island and the Lower Mainland.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <div 
                key={service.id}
                id={service.id}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center scroll-mt-24`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative rounded-sm overflow-hidden shadow-xl aspect-video lg:aspect-square max-h-[500px]">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 space-y-6"
                >
                  <h2 className="text-3xl font-extrabold text-secondary">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 pt-2">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Link href={`/contact?service=${service.id}`}>
                      <Button size="lg" className="group">
                        Request a Quote
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <p className="text-primary font-bold uppercase tracking-widest text-sm">Where We Work</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Service Areas</h2>
            <p className="text-slate-300 text-lg">
              Capstone Drywall proudly serves clients across British Columbia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              {["Vancouver Island", "Lower Mainland"].map((area) => (
                <div key={area} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-sm px-8 py-5 text-lg font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-6 uppercase tracking-tight">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether it's a complex soffit assembly or a large commercial build-out, contact us to discuss your project anywhere on Vancouver Island or the Lower Mainland.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8 font-bold">
              Contact Capstone Drywall
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
