import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { LocationSection } from '../components/LocationSection';
import { MapPin, Bus, Car, Clock, ShieldCheck } from 'lucide-react';

export const LocationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        badge="Newcastle Road, Lucan"
        title="Location & Transport Guide"
        subtitle="Safe, suburban location at Scoil Áine Naofa (opposite SuperValu Lucan) just off the N4. Save 2+ hours compared to travelling into Dublin city centre."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Location & Bus Routes' },
        ]}
      />

      {/* Main Location & Maps Component */}
      <LocationSection />

      {/* Directions Breakdown */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
              <Car className="w-7 h-7 text-crimson-800 mb-3" />
              <h4 className="text-base font-bold text-slate-900 mb-2">Driving from North Kildare</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                From Celbridge, take the R405 directly onto the Newcastle Road (10 mins). From Leixlip, cross Salmon Leap bridge onto the N4 Lucan bypass (8 mins). Free drop-off parking inside school grounds.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
              <Bus className="w-7 h-7 text-emerald-600 mb-3" />
              <h4 className="text-base font-bold text-slate-900 mb-2">Dublin Bus C-Spine Access</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Directly served by high-frequency spine routes <strong>C1, C2, and C4</strong> operating between Adamstown, Lucan, and city centre, plus local orbital routes <strong>L51, L52, and L53</strong>.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-7 h-7 text-amber-600 mb-3" />
              <h4 className="text-base font-bold text-slate-900 mb-2">Safe, Secure Campus</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Classes are conducted in Scoil Áine Naofa's modern, heated, well-lit classrooms with dedicated administrator presence at all times. Peace of mind for parents and students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
