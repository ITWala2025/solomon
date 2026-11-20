import { Subject, Teacher, TimetableSlot, Testimonial, PricingTier, FAQItem } from '../types';

export const SUBJECTS: Subject[] = [
  // Leaving Certificate STEM
  {
    id: "sub-lc-maths-h",
    code: "LC-MATHS-H",
    title: "Leaving Cert Higher Maths",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Higher"],
    description: "In-depth breakdown of Paper 1 (Algebra, Calculus, Complex Numbers) and Paper 2 (Probability, Statistics, Geometry, Trigonometry) with step-by-step marking scheme rubrics.",
    isPopular: true
  },
  {
    id: "sub-lc-maths-o",
    code: "LC-MATHS-O",
    title: "Leaving Cert Ordinary Maths",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Ordinary"],
    description: "Builds exam confidence, key problem-solving formulas, and masters high-yield questions for O1/O2 success.",
    isPopular: true
  },
  {
    id: "sub-5th-maths-h",
    code: "5TH-MATHS-H",
    title: "5th Year Higher Maths",
    cycle: "5th Year",
    category: "STEM",
    levels: ["Higher"],
    description: "Foundational mastery of algebra, functions, coordinate geometry, and trigonometry early in the senior cycle to prevent 6th year cramming.",
    isPopular: true
  },
  {
    id: "sub-lc-biology-h",
    code: "LC-BIO-H",
    title: "Leaving Cert Higher Biology",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Higher"],
    description: "Complete dissection of mandatory experiments, genetics, cell biology, ecology, and exact SEC keyword definitions to achieve H1 marks.",
    isPopular: true
  },
  {
    id: "sub-lc-chemistry-h",
    code: "LC-CHEM-H",
    title: "Leaving Cert Higher Chemistry",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Higher"],
    description: "Organic mechanisms, volumetric titrations, stoichiometry, chemical equilibrium, and atomic theory with an experienced examiner.",
    isPopular: true
  },
  {
    id: "sub-lc-physics-h",
    code: "LC-PHYS-H",
    title: "Leaving Cert Higher Physics",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Higher"],
    description: "Mechanics, wave motion, electricity, and nuclear physics broken down with methodical mathematical problem-solving steps."
  },
  {
    id: "sub-lc-compsci-h",
    code: "LC-CS-H",
    title: "Leaving Cert Higher Computer Science",
    cycle: "Leaving Certificate",
    category: "STEM",
    levels: ["Higher"],
    description: "Python programming, computational thinking, computer systems, and Applied Learning Task (ALT) portfolio guidance."
  },

  // Leaving Certificate Languages
  {
    id: "sub-lc-irish-h",
    code: "LC-GAE-H",
    title: "Leaving Cert Higher Irish (Gaeilge)",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Higher"],
    description: "40% Oral examination mastery, Sraithpictiúir, poetry, prose, and essay composition structures with a senior oral examiner.",
    isPopular: true
  },
  {
    id: "sub-lc-irish-o",
    code: "LC-GAE-O",
    title: "Leaving Cert Ordinary Irish",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Ordinary"],
    description: "Focused oral prep (40% weighting), aural listening comprehension practice, and simplified prose/poetry frameworks."
  },
  {
    id: "sub-lc-english-h",
    code: "LC-ENG-H",
    title: "Leaving Cert Higher English",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Higher"],
    description: "Single text deep-dive (Macbeth/Hamlet), comparative study frameworks, poetry analysis (75 marks), and Paper 1 composition technique.",
    isPopular: true
  },
  {
    id: "sub-lc-french-h",
    code: "LC-FR-H",
    title: "Leaving Cert French (Oral & Written)",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Higher", "Ordinary"],
    description: "Oral exam fluency, written opinion pieces, reading comprehension, and grammatical accuracy led by Centre Director Caitriona Hayes.",
    isPopular: true
  },
  {
    id: "sub-lc-spanish-h",
    code: "LC-ES-H",
    title: "Leaving Cert Spanish (Oral & Written)",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Higher", "Ordinary"],
    description: "Oral role-play scenarios, dialogue construction, diary entries, formal letters, and listening comprehension drills."
  },
  {
    id: "sub-lc-german-h",
    code: "LC-DE-H",
    title: "Leaving Cert Higher German",
    cycle: "Leaving Certificate",
    category: "Languages",
    levels: ["Higher"],
    description: "Picture sequences, project presentation preparation, formal grammar patterns, and written production."
  },

  // Leaving Certificate Business & Humanities
  {
    id: "sub-lc-business-h",
    code: "LC-BUS-H",
    title: "Leaving Cert Higher Business",
    cycle: "Leaving Certificate",
    category: "Business & Humanities",
    levels: ["Higher"],
    description: "Applied Business Questions (ABQ) technique, management, enterprise, and European/international trade units.",
    isPopular: true
  },
  {
    id: "sub-lc-accounting-h",
    code: "LC-ACC-H",
    title: "Leaving Cert Higher Accounting",
    cycle: "Leaving Certificate",
    category: "Business & Humanities",
    levels: ["Higher"],
    description: "Final accounts, published accounts, management/budgeting accounting, and complete speed-drill methodology."
  },
  {
    id: "sub-lc-economics-h",
    code: "LC-ECON-H",
    title: "Leaving Cert Higher Economics",
    cycle: "Leaving Certificate",
    category: "Business & Humanities",
    levels: ["Higher"],
    description: "Microeconomics, macroeconomic models, research project guide, and SEC marking scheme answers."
  },
  {
    id: "sub-lc-geography-h",
    code: "LC-GEO-H",
    title: "Leaving Cert Higher Geography",
    cycle: "Leaving Certificate",
    category: "Business & Humanities",
    levels: ["Higher"],
    description: "Physical, regional, and human geography SRP (Significant Relevant Point) marking scheme structures."
  },
  {
    id: "sub-lc-history-h",
    code: "LC-HIST-H",
    title: "Leaving Cert Higher History",
    cycle: "Leaving Certificate",
    category: "Business & Humanities",
    levels: ["Higher"],
    description: "Document-based study, key personalities, Irish and European case studies, and Research Study Report (RSR) guidance."
  },

  // Junior Cycle Subjects
  {
    id: "sub-jc-maths-h",
    code: "JC-MATHS-H",
    title: "Junior Cycle Higher Maths",
    cycle: "Junior Cycle",
    category: "STEM",
    levels: ["Higher"],
    description: "Mastering the SEC Common/Higher specification: algebra, statistics, geometry, coordinate geometry, and Classroom-Based Assessment (CBA) coaching.",
    isPopular: true
  },
  {
    id: "sub-jc-science-h",
    code: "JC-SCI-H",
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
    title: "Junior Cycle Higher English",
    cycle: "Junior Cycle",
    category: "Languages",
    levels: ["Higher"],
    description: "Creative writing, drama, film studies, responding to seen and unseen poetry, and structured response writing.",
    isPopular: true
  },
  {
    id: "sub-jc-irish-h",
    code: "JC-GAE-H",
    title: "Junior Cycle Higher Irish",
    cycle: "Junior Cycle",
    category: "Languages",
    levels: ["Higher"],
    description: "Grammar fundamentals, listening comprehension (Cluastuiscint), reading comprehension, and oral conversation confidence."
  },
  {
    id: "sub-jc-business-h",
    code: "JC-BUS-H",
    title: "Junior Cycle Business Studies",
    cycle: "Junior Cycle",
    category: "Business & Humanities",
    levels: ["Higher"],
    description: "Personal finance, enterprise, consumer rights, economics, and CBA 1 & 2 presentation prep."
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: "teach-caitriona",
    fullName: "Caitriona Hayes",
    role: "Centre Director & Senior Languages Lead",
    qualifications: "B.A., H.Dip. Ed., State Examinations Commission Examiner",
    bio: "Over 25 years teaching and examining Leaving Certificate French and Spanish. Caitriona coordinates Solomon Grinds and has helped thousands of West Dublin and North Kildare students achieve top oral and written results through encouraging, small-group instruction.",
    isExaminer: true,
    yearsExperience: 25,
    subjects: ["LC French", "LC Spanish", "Language Oral Immersion"],
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "teach-ebrennan",
    fullName: "Mr. E. Brennan",
    role: "Senior Mathematics Lead",
    qualifications: "B.Sc. (Hons) Mathematics, M.Sc., SEC Senior Examiner",
    bio: "Senior SEC examiner with 18 years experience teaching Leaving Cert Higher Mathematics. Renowned for breaking down calculus, probability, and trigonometry into clear, intuitive step-by-step algorithms that demystify the marking scheme.",
    isExaminer: true,
    yearsExperience: 18,
    subjects: ["LC Higher Maths", "5th Year Higher Maths", "JC Higher Maths"],
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "teach-smurphy",
    fullName: "Ms. S. Murphy",
    role: "Biology & Chemistry Specialist",
    qualifications: "B.Sc. Biochemistry (UCD), PME Science, SEC Examiner",
    bio: "Active state examiner specializing in Leaving Cert Biology and Chemistry. Focuses intensely on experiment questions, marking definitions, and exam timing techniques to turn H3 students into consistent H1 scorers.",
    isExaminer: true,
    yearsExperience: 14,
    subjects: ["LC Higher Biology", "LC Higher Chemistry", "JC Science"],
    avatarUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "teach-podonnell",
    fullName: "Mr. P. O'Donnell",
    role: "Irish (Gaeilge) & Oral Preparation Lead",
    qualifications: "M.A. Nua-Ghaeilge, SEC Oral & Written Examiner",
    bio: "Official SEC Leaving Certificate Oral Examiner. Creator of the Solomon Oral Success Blueprint, focusing on natural conversational fluency, idiom mastery, and Sraithpictiúir confidence for the 40% oral examination.",
    isExaminer: true,
    yearsExperience: 16,
    subjects: ["LC Higher Irish", "Oral Exam Intensive", "JC Higher Irish"],
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "teach-kkelly",
    fullName: "Ms. K. Kelly",
    role: "English & Comparative Literature Specialist",
    qualifications: "B.A. English & History (TCD), H.Dip., SEC Examiner",
    bio: "Past state examiner known for dynamic poetry and comparative essay frameworks. Teaches students how to construct distinctive personal voices and achieve the highest criteria on Paper 1 composition and Paper 2 single text.",
    isExaminer: true,
    yearsExperience: 15,
    subjects: ["LC Higher English", "JC Higher English", "LC Business"],
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
  }
];

export const TIMETABLE_SLOTS: TimetableSlot[] = [
  // Wednesday Slots
  {
    id: "slot-wed-1",
    subjectId: "sub-5th-maths-h",
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
    subjectId: "sub-jc-science-h",
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

export const PRICING_TIERS: PricingTier[] = [
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Claire O'Mahony",
    role: "Parent",
    location: "Lucan",
    cycle: "Leaving Certificate",
    subjects: ["Higher Maths", "Higher Chemistry", "Higher Irish"],
    rating: 5,
    quote: "The small group setting made a night-and-day difference for our son. In school, he felt intimidated to ask questions in a room of 30. At Solomon Grinds, Mr. Brennan and Ms. Murphy gave him individual attention each week. Best of all, we avoided spending two exhausting hours every Saturday driving into Leeson Street!",
    achievement: "Son jumped from H4 to H1 in Maths, now studying Engineering in Trinity College Dublin (577 Points)."
  },
  {
    id: "test-2",
    name: "Darragh Whelan",
    role: "Student",
    location: "Celbridge",
    cycle: "Leaving Certificate",
    subjects: ["Higher Irish", "Higher French"],
    rating: 5,
    quote: "Caitriona Hayes was unbelievable for the French and Irish orals. Because she has examined for years, she knew exactly which conversational topics examiners focus on. I walked into my oral feeling 100% prepared.",
    achievement: "Scored 94% in LC Irish Oral and secured first CAO choice at UCD."
  },
  {
    id: "test-3",
    name: "Mary Fitzpatrick",
    role: "Parent",
    location: "Leixlip",
    cycle: "Junior Cycle & 5th Year",
    subjects: ["Junior Cycle Maths", "Junior Cycle Science"],
    rating: 5,
    quote: "The pay-as-you-go flexibility gives great peace of mind. We didn't have to lock into huge upfront fees. Caitriona runs the centre with such care and warmth, and the teachers genuinely care about the students.",
    achievement: "Daughter achieved Higher Merits and Distinctions across all STEM subjects."
  },
  {
    id: "test-4",
    name: "Aoife Kelly",
    role: "Student",
    location: "Palmerstown",
    cycle: "Leaving Certificate",
    subjects: ["Higher Biology", "Higher English"],
    rating: 5,
    quote: "Ms. Murphy and Ms. Kelly completely demystified the marking schemes for me. I learned how examiners award marks for specific definitions and essay structures rather than writing pages of waffle. It took so much stress out of 6th year.",
    achievement: "Achieved H1 in Biology and H1 in English, 601 CAO Points (Biomedical Science UCD)."
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Academic",
    question: "What makes the Solomon Grinds teaching staff different?",
    answer: "Every single teacher on our panel is hand-picked, highly experienced, and either a past or present State Examinations Commission (SEC) examiner. They don't just teach the syllabus—they teach the marking scheme secrets, timing strategies, and how to maximize partial credit."
  },
  {
    category: "Academic",
    question: "What are your class sizes?",
    answer: "Unlike city-centre grinds schools that cram 50 to 100 students into lecture halls, Solomon Grinds strictly limits classes to small interactive groups (typically 6 to 10 students). This guarantees that your teacher knows your name, checks your individual homework, and answers your specific questions."
  },
  {
    category: "Pricing",
    question: "How does the pay-as-you-go fee system work?",
    answer: "Our standard tuition is €20.00 per 1-hour class, payable weekly. We also offer discounted multi-subject packages: 2 subjects for €38/week, and 3 subjects for €55/week (saving €150 over the school year). No rigid semester lock-in contracts are required."
  },
  {
    category: "Location",
    question: "Where are classes held and is there parking?",
    answer: "Classes take place at Scoil Áine Naofa on Newcastle Road, Lucan, K78 PF65 (directly opposite SuperValu Lucan, just off the N4). There is ample, safe, free on-site parking for easy drop-off and collection. Dublin Bus routes C1, C2, C4, L51, L52, and L53 stop right nearby."
  },
  {
    category: "Enrolment",
    question: "Can I try a trial session before committing?",
    answer: "Yes! Students are welcome to attend an initial trial class in their chosen subject to experience the teaching style, class atmosphere, and receive their revision notes before deciding to continue."
  },
  {
    category: "Academic",
    question: "Do you offer online or hybrid classes?",
    answer: "Yes, all classroom slots at Scoil Áine Naofa feature high-definition hybrid access for students who are unwell or unable to travel to Lucan on a particular week."
  }
];

export const COMMUTE_DATA = [
  { location: "Lucan Village / Esker", time: "3 - 5 mins", route: "Direct via Newcastle Road (Opp. SuperValu)" },
  { location: "Celbridge", time: "10 mins", route: "Short 8km drive via R405 or N4 Lucan bypass" },
  { location: "Leixlip", time: "8 mins", route: "Direct via R148 Salmon Leap bridge" },
  { location: "Palmerstown & Clondalkin", time: "7 - 10 mins", route: "Direct via N4 or Dublin Bus C1 / C2" },
  { location: "Maynooth", time: "15 mins", route: "Served directly by Dublin Bus C4" },
];
