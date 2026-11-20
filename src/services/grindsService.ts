import { Subject, Teacher, TimetableSlot, BookingInquiry, Testimonial, AcademicCycle } from '../types';
import { SUBJECTS, TEACHERS, TIMETABLE_SLOTS, TESTIMONIALS } from '../data/mockData';

export interface TimetableFilter {
  cycle?: AcademicCycle | 'All';
  level?: 'Higher' | 'Ordinary' | 'All';
  day?: 'Wednesday' | 'Saturday' | 'All';
  category?: 'STEM' | 'Languages' | 'Business & Humanities' | 'All';
  searchQuery?: string;
}

export interface IGrindsService {
  getSubjects(cycle?: AcademicCycle | 'All'): Promise<Subject[]>;
  getTimetable(filter?: TimetableFilter): Promise<TimetableSlot[]>;
  getTeachers(): Promise<Teacher[]>;
  getTestimonials(): Promise<Testimonial[]>;
  submitBooking(inquiry: Omit<BookingInquiry, 'id' | 'createdAt' | 'status'>): Promise<{ success: boolean; bookingId: string }>;
  calculateBundle(slotCount: number): { weeklyTotal: number; savings: number; termSavings: number };
}

class MockGrindsService implements IGrindsService {
  private bookings: BookingInquiry[] = [];

  async getSubjects(cycle?: AcademicCycle | 'All'): Promise<Subject[]> {
    if (!cycle || cycle === 'All') return SUBJECTS;
    return SUBJECTS.filter(s => s.cycle === cycle);
  }

  async getTimetable(filter?: TimetableFilter): Promise<TimetableSlot[]> {
    let slots = [...TIMETABLE_SLOTS];

    if (filter) {
      if (filter.cycle && filter.cycle !== 'All') {
        slots = slots.filter(s => s.cycle === filter.cycle);
      }
      if (filter.level && filter.level !== 'All') {
        slots = slots.filter(s => s.level === filter.level);
      }
      if (filter.day && filter.day !== 'All') {
        slots = slots.filter(s => s.day === filter.day);
      }
      if (filter.searchQuery && filter.searchQuery.trim() !== '') {
        const query = filter.searchQuery.toLowerCase();
        slots = slots.filter(s =>
          s.subjectTitle.toLowerCase().includes(query) ||
          s.teacherName.toLowerCase().includes(query)
        );
      }
    }

    return slots;
  }

  async getTeachers(): Promise<Teacher[]> {
    return TEACHERS;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return TESTIMONIALS;
  }

  async submitBooking(inquiryData: Omit<BookingInquiry, 'id' | 'createdAt' | 'status'>): Promise<{ success: boolean; bookingId: string }> {
    const bookingId = `BK-${Date.now().toString(36).toUpperCase()}`;
    const newBooking: BookingInquiry = {
      ...inquiryData,
      id: bookingId,
      status: 'PENDING',
      createdAt: new Date().toISOString()
    };
    this.bookings.push(newBooking);
    return { success: true, bookingId };
  }

  calculateBundle(slotCount: number): { weeklyTotal: number; savings: number; termSavings: number } {
    if (slotCount <= 0) return { weeklyTotal: 0, savings: 0, termSavings: 0 };
    if (slotCount === 1) return { weeklyTotal: 20, savings: 0, termSavings: 0 };
    if (slotCount === 2) return { weeklyTotal: 38, savings: 2, termSavings: 60 };
    if (slotCount === 3) return { weeklyTotal: 55, savings: 5, termSavings: 150 };
    // 4 or more: €18 per class
    const total = slotCount * 18;
    const standard = slotCount * 20;
    const savings = standard - total;
    return { weeklyTotal: total, savings, termSavings: savings * 30 };
  }
}

// Export singleton instance
export const grindsService: IGrindsService = new MockGrindsService();
