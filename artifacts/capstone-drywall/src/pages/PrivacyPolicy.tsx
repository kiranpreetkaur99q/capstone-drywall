import React from 'react';
import { Head } from '@/components/seo/Head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head 
        title="Privacy Policy | Capstone Drywall" 
        description="Privacy policy for Capstone Drywall." 
      />

      <section className="bg-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 text-amber-900 text-sm font-medium">
            <strong>NOTICE:</strong> This is a placeholder privacy policy. It must be reviewed by legal counsel and customized for Capstone Drywall's specific data collection practices before this site is launched.
          </div>

          <div className="prose prose-slate max-w-none">
            <h2>1. Introduction</h2>
            <p>
              [Capstone Drywall] ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
              This policy describes the types of information we may collect from you or that you may provide when you visit the website [website URL] and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our Website, including information:
            </p>
            <ul>
              <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").</li>
              <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul>
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us (e.g., project quotes).</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>
              We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted subcontractors or suppliers strictly for the purpose of fulfilling your requested project.
            </p>

            <h2>5. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
            </p>
            <p>
              <strong>Capstone Drywall</strong><br />
              Email: info@capstonedrywall.com<br />
              Phone: (555) 555-0198
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
