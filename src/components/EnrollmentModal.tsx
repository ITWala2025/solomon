import React, { useState, useEffect } from 'react';
import { TimetableSlot, AcademicCycle } from '../types';
import { TIMETABLE_SLOTS } from '../data/mockData';
import { grindsService } from '../services/grindsService';
import { X, Check, ArrowRight, ArrowLeft, MessageSquare, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSlot?: TimetableSlot | null;
  initialBundleCount?: number;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  preselectedSlot,
  initialBundleCount
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [currentSchool, setCurrentSchool] = useState('');
  const [cycle, setCycle] = useState<AcademicCycle>('Leaving Certificate');
  const [selectedSlotIds, setSelectedSlotIds] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBookingId, setSubmittedBookingId] = useState<string | null>(null);

  // Pre-selection effect
  useEffect(() => {
    if (preselectedSlot) {
      setSelectedSlotIds([preselectedSlot.id]);
      setCycle(preselectedSlot.cycle);
    }
  }, [preselectedSlot]);

  if (!isOpen) return null;

  // Selected Slots
  const selectedSlots = TIMETABLE_SLOTS.filter(s => selectedSlotIds.includes(s.id));

  // Clash Detection Algorithm (from Agents.md)
  const detectClashes = (slots: TimetableSlot[]) => {
    const clashes: string[] = [];
    for (let i = 0; i < slots.length; i++) {
      for (let j = i + 1; j < slots.length; j++) {
        const a = slots[i];
        const b = slots[j];
        if (a.day === b.day) {
          if (a.startTime < b.endTime && b.startTime < a.endTime) {
            clashes.push(`"${a.subjectTitle}" clashes with "${b.subjectTitle}" on ${a.day} at ${a.startTime}`);
          }
        }
      }
    }
    return clashes;
  };

  const scheduleClashes = detectClashes(selectedSlots);

  // Pricing calculations
  const { weeklyTotal, savings } = grindsService.calculateBundle(selectedSlotIds.length);

  // Slot toggle
  const toggleSlot = (id: string) => {
    setSelectedSlotIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Submission Handler
  const handleSubmitBooking = async () => {
    setIsSubmitting(true);
    try {
      const res = await grindsService.submitBooking({
        studentName,
        parentName,
        parentPhone,
        parentEmail,
        currentSchool,
        cycle,
        slotIds: selectedSlotIds,
        totalWeeklyFee: weeklyTotal,
        notes
      });
      setSubmittedBookingId(res.bookingId);
      setStep(3);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp formatted string
  const formatWhatsAppText = () => {
    const slotsText = selectedSlots.map(s => `• ${s.subjectTitle} (${s.day} ${s.startTime}-${s.endTime})`).join('\n');
    const msg = `Hi Caitriona, I would like to enrol at Solomon Grinds:\n\nStudent: ${studentName}\nYear: ${cycle}\nSchool: ${currentSchool || 'Not specified'}\nParent: ${parentName} (${parentPhone})\n\nSelected Classes:\n${slotsText}\n\nWeekly Fee: €${weeklyTotal}\nNotes: ${notes || 'None'}`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-night-950 via-night-900 to-night-850 text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-peach-300 block">
              Step {step} of 3
            </span>
            <h3 className="text-lg font-bold text-white">
              {step === 1 && "Student & Parent Details"}
              {step === 2 && "Select Subjects & Weekly Schedule"}
              {step === 3 && "Booking Confirmed!"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* STEP 1: Student & Parent Profile */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah O'Connor"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peach-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Academic Cycle / Year *
                  </label>
                  <select
                    value={cycle}
                    onChange={(e) => setCycle(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peach-400"
                  >
                    <option value="Leaving Certificate">Leaving Certificate (6th Year)</option>
                    <option value="5th Year">5th Year</option>
                    <option value="Junior Cycle">Junior Cycle (3rd Year / 1st-2nd)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mark O'Connor"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peach-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Parent Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 087 1234567"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peach-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Parent Email (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. mark@example.com"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peach-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Current Secondary School
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lucan CC / Salesian Celbridge"
                    value={currentSchool}
                    onChange={(e) => setCurrentSchool(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-peach-400"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  disabled={!studentName.trim() || !parentName.trim() || !parentPhone.trim()}
                  onClick={() => setStep(2)}
                  className="px-6 py-3 text-sm font-bold text-white bg-peach-400 hover:bg-peach-300 text-night-950 rounded-full shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <span>Select Subjects & Slots</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Subject & Schedule Selection */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                <span>Select one or more classes for {studentName}:</span>
                <span className="font-semibold text-slate-900">{selectedSlotIds.length} slot(s) selected</span>
              </div>

              {/* Conflict warning if clash detected */}
              {scheduleClashes.length > 0 && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-800 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Timetable Clash Detected:</span>
                  </div>
                  {scheduleClashes.map((clash, i) => (
                    <p key={i} className="pl-5">• {clash}</p>
                  ))}
                  <p className="pl-5 text-red-600 font-medium">Please deselect one of the overlapping slots before booking.</p>
                </div>
              )}

              {/* Slot checklist */}
              <div className="max-h-72 overflow-y-auto pr-1 space-y-2.5">
                {TIMETABLE_SLOTS.map((slot) => {
                  const isChecked = selectedSlotIds.includes(slot.id);
                  return (
                    <div
                      key={slot.id}
                      onClick={() => toggleSlot(slot.id)}
                      className={`p-3.5 rounded-2xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-peach-400 bg-peach-50/60 ring-1 ring-peach-400'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-lg border mt-0.5 flex items-center justify-center ${
                          isChecked ? 'bg-peach-500 border-peach-500 text-white' : 'border-slate-300'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="font-bold text-slate-900 text-sm">{slot.subjectTitle}</span>
                            <span className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-1.5 py-0.2 rounded">
                              {slot.level}
                            </span>
                          </div>
                          <span className="text-slate-500">
                            {slot.day}s {slot.startTime}–{slot.endTime} • {slot.teacherName} (SEC Examiner)
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-mono font-bold text-slate-900 block">€20</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Fee and Bundle summary */}
              <div className="p-4 bg-night-950 text-white rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-400 block font-medium">Calculated Weekly Tuition:</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold text-amber-300 font-mono">€{weeklyTotal}</span>
                    <span className="text-xs text-stone-300">/ week</span>
                  </div>
                </div>

                {savings > 0 && (
                  <span className="text-xs font-semibold bg-white/10 text-amber-300 border border-white/20 px-3 py-1 rounded-full">
                    🎉 Save €{savings}/wk with bundle!
                  </span>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  disabled={selectedSlotIds.length === 0 || scheduleClashes.length > 0 || isSubmitting}
                  onClick={handleSubmitBooking}
                  className="px-6 py-3 text-sm font-bold text-white bg-peach-400 hover:bg-peach-300 text-night-950 rounded-full shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <span>{isSubmitting ? 'Reserving...' : 'Confirm & Reserve Seat'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Booking Confirmed & WhatsApp Dispatch */}
          {step === 3 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-peach-100 text-peach-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-peach-700 block mb-1">
                  Enrolment Request Registered
                </span>
                <h4 className="text-2xl font-extrabold text-slate-900 mb-2">
                  Thank You, {parentName}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your seat reservation request for <strong className="text-slate-900">{studentName}</strong> has been logged under Reference ID: <span className="font-mono font-bold text-peach-600">{submittedBookingId}</span>.
                </p>
              </div>

              {/* Action Choices */}
              <div className="space-y-3 max-w-md mx-auto">
                {/* Primary WhatsApp Action */}
                <a
                  href={`https://wa.me/353872745234?text=${formatWhatsAppText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>Fast-Track via WhatsApp to Caitriona</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 px-4 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs"
                >
                  Done (We will contact you shortly)
                </button>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                Scoil Áine Naofa, Newcastle Road, Lucan, K78 PF65 • Enquiries: 01 6284171
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
