import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo/Head';

import project1 from '@assets/generated_images/project-1.jpg';
import project2 from '@assets/generated_images/project-2.jpg';
import project3 from '@assets/generated_images/project-3.jpg';
import project4 from '@assets/generated_images/project-4.jpg';
import project5 from '@assets/generated_images/project-5.jpg';
import project6 from '@assets/generated_images/project-6.jpg';
import project7 from '@assets/generated_images/project-7.jpg';
import project8 from '@assets/generated_images/project-8.jpg';

const projects = [
  { id: 1, category: 'Residential', img: project1, title: 'Custom Home Finish' },
  { id: 2, category: 'Commercial', img: project2, title: 'Office Build-out' },
  { id: 3, category: 'Detail', img: project3, title: 'Precision Taping' },
  { id: 4, category: 'Residential', img: project4, title: 'Living Room Remodel' },
  { id: 5, category: 'Detail', img: project5, title: 'Level 5 Finish' },
  { id: 6, category: 'Commercial', img: project6, title: 'Retail Space Install' },
  { id: 7, category: 'Detail', img: project7, title: 'Architectural Curve' },
  { id: 8, category: 'Residential', img: project8, title: 'Moisture-Resistant Install' },
];

const categories = ['All', 'Residential', 'Commercial', 'Detail'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <>
      <Head 
        title="Project Gallery | Capstone Drywall" 
        description="View our gallery of recent drywall installation, repair, and finishing projects for residential and commercial clients." 
      />

      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl text-slate-300">
              A selection of our recent residential and commercial drywall projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white min-h-[600px]">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? 'default' : 'outline'}
                onClick={() => setFilter(cat)}
                className="rounded-full px-6"
              >
                {cat}
              </Button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider mb-1">{project.category}</span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 text-center border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-6">Have a Drywall Project in Mind?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring professional craftsmanship to your next build or renovation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-lg shadow-lg shadow-primary/20">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
