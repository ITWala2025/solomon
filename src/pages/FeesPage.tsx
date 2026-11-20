import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { PricingCalculator } from '../components/PricingCalculator';
import { Check, ShieldCheck, HelpCircle } from 'lucide-react';

interface FeesPageProps {
  onSelectBundle: (count: number) => void;
  onOpenEnrolment: () => void;
}

export const FeesPage: React.FC<FeesPageProps> = ({ onSelectBundle, onOpenEnrolment }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        badge="Zero Rigid Lock-in Contracts"
        title="Fees & Multi-Subject Calculator"
        subtitle="Transparent pay-as-you-go pricing starting from €20 per class, with weekly multi-subject discounts and family savings."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Fees & Pricing' },
        ]}
      />

      {/* Pricing Calculator Component */}
      <PricingCalculator onOpenEnrolmentWithBundle={onSelectBundle} />

      {/* Detailed Tuition Breakdown Table */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Tuition Rates at a Glance</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Pay weekly in person or online. No upfront full-semester commitments required.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-100 text-slate-700 uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="py-4 px-6">Package</th>
                  <th className="py-4 px-6">Weekly Fee</th>
                  <th className="py-4 px-6">Effective Rate</th>
                  <th className="py-4 px-6 text-right">Academic Year Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-semibold text-slate-900">1 Subject (Pay-As-You-Go)</td>
                  <td className="py-4 px-6 font-mono font-bold text-slate-900">€20.00 / wk</td>
                  <td className="py-4 px-6 text-slate-500">€20.00 / class</td>
                  <td className="py-4 px-6 text-right text-slate-400">—</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-semibold text-slate-900">2 Subjects Bundle</td>
                  <td className="py-4 px-6 font-mono font-bold text-slate-900">€38.00 / wk</td>
                  <td className="py-4 px-6 text-slate-500">€19.00 / class</td>
                  <td className="py-4 px-6 text-right font-bold text-olive-600">Save €60.00 / year</td>
                </tr>
                <tr className="bg-amber-50/60 hover:bg-amber-50">
                  <td className="py-4 px-6 font-bold text-peach-900 flex items-center gap-2">
                    <span>3 Subjects Bundle</span>
                    <span className="text-[10px] font-extrabold bg-peach-400 text-night-950 px-2 py-0.5 rounded-full uppercase">
                      Most Popular
                    </span>
                  </td>
                  <td className="py-4 px-6 font-mono font-extrabold text-peach-700">€55.00 / wk</td>
                  <td className="py-4 px-6 text-slate-600 font-semibold">€18.33 / class</td>
                  <td className="py-4 px-6 text-right font-extrabold text-olive-600">Save €150.00 / year</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-semibold text-slate-900">4 Subjects Bundle</td>
                  <td className="py-4 px-6 font-mono font-bold text-slate-900">€72.00 / wk</td>
                  <td className="py-4 px-6 text-slate-500">€18.00 / class</td>
                  <td className="py-4 px-6 text-right font-bold text-olive-600">Save €240.00 / year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-olive-500 flex-shrink-0" />
              <span>Concession available: <strong>10% sibling discount</strong> applied when brothers/sisters attend together.</span>
            </div>
            <button
              onClick={onOpenEnrolment}
              className="px-5 py-2.5 font-bold text-night-950 bg-peach-400 hover:bg-peach-500 rounded-full flex-shrink-0"
            >
              Enrol With Bundle
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
