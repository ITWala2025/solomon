import React from 'react';
import { TEACHERS } from '../data/mockData';
import { Award, GraduationCap, CheckCircle, Clock } from 'lucide-react';

export const FacultyShowcase: React.FC = () => {
  return (
    <section id="faculty" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach-100 text-peach-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-peach-600" />
            Dedicated Educators
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Teaching Staff: Hand Picked, Experienced & All Past or Present Examiners
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The heart of Solomon Grinds is our faculty. Unlike college students or newly graduated tutors, every member of our panel has decades of classroom experience and understands the State Examinations Commission marking schemes from the inside out.
          </p>
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-card hover:border-peach-400/60 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Avatar and Examiner Pill */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={teacher.avatarUrl}
                    alt={teacher.fullName}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-peach-400/30 group-hover:border-peach-400 transition-colors shadow-sm"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-peach-600 transition-colors">
                      {teacher.fullName}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{teacher.role}</p>
                    <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      <Award className="w-3 h-3 text-amber-600" />
                      <span>{teacher.yearsExperience}+ Years • SEC Examiner</span>
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {teacher.bio}
                </p>
              </div>

              {/* Subjects taught pills */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Specialist Subjects
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {teacher.subjects.map((subj, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-peach-50 text-peach-800 border border-peach-200/60"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
