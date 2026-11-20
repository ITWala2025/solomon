export type AcademicCycle = 'Leaving Certificate' | 'Junior Cycle' | '5th Year';
export type AcademicLevel = 'Higher' | 'Ordinary';
export type SubjectCategory = 'STEM' | 'Languages' | 'Business & Humanities';
export type DayOfWeek = 'Wednesday' | 'Saturday';

export interface Subject {
  id: string;
  code: string;
  title: string;
  cycle: AcademicCycle;
  category: SubjectCategory;
  levels: AcademicLevel[];
  description: string;
  isPopular?: boolean;
}

export interface Teacher {
  id: string;
  fullName: string;
  role: string;
  qualifications: string;
  bio: string;
  isExaminer: boolean;
  yearsExperience: number;
  subjects: string[];
  avatarUrl?: string;
}

export interface TimetableSlot {
  id: string;
  subjectId: string;
  subjectTitle: string;
  cycle: AcademicCycle;
  level: AcademicLevel;
  day: DayOfWeek;
  startTime: string; // "17:30"
  endTime: string;   // "18:30"
  room: string;
  teacherId: string;
  teacherName: string;
  isExaminer: boolean;
  capacity: number;
  enrolledCount: number;
  feePerClass: number; // standard €20.00
  isOnlineAvailable: boolean;
}

export interface BookingInquiry {
  id: string;
  studentName: string;
  parentName: string;
  parentPhone: string;
  parentEmail?: string;
  currentSchool?: string;
  cycle: AcademicCycle;
  slotIds: string[];
  totalWeeklyFee: number;
  status: 'PENDING' | 'CONFIRMED' | 'CONTACTED';
  notes?: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Student' | 'Parent';
  location: string;
  cycle: string;
  subjects: string[];
  rating: number;
  quote: string;
  achievement: string;
}

export interface PricingTier {
  subjectsCount: number;
  weeklyRate: number;
  standardRate: number;
  weeklySavings: number;
  termSavings: number; // 30-week school term
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Enrolment' | 'Academic' | 'Location' | 'Pricing';
}
