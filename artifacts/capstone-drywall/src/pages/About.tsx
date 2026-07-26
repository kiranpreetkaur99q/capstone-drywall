import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, HardHat, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Head } from '@/components/seo/Head';
import aboutHero from '@assets/generated_images/about-hero.jpg';
import project5 from '@assets/generated_images/project-5.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function About() {
  return (
    <>
      <Head 
        title="About Us | Capstone Drywall" 
        description="Learn about Capstone Drywall, our mission, values, and commitment to delivering professional drywall services." 
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHero} 
            alt="Capstone Drywall team" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Capstone Drywall</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built on a foundation of precision, reliability, and unparalleled craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  [PLACEHOLDER] Capstone Drywall was founded with a clear objective: to raise the standard of drywall contracting in our region. We noticed a gap in the market for contractors who not only understood the technical aspects of drywall but also prioritized clear communication, punctuality, and job site cleanliness.
                </p>
                <p>
                  [PLACEHOLDER] Over the years, we have grown from a small local crew into a full-service commercial and residential drywall company. Our growth is a direct result of our commitment to doing the job right the first time.
                </p>
                <p>
                  [PLACEHOLDER] Today, Capstone Drywall partners with homeowners, general contractors, and business owners to deliver flawless walls and ceilings that serve as the perfect canvas for their spaces.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={project5} 
                alt="Drywall finishing work" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide every project we undertake and every wall we build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Quality", desc: "We never compromise on materials or methodology. Excellent work is our baseline." },
              { icon: Users, title: "Customer First", desc: "Clear communication, respect for your property, and guaranteed satisfaction." },
              { icon: HardHat, title: "Professionalism", desc: "Our crews arrive on time, maintain a clean site, and conduct themselves with respect." },
              { icon: Clock, title: "Reliability", desc: "We meet our deadlines. Your project schedule is as important to us as it is to you." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 text-center"
              >
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Work With The Professionals</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Experience the Capstone difference on your next drywall project. Reach out today for a consultation.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8 font-bold">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
