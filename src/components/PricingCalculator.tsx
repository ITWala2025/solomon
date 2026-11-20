import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/mockData';
import { Calculator, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingCalculatorProps {
  onOpenEnrolmentWithBundle: (count: number) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenEnrolmentWithBundle }) => {
  const [subjectCount, setSubjectCount] = useState<number>(3);
  const [hasSiblingDiscount, setHasSiblingDiscount] = useState<boolean>(false);

  // Pricing calculation
  const calculateFees = (count: number, sibling: boolean) => {
    let weekly = 20;
    let standard = count * 20;

    if (count === 1) weekly = 20;
    else if (count === 2) weekly = 38;
    else if (count === 3) weekly = 55;
    else weekly = count * 18;

    if (sibling) {
      weekly = weekly * 0.9;
    }

    const weeklySavings = standard - weekly;
    const termSavings = weeklySavings * 30; // 30-week academic year

    return { weekly, standard, weeklySavings, termSavings };
  };

  const { weekly, standard, weeklySavings, termSavings } = calculateFees(subjectCount, hasSiblingDiscount);

  return (
    <section id="pricing" className="py-9 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach-100 text-peach-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-peach-600" />
            Transparent Tuition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Dynamic Pricing & Multi-Subject Savings Calculator
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Standard pay-as-you-go is just <strong className="text-slate-900">€20 per class</strong>. Save more when enrolling in multiple subjects with zero rigid lock-in contracts.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-night-950 via-night-900 to-night-850 p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Configure Your Weekly Grinds Package</h3>
            <p className="text-stone-300 text-xs sm:text-sm">
              Adjust the subject counter below to see live discounts and yearly savings for your family.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Step 1: Counter Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                How many weekly subjects will you attend?
              </label>

              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((count) => {
                  const isSelected = subjectCount === count;
                  return (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setSubjectCount(count)}
                      className={`relative py-4 px-3 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? 'border-peach-500 bg-peach-50 text-peach-900 ring-2 ring-peach-400'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      {count === 3 && (
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-peach-400 text-night-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-sm">
                          Most Popular
                        </span>
                      )}
                      <span className="text-2xl font-extrabold block mb-0.5">{count}</span>
                      <span className="text-xs font-semibold text-slate-500 block">
                        {count === 1 ? 'Subject' : 'Subjects'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sibling Discount Toggle */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-olive-100 text-olive-700 flex items-center justify-center font-bold text-sm">
                  10%
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sibling Discount Option</h4>
                  <p className="text-xs text-slate-500">Apply an extra 10% family concession when two or more children enrol.</p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasSiblingDiscount}
                  onChange={(e) => setHasSiblingDiscount(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-peach-500"></div>
              </label>
            </div>

            {/* Results Breakdown Box */}
            <div className="bg-gradient-to-br from-night-950 to-night-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs text-stone-400 uppercase tracking-widest font-semibold block mb-1">
                    Your Total Tuition
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-peach-400 font-mono">
                      €{weekly.toFixed(0)}
                    </span>
                    <span className="text-sm text-stone-300">/ week</span>
                  </div>
                </div>

                {weeklySavings > 0 && (
                  <div className="bg-white/10 border border-white/20 px-4 py-2.5 rounded-2xl text-right">
                    <div className="flex items-center gap-1.5 text-olive-400 text-xs font-bold uppercase tracking-wider mb-0.5">
                      <Sparkles className="w-3.5 h-3.5" /> Bundle Discount
                    </div>
                    <span className="text-xs text-stone-300">
                      You save <strong className="text-white font-bold">€{weeklySavings.toFixed(0)}/wk</strong> (€{termSavings.toFixed(0)} over the school year)
                    </span>
                  </div>
                )}
              </div>

              {/* Package inclusions list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-peach-400 flex-shrink-0" />
                  <span>{subjectCount} weekly 1-hour examiner-led sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-peach-400 flex-shrink-0" />
                  <span>Small group guarantee (max 6–10 students)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-peach-400 flex-shrink-0" />
                  <span>Comprehensive revision notes & SEC marking schemes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-peach-400 flex-shrink-0" />
                  <span>Flexible weekly pay-as-you-go terms</span>
                </div>
              </div>
            </div>

            {/* Lock in CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenEnrolmentWithBundle(subjectCount)}
                className="w-full py-4 px-6 text-sm sm:text-base font-extrabold text-night-950 bg-peach-400 hover:bg-peach-300 rounded-full shadow-lg shadow-peach-400/20 transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Lock In {subjectCount}-Subject Bundle & Enrol Now</span>
                <ArrowRight className="w-4 h-4 text-night-950" />
              </button>
              <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-olive-500" />
                <span>Pay weekly in person or online. Zero cancellation penalties.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
