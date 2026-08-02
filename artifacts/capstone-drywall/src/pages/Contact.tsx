import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Head } from '@/components/seo/Head';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

interface FormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  type: string;
  service: string;
  description: string;
}

export default function Contact() {
  const searchParams = new URLSearchParams(window.location.search);
  const serviceParam = searchParams.get('service') || '';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    location: '',
    type: 'residential',
    service: serviceParam || 'installation',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    if (!WEB3FORMS_KEY) {
      setErrorMsg('The contact form is not yet configured. Please call us directly at (672) 513-7213.');
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New Quote Request from ${form.name} — ${form.service}`,
        from_name: 'Capstone Drywall Website',
        name: form.name,
        email: form.email,
        phone: form.phone,
        'Project Location': form.location,
        'Project Type': form.type,
        'Service Needed': form.service,
        message: form.description,
        botcheck: '',
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setErrorMsg('Unable to send your request right now. Please call us at (672) 513-7213.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head
        title="Contact Us | Capstone Drywall"
        description="Request a free quote for your drywall project. Contact Capstone Drywall by phone or email today."
      />

      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300">
              Ready to start your project? Request a free, no-obligation quote today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-6">Get in Touch</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form to request a quote, or reach us directly using the information below. We aim to respond to all inquiries within 24 business hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Phone</h3>
                    <a href="tel:6725137213" className="text-slate-600 hover:text-primary transition-colors text-lg">(672) 513-7213</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Email</h3>
                    <a href="mailto:info@capstonedrywall.ca" className="text-slate-600 hover:text-primary transition-colors text-lg">info@capstonedrywall.ca</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Address</h3>
                    <p className="text-slate-600">12699 68A Ave, Surrey BC V3W 1H3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-8 md:p-10 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-secondary mb-8">Request a Free Quote</h3>

                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center flex flex-col items-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                    <h4 className="text-2xl font-bold mb-2">Quote Request Sent!</h4>
                    <p className="text-green-700 max-w-md">
                      Thank you for contacting Capstone Drywall. We have received your request and will be in touch shortly to discuss your project.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 border-green-300 text-green-700 hover:bg-green-100"
                      onClick={() => { setIsSuccess(false); setForm({ name: '', phone: '', email: '', location: '', type: 'residential', service: 'installation', description: '' }); }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-secondary">Full Name <span className="text-red-500">*</span></label>
                        <Input id="name" required placeholder="John Doe" className="bg-white" value={form.name} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-secondary">Phone Number <span className="text-red-500">*</span></label>
                        <Input id="phone" type="tel" required placeholder="(555) 000-0000" className="bg-white" value={form.phone} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-secondary">Email Address <span className="text-red-500">*</span></label>
                        <Input id="email" type="email" required placeholder="john@example.com" className="bg-white" value={form.email} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-semibold text-secondary">Project City/Address <span className="text-red-500">*</span></label>
                        <Input id="location" required placeholder="City or Zip Code" className="bg-white" value={form.location} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="type" className="text-sm font-semibold text-secondary">Project Type</label>
                        <select
                          id="type"
                          value={form.type}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-semibold text-secondary">Service Needed</label>
                        <select
                          id="service"
                          value={form.service}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="installation">Drywall Installation</option>
                          <option value="taping">Commercial Drywall Taping & Plastering</option>
                          <option value="framing">Metal Steel Stud Framing</option>
                          <option value="tbar">T-Bar & Acoustic Ceilings</option>
                          <option value="metal-ceiling">Metal Ceiling Panels</option>
                          <option value="specialty">Specialty Ceilings & Soffit</option>
                          <option value="insulation">Insulation</option>
                          <option value="other">Other / Multiple</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="description" className="text-sm font-semibold text-secondary">Project Description <span className="text-red-500">*</span></label>
                      <Textarea
                        id="description"
                        required
                        placeholder="Please provide some details about your project (approximate square footage, timeline, specific issues, etc.)"
                        className="min-h-[150px] bg-white resize-y"
                        value={form.description}
                        onChange={handleChange}
                      />
                    </div>

                    {errorMsg && (
                      <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p className="text-sm">{errorMsg}</p>
                      </div>
                    )}

                    <div className="pt-2">
                      <Button type="submit" size="lg" className="w-full md:w-auto h-14 px-10 text-lg shadow-lg" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}
                      </Button>
                      <p className="text-xs text-slate-500 mt-4">
                        Your information is kept strictly confidential and will only be used to contact you regarding your project inquiry.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
