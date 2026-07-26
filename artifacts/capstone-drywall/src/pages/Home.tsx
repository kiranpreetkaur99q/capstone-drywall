import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, Star, Shield, HardHat, Wrench, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo/Head';
import heroBg from '@assets/generated_images/hero.jpg';
import project1 from '@assets/generated_images/project-1.jpg';
import project2 from '@assets/generated_images/project-2.jpg';
import project3 from '@assets/generated_images/project-3.jpg';
import project4 from '@assets/generated_images/project-4.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <>
      <Head 
        title="Capstone Drywall | Professional Drywall Contractor" 
        description="Professional drywall installation, repair, finishing, and renovation services for residential and commercial projects. Get a free quote today." 
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Drywall construction site" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-sm text-primary font-semibold tracking-wide uppercase text-sm mb-2 backdrop-blur-sm">
                Trusted Local Contractor
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Professional Drywall Services You Can Count On
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                Capstone Drywall provides professional drywall installation, repair, finishing, and renovation services for residential and commercial projects.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 shadow-xl shadow-primary/20">
                    Request a Free Quote
                  </Button>
                </Link>
                <a href="tel:555-0198">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-white/20 text-white hover:bg-white hover:text-secondary">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Today
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-secondary">
                Precision Craftsmanship, <br/><span className="text-primary">Solid Foundation.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
                We are a dedicated team of drywall professionals committed to delivering flawless results. Whether it's a small home repair or a large-scale commercial build-out, we bring the same level of meticulous attention to every job.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
                No shortcuts. No excuses. Just clean, straight lines and smooth surfaces ready for paint. We respect your property, your timeline, and your budget.
              </motion.p>
              <motion.div variants={fadeInUp} className="pt-4">
                <Link href="/about" className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
                  Learn more about our company <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <img src={project1} alt="Perfectly finished drywall" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-primary p-3 rounded-full">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Fully Licensed & Insured</p>
                    <p className="text-sm text-slate-300">For your peace of mind</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Core Services</h2>
            <p className="text-lg text-slate-600">Comprehensive drywall solutions executed with professional precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: HardHat, title: "Installation", desc: "Expert hanging and installation for new builds and renovations." },
              { icon: Wrench, title: "Repair & Patching", desc: "Seamless repairs for water damage, cracks, and holes." },
              { icon: Ruler, title: "Taping & Mudding", desc: "Precision joint treatment for perfectly flat walls." },
              { icon: Star, title: "Finishing", desc: "Smooth finishes up to Level 5 and custom texturing." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <Link href="/services" className="text-primary font-semibold flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">The Capstone Standard</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                We've built our reputation on reliability and results. When you hire Capstone Drywall, you're partnering with professionals who care about the final product as much as you do.
              </p>
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg shadow-primary/20">
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "Quality Workmanship", 
                "Reliable Service", 
                "Attention to Detail", 
                "Professional Approach", 
                "Residential & Commercial", 
                "Customer Satisfaction"
              ].map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit}</h4>
                    <p className="text-slate-400 text-sm">Consistent excellence delivered on every project, regardless of size or scope.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Recent Projects</h2>
              <p className="text-lg text-slate-600">Take a look at the quality of our work across various residential and commercial settings.</p>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="hidden md:flex">View Full Gallery</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-0">
            {[project1, project2, project3, project4].map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative h-64 rounded-sm overflow-hidden group cursor-pointer"
              >
                <img src={img} alt={`Project sample ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold flex items-center">View Project <ArrowRight className="ml-2 h-4 w-4" /></span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
            <Link href="/projects">
              <Button variant="outline" className="w-full">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Client Testimonials</h2>
            <p className="text-lg text-slate-600">Hear what our clients have to say about working with Capstone Drywall.</p>
            <div className="mt-4 inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-md font-medium text-sm">
              Note: The reviews below are placeholders. Replace with genuine customer reviews before launch.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 relative"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                  "Sample testimonial — Replace with a genuine customer review before launch. The team at Capstone was professional, punctual, and left our home cleaner than they found it. Highly recommended."
                </p>
                <div>
                  <p className="font-bold text-secondary">John Doe</p>
                  <p className="text-sm text-slate-500">Homeowner, [City Name]</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Ready to Start Your Drywall Project?</h2>
          <p className="text-xl mb-10 text-white/90">
            Contact Capstone Drywall today to discuss your project and request a free quote. We're ready to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg h-14 px-8 text-secondary font-bold">
                Request a Free Quote
              </Button>
            </Link>
            <a href="tel:555-0198">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-transparent border-2 border-white text-white hover:bg-white/10">
                Call (555) 555-0198
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
