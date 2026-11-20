import React from 'react';
import { COMMUTE_DATA } from '../data/mockData';
import { MapPin, Bus, Car, Navigation, ShieldCheck, Clock } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-11 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-9">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach-100 text-peach-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-peach-600" />
            Safe Suburban Location
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Safe, Convenient Lucan Base. Avoid the City Centre Traffic.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Conveniently based at <strong className="text-slate-900">Scoil Áine Naofa</strong> on Newcastle Road, Lucan (opposite SuperValu), just off the N4 corridor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Venue details & Commute table */}
          <div className="space-y-5 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-peach-600" />
                Scoil Áine Naofa, Newcastle Road, Lucan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Situated opposite SuperValu Lucan on Newcastle Road (K78 PF65). Offers a peaceful, safe, and well-lit school environment with dedicated classrooms, science laboratories, and free on-site drop-off parking.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-peach-600 flex-shrink-0" />
                  <span>Ample free car parking directly inside school gates for easy drop-off</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Bus className="w-4 h-4 text-olive-600 flex-shrink-0" />
                  <span>Served by Dublin Bus routes: <strong>C1, C2, C4, L51, L52, L53</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Navigation className="w-4 h-4 text-peach-600 flex-shrink-0" />
                  <span>Just 2 minutes off the N4 (Exit 4A Lucan / Newcastle)</span>
                </div>
              </div>
            </div>

            {/* Commute times from surrounding areas */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3.5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-olive-600" />
                Quick Commute Times from Surrounding Towns
              </h4>
              <div className="space-y-2.5">
                {COMMUTE_DATA.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <div>
                      <strong className="text-slate-800 block">{item.location}</strong>
                      <span className="text-slate-400 text-[11px]">{item.route}</span>
                    </div>
                    <span className="font-bold font-mono text-olive-800 bg-olive-100 px-2.5 py-1 rounded-md border border-olive-200">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-3.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-semibold text-slate-700">
                <Navigation className="w-4 h-4 text-olive-600" />
                <span>Scoil Áine Naofa (Opposite SuperValu), Lucan</span>
              </div>
              <a
                href="https://maps.google.com/?q=Scoil+Áine+Naofa+Newcastle+Road+Lucan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-peach-700 hover:text-peach-800 font-bold underline"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Google Map iframe */}
            <div className="w-full h-full min-h-[320px] bg-slate-200">
              <iframe
                title="Scoil Áine Naofa Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.4789524785465!2d-6.451877923269415!3d53.35123967406322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486774618e3d64cb%3A0xe542617ca468a3eb!2sScoil%20%C3%81ine%20Naofa!5e0!3m2!1sen!2sie!4v1710000000000!5m2!1sen!2sie"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[340px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
