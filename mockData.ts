/**
 * Solomon Grinds - Mock Data Store
 * Location: Scoil Áine Naofa, Newcastle Road, Lucan, Co. Dublin
 * Prepared for future seamless migration to Supabase PostgreSQL schema
 */

export interface Subject {
  id: string;
  code: string;
  title: string;
  cycle: 'Leaving Certificate' | 'Junior Cycle' | '5th Year';
  category: 'STEM' | 'Languages' | 'Business & Humanities';
  levels: ('Higher' | 'Ordinary')[];
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
  cycle: 'Leaving Certificate' | 'Junior Cycle' | '5th Year';
  level: 'Higher' | 'Ordinary';
  day: 'Wednesday' | 'Saturday';
  startTime: string;
  endTime: string;
  room: string;
  teacherId: string;
  teacherName: string;
  isExaminer: boolean;
  capacity: number;
  enrolledCount: number;
  feePerClass: number;
  isOnlineAvailable: boolean;
}

export interface Testimonial {
  id: string;
  studentOrParentName: string;
  role: 'Student' | 'Parent';
  location: string;
  cycle: string;
  subjectsTaken: string[];
  rating: number;
  quote: string;
  achievement: string;
}

export interface PricingTier {
  subjectsCount: number;
  weeklyRate: number;
  standardRate: number;
  weeklySavings: number;
  termSavings: number; // based on 30 weeks
  isPopular?: boolean;
}

export const MOCK_SUBJECTS: Subject[] = [
  // Leaving Certificate STEM
  {
    id: "sub-lc-maths-h",
    code: "LC-MATHS-H",
    title: "Leaving Cert Mathematics",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Higher"],
    description: "In-depth coverage of Paper 1 (Algebra, Calculus, Complex Numbers) and Paper 2 (Probability, Statistics, Geometry, Trigonometry) with step-by-step marking scheme breakdowns.",
    isPopular: true
  },
  {
    id: "sub-lc-maths-o",
    code: "LC-MATHS-O",
    title: "Leaving Cert Mathematics",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Ordinary"],
    description: "Focus on core problem solving, exam confidence, and mastering high-yield questions for O1/O2 success.",
    isPopular: true
  },
  {
    id: "sub-lc-biology-h",
    code: "LC-BIO-H",
    title: "Leaving Cert Biology",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Higher"],
    description: "Mandatory experiments, genetics, ecology, and precise SEC definition phrasing to maximize exam marks.",
    isPopular: true
  },
  {
    id: "sub-lc-chemistry-h",
    code: "LC-CHEM-H",
    title: "Leaving Cert Chemistry",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Higher"],
    description: "Organic mechanisms, titrations, stoichiometry calculations, and atomic theory with an experienced examiner.",
    isPopular: true
  },
  {
    id: "sub-lc-physics-h",
    code: "LC-PHYS-H",
    title: "Leaving Cert Physics",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Higher"],
    description: "Mechanics, wave motion, electricity, and nuclear physics broken down with practical mathematical methods."
  },
  {
    id: "sub-lc-compsci-h",
    code: "LC-CS-H",
    title: "Leaving Cert Computer Science",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Higher"],
    description: "Python programming, algorithms, computer systems, and Applied Learning Task (ALT) project mentoring."
  },

  // Leaving Certificate Languages
  {
    id: "sub-lc-irish-h",
    code: "LC-GAE-H",
    title: "Leaving Cert Irish (Gaeilge)",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Higher"],
    description: "Comprehensive 40% Oral examination mastery, Sraithpictiúir, poetry, prose, and essay composition structures.",
    isPopular: true
  },
  {
    id: "sub-lc-english-h",
    code: "LC-ENG-H",
    title: "Leaving Cert English",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Higher"],
    description: "Single text deep-dive, comparative study frameworks, poetry analysis (75 marks), and Paper 1 composition technique.",
    isPopular: true
  },
  {
    id: "sub-lc-french-h",
    code: "LC-FR-H",
    title: "Leaving Cert French",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Higher", "Ordinary"],
    description: "Oral exam fluency, written opinion pieces, reading comprehensions, and grammatical mastery with Caitriona Hayes.",
    isPopular: true
  },
  {
    id: "sub-lc-spanish-h",
    code: "LC-ES-H",
    title: "Leaving Cert Spanish",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Higher", "Ordinary"],
    description: "Oral role-plays, dialogue construction, diary entries, formal letters, and listening comprehension drills."
  },
  {
    id: "sub-lc-german-h",
    code: "LC-DE-H",
    title: "Leaving Cert German",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Higher"],
    description: "Picture sequences, project presentation preparation, formal grammar patterns, and written production."
  },

  // Leaving Certificate Business & Humanities
  {
    id: "sub-lc-business-h",
    code: "LC-BUS-H",
    title: "Leaving Cert Business",
    cycle: "Leaving Certificate",
    category: "Business & Humanities",
    levels: ["Higher"],
    description: "Applied Business Questions (ABQ) technique, management, enterprise, and European/international trade units.",
    isPopular: true
  },
  {
    id: "sub-lc-accounting-h",
    code: "LC-ACC-H",
    title: "Leaving Cert Accounting",
    cycle: "Leaving Certificate",
    category: "Business & Humanities",
    levels: ["Higher"],
    description: "Final accounts, published accounts, management/budgeting accounting, and complete speed-drill methodology."
  },
  {
    id: "sub-lc-geography-h",
    code: "LC-GEO-H",
    title: "Leaving Cert Geography",
    cycle: "Leaving Certificate",
    category: "Business & Humanities",
    levels: ["Higher"],
    description: "Physical, regional, and human geography SRP (Significant Relevant Point) marking scheme structures."
  },
  {
    id: "sub-lc-history-h",
    code: "LC-HIST-H",
    title: "Leaving Cert History",
    cycle: "Leaving Certificate",
    category: "Business & Humanities",
    levels: ["Higher"],
    description: "Document-based study, key personalities, Irish and European case studies, and Research Study Report (RSR) guidance."
  },

  // Junior Cycle Subjects
  {
    id: "sub-jc-maths-h",
    code: "JC-MATHS-H",
    title: "Junior Cycle Maths",
    cycle: "Junior Cycle",
    category: "STEM",
    levels: ["Higher"],
    description: "Mastering the SEC Common/Higher specification: algebra, statistics, geometry, coordinate geometry, and CBA coaching.",
    isPopular: true
  },
  {
    id: "sub-jc-science-c",
    code: "JC-SCI-C",
    title: "Junior Cycle Science",
    cycle: "Junior Cycle",
    category: "STEM",
    levels: ["Higher"],
    description: "Biology, Chemistry, Physics, Earth & Space systems, alongside Science in Society CBA investigation practice.",
    isPopular: true
  },
  {
    id: "sub-jc-english-h",
    code: "JC-ENG-H",
    title: "Junior Cycle English",
    cycle: "Junior Cycle",
    category: "Languages",
    levels: ["Higher"],
    description: "Creative writing, drama, film studies, responding to seen and unseen poetry, and structured response writing.",
    isPopular: true
  },
  {
    id: "sub-jc-irish-h",
    code: "JC-GAE-H",
    title: "Junior Cycle Irish",
    cycle: "Junior Cycle",
    category: "Languages",
    levels: ["Higher"],
    description: "Grammar fundamentals, listening comprehension (Cluastuiscint), reading comprehension, and oral conversation confidence."
  },
  {
    id: "sub-jc-french-c",
    code: "JC-FR-C",
    title: "Junior Cycle French",
    cycle: "Junior Cycle",
    category: "Languages",
    levels: ["Higher"],
    description: "Interactive French conversation, everyday vocabulary, grammar tenses, and listening exam preparation."
  }
];

export const MOCK_TEACHERS: Teacher[] = [
  {
    id: "teach-caitriona",
    fullName: "Caitriona Hayes",
    role: "Centre Director & Senior Languages Lead",
    qualifications: "B.A., H.Dip. Ed., State Examinations Commission Examiner",
    bio: "Over 25 years teaching and examining Leaving Certificate French and Spanish. Caitriona coordinates Solomon Grinds and has helped thousands of West Dublin students achieve top oral and written grades through encouraging, small-group instruction.",
    isExaminer: true,
    yearsExperience: 25,
    subjects: ["LC French", "LC Spanish", "Oral Language Immersion"],
    avatarUrl: "/images/teachers/caitriona-hayes.jpg"
  },
  {
    id: "teach-ebrennan",
    fullName: "Mr. E. Brennan",
    role: "Senior Leaving Cert Maths Lead",
    qualifications: "B.Sc. (Hons) Mathematics, M.Sc., SEC Senior Examiner",
    bio: "Senior SEC examiner with 18 years experience teaching Leaving Cert Higher Mathematics. Renowned for breaking down calculus, probability, and trigonometry into clear, intuitive step-by-step algorithms.",
    isExaminer: true,
    yearsExperience: 18,
    subjects: ["LC Higher Maths", "5th Year Higher Maths", "JC Higher Maths"],
    avatarUrl: "/images/teachers/e-brennan.jpg"
  },
  {
    id: "teach-smurphy",
    fullName: "Ms. S. Murphy",
    role: "Biology & Chemistry Specialist",
    qualifications: "B.Sc. Biochemistry (UCD), PME Science",
    bio: "Active state examiner specializing in Leaving Cert Biology and Chemistry. Focuses intensely on experiment questions, marking definitions, and exam timing techniques.",
    isExaminer: true,
    yearsExperience: 14,
    subjects: ["LC Higher Biology", "LC Higher Chemistry", "JC Science"],
    avatarUrl: "/images/teachers/s-murphy.jpg"
  },
  {
    id: "teach-podonnell",
    fullName: "Mr. P. O'Donnell",
    role: "Irish (Gaeilge) & Oral Preparation Lead",
    qualifications: "M.A. Nua-Ghaeilge, SEC Oral & Written Examiner",
    bio: "Official SEC Leaving Certificate Oral Examiner. Creator of the Solomon Oral Success Blueprint, focusing on natural conversational fluency, idiom usage, and Sraithpictiúir confidence.",
    isExaminer: true,
    yearsExperience: 16,
    subjects: ["LC Higher Irish", "Oral Exam Intensive", "JC Higher Irish"],
    avatarUrl: "/images/teachers/p-odonnell.jpg"
  },
  {
    id: "teach-kkelly",
    fullName: "Ms. K. Kelly",
    role: "English & Comparative Literature Specialist",
    qualifications: "B.A. English & History (TCD), H.Dip.",
    bio: "Past state examiner known for dynamic poetry and comparative essay frameworks. Teaches students how to construct distinctive personal voices and achieve H1 criteria on Paper 1 and 2.",
    isExaminer: true,
    yearsExperience: 15,
    subjects: ["LC Higher English", "JC Higher English"],
    avatarUrl: "/images/teachers/k-kelly.jpg"
  }
];

export const MOCK_TIMETABLE: TimetableSlot[] = [
  // Wednesday Slots
  {
    id: "slot-wed-1",
    subjectId: "sub-lc-maths-h",
    subjectTitle: "5th Year Higher Maths",
    cycle: "5th Year",
    level: "Higher",
    day: "Wednesday",
    startTime: "17:30",
    endTime: "18:30",
    room: "Room 1 (Scoil Áine Naofa)",
    teacherId: "teach-ebrennan",
    teacherName: "Mr. E. Brennan",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 7,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-wed-2",
    subjectId: "sub-lc-spanish-h",
    subjectTitle: "LC Higher Spanish Oral & Aural",
    cycle: "Leaving Certificate",
    level: "Higher",
    day: "Wednesday",
    startTime: "17:30",
    endTime: "18:30",
    room: "Room 2 (Scoil Áine Naofa)",
    teacherId: "teach-caitriona",
    teacherName: "Caitriona Hayes",
    isExaminer: true,
    capacity: 8,
    enrolledCount: 6,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-wed-3",
    subjectId: "sub-lc-compsci-h",
    subjectTitle: "LC Higher Computer Science",
    cycle: "Leaving Certificate",
    level: "Higher",
    day: "Wednesday",
    startTime: "17:30",
    endTime: "18:30",
    room: "Computer Suite",
    teacherId: "teach-ebrennan",
    teacherName: "Mr. E. Brennan",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 4,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-wed-4",
    subjectId: "sub-jc-science-c",
    subjectTitle: "Junior Cycle Science",
    cycle: "Junior Cycle",
    level: "Higher",
    day: "Wednesday",
    startTime: "17:30",
    endTime: "18:30",
    room: "Science Lab",
    teacherId: "teach-smurphy",
    teacherName: "Ms. S. Murphy",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 8,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-wed-5",
    subjectId: "sub-lc-french-h",
    subjectTitle: "LC Higher French Written & Grammar",
    cycle: "Leaving Certificate",
    level: "Higher",
    day: "Wednesday",
    startTime: "18:45",
    endTime: "19:45",
    room: "Room 2 (Scoil Áine Naofa)",
    teacherId: "teach-caitriona",
    teacherName: "Caitriona Hayes",
    isExaminer: true,
    capacity: 8,
    enrolledCount: 5,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-wed-6",
    subjectId: "sub-jc-maths-h",
    subjectTitle: "Junior Cycle Higher Maths",
    cycle: "Junior Cycle",
    level: "Higher",
    day: "Wednesday",
    startTime: "18:45",
    endTime: "19:45",
    room: "Room 1 (Scoil Áine Naofa)",
    teacherId: "teach-ebrennan",
    teacherName: "Mr. E. Brennan",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 9,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-wed-7",
    subjectId: "sub-lc-english-h",
    subjectTitle: "LC Higher English (Single Text & Comparative)",
    cycle: "Leaving Certificate",
    level: "Higher",
    day: "Wednesday",
    startTime: "20:00",
    endTime: "21:00",
    room: "Room 3 (Scoil Áine Naofa)",
    teacherId: "teach-kkelly",
    teacherName: "Ms. K. Kelly",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 7,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-wed-8",
    subjectId: "sub-lc-physics-h",
    subjectTitle: "LC Higher Physics",
    cycle: "Leaving Certificate",
    level: "Higher",
    day: "Wednesday",
    startTime: "20:00",
    endTime: "21:00",
    room: "Science Lab",
    teacherId: "teach-smurphy",
    teacherName: "Ms. S. Murphy",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 6,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },

  // Saturday Slots
  {
    id: "slot-sat-1",
    subjectId: "sub-lc-chemistry-h",
    subjectTitle: "LC Higher Chemistry",
    cycle: "Leaving Certificate",
    level: "Higher",
    day: "Saturday",
    startTime: "09:30",
    endTime: "10:30",
    room: "Science Lab",
    teacherId: "teach-smurphy",
    teacherName: "Ms. S. Murphy",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 8,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-sat-2",
    subjectId: "sub-jc-maths-h",
    subjectTitle: "Junior Cycle Higher Maths",
    cycle: "Junior Cycle",
    level: "Higher",
    day: "Saturday",
    startTime: "09:30",
    endTime: "10:30",
    room: "Room 1 (Scoil Áine Naofa)",
    teacherId: "teach-ebrennan",
    teacherName: "Mr. E. Brennan",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 9,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-sat-3",
    subjectId: "sub-lc-irish-h",
    subjectTitle: "LC Higher Irish & Oral Preparation",
    cycle: "Leaving Certificate",
    level: "Higher",
    day: "Saturday",
    startTime: "10:45",
    endTime: "11:45",
    room: "Room 2 (Scoil Áine Naofa)",
    teacherId: "teach-podonnell",
    teacherName: "Mr. P. O'Donnell",
    isExaminer: true,
    capacity: 8,
    enrolledCount: 7,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-sat-4",
    subjectId: "sub-lc-business-h",
    subjectTitle: "LC Higher Business (ABQ & Strategy)",
    cycle: "Leaving Certificate",
    level: "Higher",
    day: "Saturday",
    startTime: "10:45",
    endTime: "11:45",
    room: "Room 3 (Scoil Áine Naofa)",
    teacherId: "teach-kkelly",
    teacherName: "Ms. K. Kelly",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 6,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-sat-5",
    subjectId: "sub-lc-maths-h",
    subjectTitle: "LC Higher Maths (Paper 1 & 2 Exam Mastery)",
    cycle: "Leaving Certificate",
    level: "Higher",
    day: "Saturday",
    startTime: "12:00",
    endTime: "13:00",
    room: "Room 1 (Scoil Áine Naofa)",
    teacherId: "teach-ebrennan",
    teacherName: "Mr. E. Brennan",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 9,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-sat-6",
    subjectId: "sub-lc-biology-h",
    subjectTitle: "LC Higher Biology (Genetics & Ecology)",
    cycle: "Leaving Certificate",
    level: "Higher",
    day: "Saturday",
    startTime: "12:00",
    endTime: "13:00",
    room: "Science Lab",
    teacherId: "teach-smurphy",
    teacherName: "Ms. S. Murphy",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 8,
    feePerClass: 20.00,
    isOnlineAvailable: true
  },
  {
    id: "slot-sat-7",
    subjectId: "sub-lc-maths-o",
    subjectTitle: "LC Ordinary Maths (Core Exam Confidence)",
    cycle: "Leaving Certificate",
    level: "Ordinary",
    day: "Saturday",
    startTime: "13:15",
    endTime: "14:15",
    room: "Room 1 (Scoil Áine Naofa)",
    teacherId: "teach-ebrennan",
    teacherName: "Mr. E. Brennan",
    isExaminer: true,
    capacity: 10,
    enrolledCount: 6,
    feePerClass: 20.00,
    isOnlineAvailable: true
  }
];

export const MOCK_PRICING_TIERS: PricingTier[] = [
  {
    subjectsCount: 1,
    weeklyRate: 20.00,
    standardRate: 20.00,
    weeklySavings: 0.00,
    termSavings: 0.00
  },
  {
    subjectsCount: 2,
    weeklyRate: 38.00,
    standardRate: 40.00,
    weeklySavings: 2.00,
    termSavings: 60.00
  },
  {
    subjectsCount: 3,
    weeklyRate: 55.00,
    standardRate: 60.00,
    weeklySavings: 5.00,
    termSavings: 150.00,
    isPopular: true
  },
  {
    subjectsCount: 4,
    weeklyRate: 72.00,
    standardRate: 80.00,
    weeklySavings: 8.00,
    termSavings: 240.00
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    studentOrParentName: "Claire O'Mahony",
    role: "Parent",
    location: "Lucan",
    cycle: "Leaving Certificate",
    subjectsTaken: ["Higher Maths", "Higher Chemistry", "Higher Irish"],
    rating: 5,
    quote: "The small group setting made a night-and-day difference for our son. In school, he felt intimidated to ask questions. Here, Mr. Brennan and Ms. Murphy gave him individual attention each week. Best of all, we avoided spending two hours every Saturday driving into Leeson Street!",
    achievement: "Son jumped from H4 to H1 in Maths, now studying Engineering in Trinity College Dublin (577 Points)."
  },
  {
    id: "test-2",
    studentOrParentName: "Darragh Whelan",
    role: "Student",
    location: "Celbridge",
    cycle: "Leaving Certificate",
    subjectsTaken: ["Higher Irish", "Higher French"],
    rating: 5,
    quote: "Caitriona Hayes was unbelievable for the French and Irish orals. Because she has examined for years, she knew exactly which conversational topics examiners focus on. I walked into my oral feeling 100% prepared.",
    achievement: "Scored 94% in LC Irish Oral and received first CAO choice at UCD."
  },
  {
    id: "test-3",
    studentOrParentName: "Mary Fitzpatrick",
    role: "Parent",
    location: "Leixlip",
    cycle: "Junior Cycle & 5th Year",
    subjectsTaken: ["Junior Cycle Maths", "Junior Cycle Science"],
    rating: 5,
    quote: "The pay-as-you-go flexibility gives great peace of mind. We didn't have to lock into huge upfront fees. Caitriona runs the centre with such care and warmth, and the teachers genuinely care about the students.",
    achievement: "Daughter achieved Higher Merits and Distinctions across all STEM subjects."
  }
];

export const MOCK_COMMUTE_ROUTES = [
  {
    route: "Lucan Village / Newcastle Rd",
    travelTime: "3 - 5 mins",
    mode: "Car / Walk",
    details: "Directly opposite SuperValu Lucan on Newcastle Road. Easy drop-off and pickup with free parking."
  },
  {
    route: "Celbridge (via R405 / N4)",
    travelTime: "10 mins",
    mode: "Car / Bus",
    details: "Short 8km drive straight along the R405 or N4. Safe, hassle-free suburban commute."
  },
  {
    route: "Leixlip (via R148)",
    travelTime: "8 mins",
    mode: "Car / Bus",
    details: "Quick drive across Salmon Leap bridge and N4 Lucan bypass."
  },
  {
    route: "Palmerstown & Clondalkin",
    travelTime: "7 - 10 mins",
    mode: "Car / Dublin Bus",
    details: "Served directly by Dublin Bus routes C1, C2, and C4 right to Newcastle Road."
  },
  {
    route: "Dublin Bus Routes",
    travelTime: "Direct",
    mode: "C1, C2, C4, L51, L52, L53",
    details: "High-frequency spine routes stopping just outside Scoil Áine Naofa."
  }
];
