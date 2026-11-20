import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, Award, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-11 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-9">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-olive-600" />
            Verified Results
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Hear From Local Lucan, Celbridge & Leixlip Families
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Real feedback from students and parents whose confidence and CAO points transformed through the Solomon Grinds difference.
          </p>
        </div>

        {/* 4 Vertical Testimonials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 rounded-3xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-card hover:border-peach-400/60 transition-all group"
            >
              <div>
                {/* Star rating & quote icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-peach-200 group-hover:text-peach-300 transition-colors" />
                </div>

                {/* Vertical Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                {/* Achievement Highlight */}
                <div className="p-2.5 bg-olive-50 border border-olive-200/80 rounded-xl mb-3 text-[11px] font-semibold text-olive-900 flex items-start gap-1.5 leading-snug">
                  <Award className="w-3.5 h-3.5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>{testimonial.achievement}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-slate-900 font-bold block leading-tight">{testimonial.name}</strong>
                    <span className="text-[11px] text-slate-500">{testimonial.role} • {testimonial.location}</span>
                  </div>
                  <span className="text-[10px] font-bold text-peach-800 bg-peach-50 px-2 py-0.5 rounded-full border border-peach-200">
                    {testimonial.cycle === 'Leaving Certificate' ? 'LC' : 'JC'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
