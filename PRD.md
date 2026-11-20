# Product Requirements Document (PRD)
## Project: Solomon Grinds — Modern Web Platform & Student Portal

* **Version:** 2.0.0
* **Date:** November 20, 2026
* **Status:** Approved for Implementation
* **Reference URL:** [https://solomongrinds.ie/](https://solomongrinds.ie/)
* **Repository:** [https://github.com/ITWala2025/solomon](https://github.com/ITWala2025/solomon)
* **Architecture:** Enterprise Multi-Page React Application with Floating Pill Header & Academic Crimson Palette
* **Target Audience:** Secondary School Students (Leaving Certificate & Junior Cycle), Parents & Guardians across West Dublin (Lucan, Palmerstown, Clondalkin) and North Kildare (Celbridge, Leixlip, Maynooth), and Administrative Staff.

---

## 1. Executive Summary & Website Audit

### 1.1 Background & Context
For over 25 years, **Solomon Grinds** has been an educational pillar in Lucan and the surrounding West Dublin / North Kildare regions. Operating primarily from Scoil Áine Naofa (opposite SuperValu on Newcastle Road, Lucan, just off the N4), Solomon Grinds provides specialized, exam-focused tuition for both the **Leaving Certificate** (5th & 6th Year) and **Junior Cycle** (1st to 3rd Year).

### 1.2 Current Website Audit (`solomongrinds.ie`)
An analysis of the existing website reveals high-quality educational value hidden beneath an outdated digital presence:

| Dimension | Current State (`solomongrinds.ie`) | Impact / Friction | Target Future State |
| :--- | :--- | :--- | :--- |
| **Visual Design** | Legacy 2000s plain red aesthetic, dense text, low contrast, no cohesive modern brand identity. | Lacks academic prestige and credibility for modern discerning parents. | Enterprise Academic Crimson/Claret aesthetic ("Heritage Academic Prestige meets Modern Suburban Warmth"). |
| **Navigation & Architecture** | Single, dense, unorganized text blocks with poor mobile layout. | Parents cannot bookmark or share specific subjects or fees. | **Dedicated Multi-Page Architecture** with a **Modern Floating Pill Header**. |
| **Mobile Experience** | Desktop-centric layouts; horizontal scrolling on timetable tables; difficult to touch targets. | Over 70% of parent/student traffic is mobile; high bounce rate. | Mobile-first responsive UI with floating pill navigation and finger-friendly cards. |
| **Course & Timetable Discovery** | Static, dense text blocks listing Wednesday and Saturday slots without filtering. | Frustrating search experience; parents cannot easily see conflicts or available slots. | Dedicated `/timetable` page with interactive faceted filtering by Cycle, Level, Subject, and Day. |
| **Pricing Transparency** | Pay-as-you-go rates (€20/class) and multi-subject discounts are buried in text. | Confusion regarding bundles and Easter Revision package costs. | Dedicated `/fees` page with dynamic interactive bundle and yearly savings calculator. |
| **Enrolment & Conversion** | Relies entirely on manual calls (`01 6284171`) or email (`caitrionahayes@yahoo.ie`). | Abandoned leads outside office hours; administrative burden on Caitriona Hayes. | Multi-step interactive booking wizard with WhatsApp direct routing and mock DB sync. |
| **Social Proof & Results** | Sparse testimonials and static text; no structured showcase of student grade increases. | Fails to communicate 25 years of proven results and high H1/H2 rates. | Results & Testimonials Hall of Fame with verified parent/student reviews. |
| **Location & Convenience** | Text-only address ("Newcastle Road, Lucan"); bus routes mentioned as plain text. | Misses the key selling point: avoiding tiring, expensive Dublin city-centre commutes. | Dedicated `/location` page with interactive Google Map and Dublin Bus guide (C1, C2, C4, L51, L52, L53). |

---

## 2. Dedicated Multi-Page Routing Architecture

The platform provides dedicated, indexable, bookmarkable pages:

* **`/` (Home Page):** High-converting overview featuring hero value propositions, trust badges, quick class finder, bundle teaser, examiner spotlight, and testimonials.
* **`/our-difference` (Our Difference):** In-depth head-to-head comparison table against 100-student Dublin city centre lecture halls, 4 core pillars, and student grade outcomes.
* **`/timetable` (Timetable & Subjects):** Interactive faceted timetable explorer, detailed syllabus descriptions, teacher examiner badges, and direct slot booking.
* **`/fees` (Fees & Pricing Calculator):** Interactive multi-subject discount calculator, sibling concession toggle, term savings table, and comparison against semester lock-ins.
* **`/faculty` (Examiner Teaching Staff):** Profiles of Caitriona Hayes and senior educators, SEC examiner credentials, years of experience, and "Why Learning From State Examiners Matters".
* **`/specialized` (Easter Revision & Oral Immersion):** Intensive Easter Revision Course 2027 packages (Book 3, Get 4th Free) and Leaving Cert 40% Oral Examination Immersion (Irish, French, Spanish, German).
* **`/location` (Location & Transport Guide):** Scoil Áine Naofa (opposite SuperValu Lucan) transit guide, Google Map preview, Dublin Bus routes, and commute times from surrounding towns.
* **`/contact` (Contact & Enrolment):** Direct phone (`01 6284171`), WhatsApp (`087 2745234`), email, 3-step booking wizard, and interactive FAQ accordion.

---

## 3. Brand Positioning & The "Solomon Grinds Difference"

1. **Small Groups & Individual Attention:** Strictly capped classes (6–10 students) where every student can ask questions and have their homework reviewed.
2. **Hand-Picked, Examiner-Level Faculty:** All teachers are hand-picked, highly experienced, and active or past State Examinations Commission (SEC) examiners.
3. **Safe, Convenient Suburban Location:** Scoil Áine Naofa, Newcastle Road, Lucan (opposite SuperValu), eliminating the 90+ minute round-trip commute into Dublin city centre.
4. **Flexible Pay-As-You-Go & Value Packages:** Standard fee of €20 per class with flexible pay-as-you-go terms, alongside attractive multi-subject bundles (2 subjects = €38/wk, 3 subjects = €55/wk).
5. **Modern Hybrid Delivery:** In-person classroom grinds supplemented by online access for students unable to attend in person.

---

## 4. Technical Architecture & Mock Data Store

The application uses a unified service layer (`IGrindsService`) backed by `MockGrindsService`:
* 20+ realistic Leaving Certificate and Junior Cycle subjects.
* Complete Wednesday evening and Saturday schedules.
* Examiner faculty credentials and biographies.
* Real parent and student testimonials with university CAO placements.
* Direct readiness for swapping to Supabase PostgreSQL RPCs in the future.
