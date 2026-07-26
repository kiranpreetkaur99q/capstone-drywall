import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Head } from '@/components/seo/Head';

import imgInstall from '@assets/generated_images/service-installation.jpg';
import imgRepair from '@assets/generated_images/service-repair.jpg';
import imgFinishing from '@assets/generated_images/service-finishing.jpg';
import imgTaping from '@assets/generated_images/service-taping.jpg';
import imgPatching from '@assets/generated_images/service-patching.jpg';
import imgCeiling from '@assets/generated_images/service-ceiling.jpg';
import imgTexturing from '@assets/generated_images/service-texturing.jpg';
import imgRes from '@assets/generated_images/service-residential.jpg';
import imgCom from '@assets/generated_images/service-commercial.jpg';
import imgReno from '@assets/generated_images/service-renovation.jpg';

const services = [
  {
    id: "installation",
    title: "Drywall Installation",
    desc: "Expert hanging of drywall for new builds, additions, and complete remodels. We ensure perfectly aligned boards, properly spaced fasteners, and structurally sound installations ready for finishing.",
    img: imgInstall
  },
  {
    id: "repair",
    title: "Drywall Repair",
    desc: "Comprehensive repair services for water damage, settling cracks, popped nails, and general wear and tear. We identify the root cause and restore the structural integrity of your walls.",
    img: imgRepair
  },
  {
    id: "finishing",
    title: "Drywall Finishing",
    desc: "Professional finishing up to Level 5. We provide impeccably smooth surfaces that are critical for high-gloss paints, critical lighting areas, and high-end residential or commercial spaces.",
    img: imgFinishing
  },
  {
    id: "taping",
    title: "Taping and Mudding",
    desc: "Precision joint treatment to create seamless transitions between drywall boards. Our meticulous taping process prevents future cracking and ensures a perfectly flat surface.",
    img: imgTaping
  },
  {
    id: "patching",
    title: "Drywall Patching",
    desc: "Quick, seamless patching for holes caused by plumbing access, electrical work, or accidents. We match existing textures and finishes so the patch becomes invisible after painting.",
    img: imgPatching
  },
  {
    id: "ceiling",
    title: "Ceiling Drywall",
    desc: "Specialized installation and finishing for ceilings. We handle everything from standard flat ceilings to complex custom bulkheads, drop ceilings, and architectural details.",
    img: imgCeiling
  },
  {
    id: "texturing",
    title: "Drywall Texturing",
    desc: "Application of various textures including knockdown, orange peel, and custom hand-troweled finishes. We can also match existing textures during repair work or completely remove old textures.",
    img: imgTexturing
  },
  {
    id: "residential",
    title: "Residential Drywall",
    desc: "Tailored services for homeowners. We treat your home with respect, utilizing advanced dust-control measures and maintaining a clean work environment throughout the project.",
    img: imgRes
  },
  {
    id: "commercial",
    title: "Commercial Drywall",
    desc: "Large-scale installations for offices, retail spaces, and industrial buildings. We work efficiently to meet tight construction schedules while coordinating seamlessly with other trades.",
    img: imgCom
  },
  {
    id: "renovation",
    title: "Renovation Drywall",
    desc: "Specialized services for remodeling projects. We excel at tying new drywall into existing plaster or older drywall systems, ensuring a cohesive look across the renovated space.",
    img: imgReno
  }
];

export default function Services() {
  return (
    <>
      <Head 
        title="Our Services | Capstone Drywall" 
        description="Comprehensive drywall services including installation, repair, finishing, taping, and texturing for residential and commercial projects." 
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
              Professional drywall solutions executed with precision, efficiency, and an unwavering commitment to quality.
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
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Free Estimates
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Professional Execution
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Clean Job Site
                    </li>
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

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Drywall Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            If you have a unique project or require specific drywall applications, contact us. We have the expertise to handle complex architectural requirements.
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
