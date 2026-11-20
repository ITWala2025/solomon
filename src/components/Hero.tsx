import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';

interface HeroProps {
  onOpenEnrolment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrolment }) => {
  return (
    <section className="relative overflow-hidden bg-[#AAA77B] text-night-950 pt-24 pb-10 sm:pt-28 sm:pb-11 lg:pt-28 lg:pb-14 border-b border-olive-600/30">
      {/* Seamless Blended Background Image on the Right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-7/12 pointer-events-none select-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200"
          alt="Students and teacher in an encouraging classroom setting at Solomon Grinds"
          className="w-full h-full object-cover object-center mix-blend-multiply opacity-55 lg:opacity-75 transform scale-105"
        />
        {/* Horizontal gradient overlay that dissolves seamlessly into the Sage Olive background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#AAA77B] via-[#AAA77B]/70 to-transparent lg:via-[#AAA77B]/40" />
        {/* Subtle vertical gradients to eliminate hard top and bottom seams */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#AAA77B] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#AAA77B] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left">
          {/* Trust badge pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-night-950 text-stone-100 text-xs sm:text-sm font-bold mb-4 shadow-md border border-night-900">
            <Sparkles className="w-4 h-4 text-peach-400 flex-shrink-0" />
            <span>25 Years of Proven Exam Excellence in Lucan & West Dublin</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-4">
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-red-700 leading-tight">
              Solomon Grinds
            </span>
            <span className="block text-lg sm:text-2xl lg:text-3xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(20,14,16,0.3)] whitespace-nowrap mt-1.5">
              Small Groups. Individual Attention.
            </span>
          </h1>

          {/* Supporting Pitch */}
          <p className="text-sm sm:text-base lg:text-lg text-night-950/90 leading-relaxed mb-6 max-w-xl font-medium">
            Leaving Certificate & Junior Cycle grinds at <strong className="text-night-950 font-extrabold underline decoration-night-950/40 underline-offset-4">Scoil Áine Naofa, Lucan</strong>.
            All our dedicated teaching staff are hand-picked, experienced, and past or present State Examiners.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenEnrolment}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-extrabold text-night-950 bg-peach-400 hover:bg-peach-300 rounded-full shadow-lg shadow-night-950/15 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-peach-500/50"
            >
              <span>Enrol / Reserve a Class</span>
              <ArrowRight className="w-4 h-4 text-night-950" />
            </button>

            <Link
              to="/timetable"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-night-950 hover:bg-night-900 rounded-full shadow-md transition-all"
            >
              <Clock className="w-4 h-4 text-peach-300" />
              <span>Explore Timetable & Subjects</span>
            </Link>
          </div>
        </div>

        {/* Clean, Non-Container Stats Row (sitting seamlessly on the background) */}
        <div className="max-w-4xl pt-8 mt-10 border-t border-night-950/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-left">
            {[
              { value: '25+', label: 'Years Serving Lucan & West Dublin' },
              { value: '100%', label: 'SEC Examiner Teaching Panel' },
              { value: '€20', label: 'Per Class • Pay-As-You-Go' },
              { value: '6–10', label: 'Strict Class Size Cap' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-night-950 tracking-tight mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-night-950/90 font-bold leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
