import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TimetableSlot } from '../types';
import { SUBJECTS, TEACHERS, TESTIMONIALS } from '../data/mockData';
import {
  ArrowRight, Award, Users, MapPin, Wallet, Star, Quote,
  Calendar, Phone, CheckCircle2, Sparkles
} from 'lucide-react';

interface HomePageProps {
  onOpenEnrolment: () => void;
  onSelectSlot: (slot: TimetableSlot) => void;
  onSelectBundle: (count: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnrolment }) => {
  const popularSubjects = SUBJECTS.filter(s => s.isPopular).slice(0, 8);
  const featuredTeachers = TEACHERS.slice(0, 3);
  // 4 Testimonials for Home Page vertical card design
  const homeTestimonials = TESTIMONIALS.slice(0, 4);

  return (
    <>
      {/* Full Hero with integrated stats (cards removed) */}
      <Hero onOpenEnrolment={onOpenEnrolment} />

      {/* Popular Subjects Teaser */}
      <section className="py-9 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach-100 text-peach-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5 text-peach-600" />
                Leaving Cert & Junior Cycle
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Popular Subjects & Classes
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Wednesday Evenings & Saturday Mornings at Scoil Áine Naofa, Lucan.
              </p>
            </div>
            <Link
              to="/timetable"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-night-950 bg-peach-400 hover:bg-peach-300 rounded-full transition-all shadow-sm flex-shrink-0"
            >
              <span>View Full Timetable</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {popularSubjects.map((subject) => (
              <div
                key={subject.id}
                className="bg-white rounded-2xl border border-slate-200 p-3.5 hover:border-peach-400/60 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-peach-50 text-peach-800 border border-peach-200/60">
                    {subject.cycle === 'Leaving Certificate' ? 'LC' : subject.cycle === 'Junior Cycle' ? 'JC' : '5th'}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">{subject.levels.join('/')}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-peach-700 transition-colors leading-snug">
                  {subject.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Teaser */}
      <section className="py-9 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-olive-600" />
                Examiner-Led Tuition
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Hand-Picked Examiner Teaching Staff
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Every teacher is a past or present State Examinations Commission (SEC) examiner.
              </p>
            </div>
            <Link
              to="/faculty"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-all flex-shrink-0"
            >
              <span>Meet All Faculty</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredTeachers.map((teacher) => (
              <div key={teacher.id} className="flex items-center gap-3.5 p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-olive-300 transition-all">
                <img
                  src={teacher.avatarUrl}
                  alt={teacher.fullName}
                  className="w-12 h-12 rounded-xl object-cover border-2 border-olive-200 flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{teacher.fullName}</h4>
                  <p className="text-xs text-slate-500">{teacher.role}</p>
                  <div className="inline-flex items-center gap-1 mt-0.5 text-[10px] font-semibold text-olive-800 bg-olive-50 px-2 py-0.5 rounded-md border border-olive-200">
                    <Award className="w-3 h-3 text-olive-600" />
                    <span>SEC Examiner</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Vertical Testimonials Cards */}
      <section className="py-9 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-olive-600" />
                Verified Results
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                What Local Families Say
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Real feedback from Leaving Cert & Junior Cycle parents and students across West Dublin.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-peach-700 hover:text-peach-800 transition-colors flex-shrink-0"
            >
              <span>Read About Our Approach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Vertical Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {homeTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-card hover:border-peach-400/60 transition-all group"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
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

                <div className="pt-3 border-t border-slate-100">
                  {/* Achievement Highlight Box */}
                  <div className="p-2.5 bg-olive-50 border border-olive-200/80 rounded-xl mb-3 text-[11px] font-semibold text-olive-900 flex items-start gap-1.5 leading-snug">
                    <Award className="w-3.5 h-3.5 text-olive-600 flex-shrink-0 mt-0.5" />
                    <span>{testimonial.achievement}</span>
                  </div>

                  {/* Author Meta */}
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <strong className="text-slate-900 font-bold block leading-tight">{testimonial.name}</strong>
                      <span className="text-[11px] text-slate-500">{testimonial.role} • {testimonial.location}</span>
                    </div>
                    <span className="text-[10px] font-bold text-peach-800 bg-peach-50 px-2 py-0.5 rounded-full border border-peach-200/60">
                      {testimonial.cycle === 'Leaving Certificate' ? 'LC' : 'JC'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Mini-Card */}
      <section className="py-9 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#AAA77B] text-night-950 rounded-3xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 border border-olive-600/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/70 border border-olive-600/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-night-950" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-night-950 mb-0.5">Scoil Áine Naofa, Lucan</h3>
                <p className="text-xs sm:text-sm text-night-950/85 leading-relaxed font-medium">
                  Newcastle Road, Lucan, K78 PF65 — directly opposite SuperValu, just off the N4.<br />
                  <span className="font-bold text-night-950">Free on-site parking. Dublin Bus C1, C2, C4, L51–L53.</span>
                </p>
                <p className="text-[11px] text-night-950/75 mt-1.5 font-medium">
                  Minutes from Celbridge (10 min), Leixlip (8 min), Palmerstown (7 min), Maynooth (15 min).
                </p>
              </div>
            </div>
            <Link
              to="/location"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-night-950 bg-peach-400 hover:bg-peach-300 rounded-full transition-all shadow-md flex-shrink-0 whitespace-nowrap border border-peach-500/50"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-9 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach-100 text-peach-900 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-peach-600" />
            Free Trial Class Available
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Ready to Experience the Solomon Grinds Difference?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Enrol online in under 2 minutes, or message Caitriona Hayes directly to discuss the right subjects and timetable for your child.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenEnrolment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-extrabold text-night-950 bg-peach-400 hover:bg-peach-300 rounded-full shadow-lg shadow-peach-400/20 transition-all border border-peach-500/50"
            >
              <Sparkles className="w-4 h-4" />
              <span>Enrol / Reserve a Class</span>
            </button>
            <a
              href="https://wa.me/353872745234?text=Hi%20Caitriona,%20I'm%20interested%20in%20grinds%20at%20Solomon%20Grinds%20Lucan."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-md transition-all"
            >
              <svg
                className="w-4 h-4 fill-current text-white flex-shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Caitriona</span>
            </a>
            <a
              href="tel:016284171"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-full shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>01 6284171</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
