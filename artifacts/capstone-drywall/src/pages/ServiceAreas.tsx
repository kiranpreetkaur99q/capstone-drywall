import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo/Head';

export default function ServiceAreas() {
  const areas = [
    "[Primary City] & Surrounding Areas",
    "[Neighboring City 1]",
    "[Neighboring City 2]",
    "[Neighboring City 3]",
    "[Neighboring City 4]",
    "[Neighboring City 5]"
  ];

  return (
    <>
      <Head 
        title="Service Areas | Capstone Drywall" 
        description="Capstone Drywall provides professional drywall contracting services across our service region." 
      />

      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Areas</h1>
            <p className="text-xl text-slate-300">
              Providing professional drywall contracting to our local communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary mb-4">Areas We Serve</h2>
              <p className="text-lg text-slate-600">
                Capstone Drywall is proud to serve residential and commercial clients across the region. 
                Contact us to confirm whether we provide services in your specific area.
              </p>
              <div className="mt-4 inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-md font-medium text-sm">
                Note: These areas are placeholders. Update with actual service areas before launch.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {areas.map((area, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <span className="font-semibold text-secondary">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-primary/5 p-8 rounded-xl border border-primary/10 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Don't See Your Location?</h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Depending on the size and scope of your project, we frequently travel outside our primary service radius. Reach out to discuss your project details.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 shadow-md">
                  Contact Us to Confirm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
