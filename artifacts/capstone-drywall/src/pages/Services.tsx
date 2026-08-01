import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Head } from '@/components/seo/Head';

import imgInstall from '@assets/generated_images/service-installation.jpg';
import imgTaping from '@assets/generated_images/service-taping.jpg';
import imgFraming from '@assets/generated_images/service-commercial.jpg';
import imgCeiling from '@assets/generated_images/service-ceiling.jpg';
import imgInsulation from '@assets/generated_images/service-residential.jpg';

const services = [
  {
    id: "drywall-installation",
    title: "Drywall Installation",
    desc: "Expert hanging and installation of drywall for new builds, additions, and complete remodels. We ensure perfectly aligned boards, properly spaced fasteners, and structurally sound installations ready for finishing — whether it's a single room or an entire commercial build-out.",
    bullets: ["New construction & renovations", "Residential & commercial", "Level-ready for finishing"],
    img: imgInstall
  },
  {
    id: "taping",
    title: "Taping",
    desc: "Precision joint treatment to create seamless transitions between drywall boards. Our meticulous taping and mudding process prevents future cracking and ensures a perfectly flat surface that holds paint beautifully and stands the test of time.",
    bullets: ["Paper & mesh tape applications", "Multi-coat mud finishing", "Feather-edge blending"],
    img: imgTaping
  },
  {
    id: "steel-stud-framing",
    title: "Steel Stud Framing",
    desc: "Professional steel stud framing for interior partitions, walls, and bulkheads. Steel framing offers superior straightness, fire resistance, and longevity over wood — ideal for commercial spaces, basement developments, and any application where precision matters.",
    bullets: ["Interior partitions & feature walls", "Commercial & residential builds", "Fire-rated assemblies"],
    img: imgFraming
  },
  {
    id: "acoustic-ceilings",
    title: "Acoustic Ceilings",
    desc: "Installation of suspended acoustic tile ceilings and specialty sound-dampening assemblies. We handle grid layout, tile placement, and integration with lighting and HVAC — delivering clean, professional results for offices, schools, retail spaces, and more.",
    bullets: ["T-bar grid systems", "Acoustic tile installation", "Drop ceiling & bulkhead work"],
    img: imgCeiling
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
  return (
    <>
      <Head 
        title="Our Services | Capstone Drywall" 
        description="Professional drywall installation, taping, steel stud framing, acoustic ceilings, and insulation services for residential and commercial projects in Vancouver Island and the Lower Mainland." 
      />

      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">
              Professional drywall solutions executed with precision, efficiency, and an unwavering commitment to quality across Vancouver Island and the Lower Mainland.
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
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative rounded-lg overflow-hidden shadow-xl aspect-video lg:aspect-square max-h-[500px]">
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
                  <h2 className="text-3xl font-bold text-secondary">{service.title}</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold">Service Areas</h2>
            <p className="text-slate-300 text-lg">
              Capstone Drywall proudly serves clients across British Columbia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              {["Vancouver Island", "Lower Mainland"].map((area) => (
                <div key={area} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-lg px-8 py-5 text-lg font-semibold">
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
          <h2 className="text-3xl font-bold mb-6">Need a Custom Drywall Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            If you have a unique project or specific requirements, contact us. We have the expertise to handle complex architectural needs anywhere on Vancouver Island or the Lower Mainland.
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
