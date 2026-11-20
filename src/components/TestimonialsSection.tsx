import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, Award, Sparkles, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-11 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-9">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-olive-600" />
            Verified Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Hear From Local Lucan, Celbridge & Leixlip Families
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback from students and parents whose confidence and CAO points transformed through the Solomon Grinds difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 rounded-3xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-card transition-all"
            >
              <div>
                {/* Star rating & quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-peach-200" />
                </div>

                {/* Quote body */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              <div>
                {/* Achievement Highlight */}
                <div className="p-3 bg-olive-50 border border-olive-200/80 rounded-xl mb-4 text-xs font-semibold text-olive-900 flex items-start gap-2">
                  <Award className="w-4 h-4 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>{testimonial.achievement}</span>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-slate-900 font-bold block">{testimonial.name}</strong>
                    <span className="text-slate-500">{testimonial.role} • {testimonial.location}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-peach-800 bg-peach-50 px-2 py-0.5 rounded-full border border-peach-200">
                    {testimonial.cycle}
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
