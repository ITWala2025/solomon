import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { FAQSection } from '../components/FAQSection';
import { Phone, MessageSquare, Mail, MapPin, Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onOpenEnrolment: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenEnrolment }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        badge="Get in Touch"
        title="Contact & Enrolment Enquiries"
        subtitle="Have questions about subjects, timetables, or fees? Caitriona Hayes and our team are here to help you find the right grinds."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />

      {/* Contact Channels Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-peach-100 text-peach-700 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Telephone Enquiries</h3>
                <p className="text-xs text-slate-500 mb-4">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                <span className="text-xl font-bold font-mono text-slate-900 block mb-6">01 6284171</span>
              </div>
              <a
                href="tel:016284171"
                className="w-full py-2.5 rounded-full text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition"
              >
                Call Office
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-200 text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">WhatsApp Fast-Track</h3>
                <p className="text-xs text-slate-500 mb-4">Direct message to Director Caitriona Hayes</p>
                <span className="text-xl font-bold font-mono text-slate-900 block mb-6">087 2745234</span>
              </div>
              <a
                href="https://wa.me/353872745234?text=Hi%20Caitriona,%20I'm%20interested%20in%20grinds%20at%20Solomon%20Grinds%20Lucan."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Email Correspondence</h3>
                <p className="text-xs text-slate-500 mb-4">For registration details & receipts</p>
                <span className="text-sm font-bold text-slate-900 block mb-6 break-all">caitrionahayes@yahoo.ie</span>
              </div>
              <a
                href="mailto:caitrionahayes@yahoo.ie"
                className="w-full py-2.5 rounded-full text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Enrolment Trigger Card */}
          <div className="bg-gradient-to-r from-night-950 via-night-900 to-night-850 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">Ready to Secure Your Place?</h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed">
                Use our 3-step online enrolment wizard to select subjects, preview your weekly fee with bundle discounts, and fast-track registration.
              </p>
            </div>
            <button
              onClick={onOpenEnrolment}
              className="px-8 py-3.5 text-sm font-bold text-night-950 bg-peach-400 hover:bg-peach-300 rounded-full transition-all shadow-md flex-shrink-0"
            >
              Open Enrolment Form
            </button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
};
