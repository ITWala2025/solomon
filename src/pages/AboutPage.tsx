import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { DifferenceSection } from '../components/DifferenceSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Users, Award, MapPin, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onOpenEnrolment: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnrolment }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        badge="Our Core Philosophy"
        title="About Solomon Grinds"
        subtitle="Why West Dublin and North Kildare families choose our small groups and examiner-led tuition over large city-centre grind institutes."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      {/* Head-to-head comparison */}
      <DifferenceSection />

      {/* Deep Dive Pillars */}
      <section className="py-11 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Built Specifically for Irish Secondary Students
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We focus on the specific areas where Leaving Certificate and Junior Cycle students lose marks, delivering exam-centric tuition to supplement day school learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-peach-100 text-peach-800 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Individual Attention Guarantee</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                In a typical school class of 30 or a city-centre grind hall of 100, students hesitate to raise their hands. At Solomon Grinds, classes are strictly capped at 6–10 students so every single problem is answered directly.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-500 flex-shrink-0" />
                  <span>Homework reviewed individually each week</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-500 flex-shrink-0" />
                  <span>Encouraging, low-pressure atmosphere</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">State Examiner Secrets</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Our tutors are active or former State Examinations Commission examiners. We teach you how to write for the examiner, how partial credit is awarded, and how to avoid the common traps that cost H1 and H2 grades.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-500 flex-shrink-0" />
                  <span>Exact keyword definitions and SRP marks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-500 flex-shrink-0" />
                  <span>Rigorous exam paper timing strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-olive-100 text-olive-800 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Suburban Peace of Mind</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Operating out of Scoil Áine Naofa on Newcastle Road, Lucan (opposite SuperValu), we eliminate the stressful 2-hour round trip into Dublin city centre on weekday nights and Saturday mornings.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-500 flex-shrink-0" />
                  <span>Free on-site parking for easy drop-off</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-500 flex-shrink-0" />
                  <span>Minutes from Celbridge, Leixlip, & N4</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-9 bg-[#AAA77B] text-night-950 border border-olive-600/30 rounded-3xl p-6 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">Experience the Difference with a Trial Session</h3>
              <p className="text-sm text-night-950/85 max-w-xl font-medium">
                Attend an initial trial class in your subject to experience our examiner-led approach first-hand.
              </p>
            </div>
            <button
              onClick={onOpenEnrolment}
              className="px-7 py-3.5 text-sm font-bold text-night-950 bg-peach-400 hover:bg-peach-300 rounded-full transition-all shadow-md flex-shrink-0 border border-peach-500/50"
            >
              Enrol / Reserve a Class
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
};

// Also export as DifferencePage for backwards-compatibility
export const DifferencePage = AboutPage;
