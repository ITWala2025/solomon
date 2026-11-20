import React from 'react';
import { Hero } from '../components/Hero';
import { DifferenceSection } from '../components/DifferenceSection';
import { TimetableExplorer } from '../components/TimetableExplorer';
import { PricingCalculator } from '../components/PricingCalculator';
import { SpecializedHubs } from '../components/SpecializedHubs';
import { FacultyShowcase } from '../components/FacultyShowcase';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { LocationSection } from '../components/LocationSection';
import { FAQSection } from '../components/FAQSection';
import { TimetableSlot } from '../types';

interface HomePageProps {
  onOpenEnrolment: () => void;
  onSelectSlot: (slot: TimetableSlot) => void;
  onSelectBundle: (count: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenEnrolment,
  onSelectSlot,
  onSelectBundle
}) => {
  return (
    <>
      <Hero
        onOpenEnrolment={onOpenEnrolment}
      />
      <DifferenceSection />
      <TimetableExplorer onSelectSlot={onSelectSlot} />
      <PricingCalculator onOpenEnrolmentWithBundle={onSelectBundle} />
      <SpecializedHubs onOpenEnrolment={onOpenEnrolment} />
      <FacultyShowcase />
      <TestimonialsSection />
      <LocationSection />
      <FAQSection />
    </>
  );
};
