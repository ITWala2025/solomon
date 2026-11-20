import React from 'react';
import { Check, X, ShieldAlert, Sparkles, HeartHandshake } from 'lucide-react';

export const DifferenceSection: React.FC = () => {
  return (
    <section id="difference" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            The Solomon Grinds Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight mb-4">
            Why West Dublin Parents Choose Solomon Over City Centre Grind Schools
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Grinds should relieve exam stress, not create more through exhausting commutes and impersonal 100-student lecture theatres. Here is how we compare:
          </p>
        </div>

        {/* Head-to-Head Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Competitor: The City Centre Grind Factory */}
          <div className="bg-white rounded-3xl p-8 border border-red-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Typical Alternative</span>
                  <h3 className="text-xl font-bold text-slate-900">City Centre Grind Institutes</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold">
                  <X className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-800 text-sm font-semibold block">50 to 100 Students per Lecture Hall</strong>
                    <span className="text-xs text-slate-500">Impersonal university-style lectures where quiet students get left behind.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-800 text-sm font-semibold block">No 1-on-1 Questions or Feedback</strong>
                    <span className="text-xs text-slate-500">Tutors rush to the next class with zero time to review individual homework.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-800 text-sm font-semibold block">Exhausting 90+ Minute Commute</strong>
                    <span className="text-xs text-slate-500">Saturday mornings lost sitting in Dublin city-centre traffic and parking hassles.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-800 text-sm font-semibold block">Heavy Upfront Financial Lock-in</strong>
                    <span className="text-xs text-slate-500">Forced to pay €1,200 – €2,000 upfront for full terms even if your child dislikes the class.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-400 italic">
              High student-to-teacher ratio limits personalized learning outcomes.
            </div>
          </div>

          {/* Winner: Solomon Grinds */}
          <div className="bg-gradient-to-b from-brand-900 to-brand-950 text-white rounded-3xl p-8 border-2 border-emerald-500 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-brand-950 text-xs font-extrabold uppercase px-4 py-1.5 rounded-bl-2xl">
              The Solomon Standard
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Our Promise</span>
                  <h3 className="text-2xl font-extrabold text-white">The Solomon Grinds Difference</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-400" />
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                  </div>
                  <div>
                    <strong className="text-white text-sm font-bold block">Strictly Capped Small Cohorts (6–10 Students)</strong>
                    <span className="text-xs text-slate-300">Intimate class environment where the teacher knows your student and diagnoses weaknesses.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                  </div>
                  <div>
                    <strong className="text-white text-sm font-bold block">100% Active or Past SEC Examiners</strong>
                    <span className="text-xs text-slate-300">Teaching marking scheme nuances, exact keyword mark allocations, and exam time-management.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                  </div>
                  <div>
                    <strong className="text-white text-sm font-bold block">Safe, Convenient Suburban Location</strong>
                    <span className="text-xs text-slate-300">Scoil Áine Naofa, Newcastle Road, Lucan (opposite SuperValu). Free on-site parking and bus links.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                  </div>
                  <div>
                    <strong className="text-white text-sm font-bold block">Flexible €20 Pay-As-You-Go with Multi-Subject Savings</strong>
                    <span className="text-xs text-slate-300">Pay weekly with total peace of mind. 2 subjects = €38/wk; 3 subjects = €55/wk (save €150/year).</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              <span>Proven track record of top CAO points and H1/H2 results for over 25 years.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
