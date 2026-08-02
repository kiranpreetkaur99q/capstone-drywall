import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo/Head';

// Real Capstone Drywall job site photos
import photo1 from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_1785560771418.jpeg';
import photo2 from '@assets/WhatsApp_Image_2026-07-30_at_21.50.55_1785560755445.jpeg';
import photo3 from '@assets/WhatsApp_Image_2026-07-30_at_21.50.54_(1)_1785560764251.jpeg';
import photo4 from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_(2)_1785560779700.jpeg';
import photo5 from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_(1)_1785560789215.jpeg';
import photo6 from '@assets/WhatsApp_Image_2026-07-30_at_21.44.44_1785560802133.jpeg';

const projects = [
  { id: 1, category: 'Commercial', img: photo1, title: 'Commercial Steel Stud Framing', desc: 'Large-scale metal stud framing for a commercial build-out' },
  { id: 2, category: 'Commercial', img: photo2, title: 'Interior Steel Stud Corridor', desc: 'Precision steel stud partition layout for a commercial interior' },
  { id: 3, category: 'Commercial', img: photo3, title: 'Drywall & Ceiling Grid Install', desc: 'Drywall installation with T-bar ceiling grid in a commercial corridor' },
  { id: 4, category: 'Residential', img: photo4, title: 'Custom Coffered Ceiling', desc: 'Specialty coffered ceiling with box beam detail — residential project' },
  { id: 5, category: 'Residential', img: photo5, title: 'Drywall Finishing & Taping', desc: 'High-ceiling drywall finishing and taping work — residential renovation' },
  { id: 6, category: 'Residential', img: photo6, title: 'Residential Drywall Project', desc: 'Drywall installation and finishing on a residential project' },
];

const categories = ['All', 'Residential', 'Commercial'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <>
      <Head 
        title="Project Gallery | Capstone Drywall" 
        description="View our gallery of real drywall and ceiling projects — steel stud framing, T-bar ceilings, coffered ceilings, and commercial build-outs across Vancouver Island and the Lower Mainland." 
      />

      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Work</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">Project Gallery</h1>
            <p className="text-xl text-slate-300">
              Real photos from real Capstone Drywall job sites across BC.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white min-h-[600px]">
        <div className="container mx-auto px-6">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 font-semibold text-sm uppercase tracking-wider rounded-sm transition-colors ${
                  filter === cat
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square overflow-hidden rounded-sm bg-slate-100"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                    <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500">No projects found in this category.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-tight">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for a free quote — Vancouver Island and the Lower Mainland.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8 font-bold">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
