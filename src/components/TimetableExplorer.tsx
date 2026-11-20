import React, { useState, useMemo } from 'react';
import { TimetableSlot, AcademicCycle, AcademicLevel, DayOfWeek } from '../types';
import { TIMETABLE_SLOTS } from '../data/mockData';
import { Search, Calendar, Clock, MapPin, Award, CheckCircle2, AlertTriangle, Users, Filter, Sparkles } from 'lucide-react';

interface TimetableExplorerProps {
  onSelectSlot: (slot: TimetableSlot) => void;
}

export const TimetableExplorer: React.FC<TimetableExplorerProps> = ({ onSelectSlot }) => {
  const [selectedCycle, setSelectedCycle] = useState<AcademicCycle | 'All'>('All');
  const [selectedLevel, setSelectedLevel] = useState<AcademicLevel | 'All'>('All');
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSlots = useMemo(() => {
    return TIMETABLE_SLOTS.filter(slot => {
      if (selectedCycle !== 'All' && slot.cycle !== selectedCycle) return false;
      if (selectedLevel !== 'All' && slot.level !== selectedLevel) return false;
      if (selectedDay !== 'All' && slot.day !== selectedDay) return false;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesSubject = slot.subjectTitle.toLowerCase().includes(query);
        const matchesTeacher = slot.teacherName.toLowerCase().includes(query);
        if (!matchesSubject && !matchesTeacher) return false;
      }
      return true;
    });
  }, [selectedCycle, selectedLevel, selectedDay, searchQuery]);

  return (
    <section id="timetable" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-100 text-crimson-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-crimson-700" />
            Active Class Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Interactive Timetable & Subject Explorer
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Classes run on <strong className="text-slate-900">Wednesday Evenings</strong> and <strong className="text-slate-900">Saturday Mornings/Afternoons</strong> at Scoil Áine Naofa, Lucan.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Search Subject / Teacher
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Maths, Irish, Brennan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-crimson-700 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Cycle Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                School Year / Cycle
              </label>
              <select
                value={selectedCycle}
                onChange={(e) => setSelectedCycle(e.target.value as any)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-crimson-700 focus:border-transparent transition"
              >
                <option value="All">All Cycles (LC, 5th, JC)</option>
                <option value="Leaving Certificate">Leaving Certificate (6th Year)</option>
                <option value="5th Year">5th Year</option>
                <option value="Junior Cycle">Junior Cycle (1st - 3rd Year)</option>
              </select>
            </div>

            {/* Level Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Examination Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as any)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-crimson-700 focus:border-transparent transition"
              >
                <option value="All">All Levels (Higher & Ordinary)</option>
                <option value="Higher">Higher Level (Honours)</option>
                <option value="Ordinary">Ordinary Level (Pass)</option>
              </select>
            </div>

            {/* Day Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Day of Week
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value as any)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-crimson-700 focus:border-transparent transition"
              >
                <option value="All">Both Days (Wed & Sat)</option>
                <option value="Wednesday">Wednesday Evenings</option>
                <option value="Saturday">Saturday Mornings/Afternoons</option>
              </select>
            </div>
          </div>

          {/* Quick Filter Reset and Result count */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200/60 text-xs text-slate-500">
            <span>
              Showing <strong className="text-crimson-900 font-bold">{filteredSlots.length}</strong> matching class slots
            </span>
            {(selectedCycle !== 'All' || selectedLevel !== 'All' || selectedDay !== 'All' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCycle('All');
                  setSelectedLevel('All');
                  setSelectedDay('All');
                  setSearchQuery('');
                }}
                className="text-crimson-700 hover:text-crimson-800 font-semibold underline underline-offset-2"
              >
                Reset all filters
              </button>
            )}
          </div>
        </div>

        {/* Timetable Slots Cards Grid */}
        {filteredSlots.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <Users className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-800 mb-1">No timetable slots match your filters</h4>
            <p className="text-sm text-slate-500 mb-4">Try broadening your search or resetting the filters.</p>
            <button
              onClick={() => {
                setSelectedCycle('All');
                setSelectedLevel('All');
                setSelectedDay('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold text-white bg-crimson-800 hover:bg-crimson-900 rounded-full"
            >
              Show all classes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlots.map((slot) => {
              const remainingSeats = slot.capacity - slot.enrolledCount;
              const isNearlyFull = remainingSeats <= 3 && remainingSeats > 0;
              const isFull = remainingSeats <= 0;

              return (
                <div
                  key={slot.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-card hover:border-crimson-600/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          slot.level === 'Higher' 
                            ? 'bg-crimson-100 text-crimson-800 border border-crimson-200' 
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}>
                          {slot.level} Level
                        </span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {slot.cycle}
                        </span>
                      </div>

                      {/* Capacity status pill */}
                      {isFull ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-100 text-red-700">
                          Class Full
                        </span>
                      ) : isNearlyFull ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-amber-600" />
                          Only {remainingSeats} Left
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                          Spaces Open
                        </span>
                      )}
                    </div>

                    {/* Class Title */}
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-crimson-800 transition-colors mb-2">
                      {slot.subjectTitle}
                    </h3>

                    {/* Teacher & Examiner Badge */}
                    <div className="flex items-center gap-2 mb-4 text-xs text-slate-600">
                      <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>
                        <strong className="text-slate-800 font-semibold">{slot.teacherName}</strong>
                        {slot.isExaminer && <span className="text-crimson-700 font-medium"> (SEC Examiner)</span>}
                      </span>
                    </div>

                    {/* Schedule & Location Details */}
                    <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-crimson-700 flex-shrink-0" />
                        <span className="font-semibold text-slate-800">
                          {slot.day}s: {slot.startTime} – {slot.endTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span>{slot.room}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>Hybrid Online Option Available</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action Button */}
                  <div className="mt-6 pt-3 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Tuition Fee</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-extrabold text-crimson-900 font-mono">€{slot.feePerClass.toFixed(0)}</span>
                        <span className="text-xs text-slate-500 font-medium">/ class</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectSlot(slot)}
                      className="px-4 py-2 text-xs font-bold text-white bg-crimson-800 hover:bg-crimson-900 rounded-full transition-all shadow-sm active:scale-95"
                    >
                      Enrol in Slot
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
