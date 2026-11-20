# Design System & UI/UX Specification (Design.md)
## Project: Solomon Grinds — Modern Digital Experience

* **Version:** 1.0.0
* **Target:** Responsive Web (Desktop, Tablet, Mobile)
* **Design Vision:** "Academic Excellence meets Warm, Accessible Mentorship"
* **Primary Reference:** [https://solomongrinds.ie/](https://solomongrinds.ie/)
* **Operating Location:** Scoil Áine Naofa, Newcastle Road, Lucan, Co. Dublin

---

## 1. Visual Audit & Creative Direction

### 1.1 The Problem with the Current Site (`solomongrinds.ie`)
* **Visual Hierarchy:** Flat text blocks with minimal typographic scale; crucial selling points (e.g., "All teachers are past or present examiners", "25 years of excellence", "Small groups") are lost inside long paragraphs.
* **Color Psychology:** The legacy site relies on uninspired primary colors with harsh contrast or washed-out backgrounds, failing to convey the premium, academic caliber of the institute.
* **Timetable Usability:** Class schedules are organized as dense, hardcoded HTML tables that break on mobile screens, requiring tedious horizontal scrolling and zooming.
* **Call-to-Action Clarity:** No clear visual prominence for conversion pathways; contact information is passive rather than action-oriented.

### 1.2 Creative Direction: Academic Prestige & Suburban Convenience
The new Solomon Grinds design system bridges the gap between **rigorous academic credibility** (reflecting state examiners, university pathways, and high-point outcomes) and **friendly, suburban community warmth** (safe Lucan location, caring educators, personalized attention).

```
   [ Academic Prestige ]                 [ Warm Community ]
     • Deep Midnight Navy                  • Emerald Growth Accents
     • Structured Geometrics               • Soft Rounded Cards
     • Crisp Editorial Typography          • Friendly Examiner Avatars
     • High-trust Examiner Badges          • WhatsApp Quick Connect
```

---

## 2. Design Tokens & Foundations

### 2.1 Color Palette

```
  Primary Dark          Academic Navy         Emerald Success        Scholar Amber
   #0A192F               #0F2744               #0D9488                #D97706
  [Background / Navy]   [Brand Primary]       [Growth / Savings]     [Examiner Badges]
```

#### Core Brand Tokens

| Token Name | Hex Code | Tailwind Class | Semantic Usage |
| :--- | :--- | :--- | :--- |
| `navy-950` | `#07111E` | `bg-slate-950` | Dark hero sections, footer background |
| `navy-900` | `#0A192F` | `bg-slate-900` | Primary brand background, deep cards |
| `navy-800` | `#0F2744` | `bg-blue-950` | Primary brand color, dark UI surfaces |
| `navy-700` | `#1A365D` | `bg-blue-900` | Interactive card headers, active navigation tabs |
| `emerald-600` | `#0D9488` | `bg-teal-600` | Primary CTA, bundle discount tags, confirmation states |
| `emerald-500` | `#10B981` | `bg-emerald-500`| "Seats Available" pills, success checkmarks |
| `amber-500` | `#F59E0B` | `bg-amber-500` | Examiner badges, star reviews, "Limited Spaces" alert |
| `amber-600` | `#D97706` | `text-amber-600`| Warning callouts, high-priority deadlines |
| `indigo-600` | `#4F46E5` | `bg-indigo-600` | Higher Level badge, Leaving Cert tag |
| `sky-500` | `#0EA5E9` | `bg-sky-500` | Junior Cycle tag, ordinary level badge |

#### Neutral Surface & Text Tokens

| Token Name | Hex Code | Semantic Usage |
| :--- | :--- | :--- |
| `surface-canvas` | `#FFFFFF` | Main page background, clean white cards |
| `surface-subtle` | `#F8FAFC` | Section alternating backgrounds, filter bar canvas |
| `surface-muted` | `#F1F5F9` | Form input backgrounds, timetable row hover |
| `border-light` | `#E2E8F0` | Default card borders, dividers |
| `border-active` | `#CBD5E1` | Input focus rings, selected card borders |
| `text-primary` | `#0F172A` | High-contrast display headings, main body copy |
| `text-secondary`| `#475569` | Sub-headlines, metadata, timetable time slots |
| `text-muted` | `#94A3B8` | Placeholders, inactive filter pills, breadcrumbs |

---

### 2.2 Typography Hierarchy

* **Primary Font (Headings & UI Controls):** `Plus Jakarta Sans` or `Lexend` — Chosen for modern, authoritative geometric clarity with open letterforms that remain highly readable at any scale.
* **Secondary Font (Body Copy & Longform):** `Inter` — The industry benchmark for digital screen reading clarity and numerical precision.
* **Tabular Figures & Timetable Numbers:** `JetBrains Mono` or `Inter Tabular Num` (`font-mono`) — Guarantees fixed-width alignment for class times (`17:30 - 18:30`), fees (`€20.00`), and bus route numbers.

```
Hero Display        60px / 1.1 line-height   Bold (700)      Leading Title
Heading 1 (H1)      40px / 1.2 line-height   Bold (700)      Section Titles
Heading 2 (H2)      28px / 1.3 line-height   SemiBold (600)  Card & Block Headers
Heading 3 (H3)      20px / 1.4 line-height   SemiBold (600)  Subject & Teacher Names
Body Large          18px / 1.6 line-height   Regular (400)   Hero Subtitles, Intro copy
Body Standard       15px / 1.6 line-height   Regular (400)   Descriptions, Reviews
UI Caption / Badge  12px / 1.4 line-height   Medium (500)    Level tags, Timetable slots
```

---

### 2.3 Spacing, Radii & Shadows

* **Base Unit:** 4px grid. Standard spacing: `8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`.
* **Border Radii:**
  * Badges & Pills: `rounded-full` (9999px)
  * Inputs & Buttons: `rounded-xl` (12px)
  * Feature Cards: `rounded-2xl` (16px)
  * Modals & Container Surfaces: `rounded-3xl` (24px)
* **Shadows:**
  * Card Resting: `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05);`
  * Card Hover: `box-shadow: 0 12px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03);`
  * Modal Overlay: `box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25);`

---

## 3. Component Architecture & UI Elements

### 3.1 Header & Sticky Navigation
```
+---------------------------------------------------------------------------------------------------------+
| [NOTICE BANNER: Easter Revision 2027 Schedule Released • Limited Group Sizes • Reserve Early]           |
+---------------------------------------------------------------------------------------------------------+
| [LOGO: Solomon Grinds]   Courses v   Timetables   Fees & Calculator   Why Solomon   Location   [Contact]|
|                          (Leaving Cert, Junior Cycle, Easter, Orals)      [📞 01 6284171] [Enrol Now]   |
+---------------------------------------------------------------------------------------------------------+
```
* **Notice Bar:** Emerald gradient banner (`bg-emerald-700 text-white`) highlighting active term registration or upcoming holiday revision courses.
* **Sticky Navbar:** Translucent frosted glass effect (`backdrop-blur-md bg-white/95 border-b border-slate-200/80`).
* **Direct Actions:**
  * Quick dial icon for phone (`01 6284171`).
  * Instant WhatsApp button with signature green badge.
  * Primary Pill CTA: *"Enrol / Free Trial"* (`bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm`).

---

### 3.2 Hero Section Anatomy

```
+---------------------------------------------------------------------------------------------------------+
|  [BADGE: ⭐️ 25 Years of Proven Exam Excellence in West Dublin]                                           |
|                                                                                                         |
|  Master Your State Exams Without                                                                        |
|  The City Centre Commute.                                                                               |
|                                                                                                         |
|  Leaving Cert & Junior Cycle grinds in Lucan. Small groups, individual attention,                       |
|  and hand-picked teachers who are all past or present State Examiners.                                  |
|                                                                                                         |
|  [ ⚡ Explore Timetable ]   [ 💬 Enrol / WhatsApp Caitriona ]                                            |
|                                                                                                         |
|  +-----------------------+ +-----------------------+ +-----------------------+ +---------------------+  |
|  |  👥 Small Groups      | |  🎓 100% Examiners    | |  📍 Safe Lucan Base   | |  💶 €20 Pay-As-You-Go|  |
|  |  Max 8-12 per class   | |  Know marking schemes | |  Scoil Áine Naofa     | |  No rigid lock-in   |  |
|  +-----------------------+ +-----------------------+ +-----------------------+ +---------------------+  |
+---------------------------------------------------------------------------------------------------------+
```

---

### 3.3 "The Solomon Grinds Difference" Comparison Matrix

A high-converting visual comparison component clearly differentiating Solomon Grinds from large Dublin city-centre grind institutes:

```
+----------------------------------+----------------------------------+
| The City Centre Grind Factory    | The Solomon Grinds Difference    |
+----------------------------------+----------------------------------+
| ❌ 50 to 100 students per hall   | ✅ Strictly capped small groups  |
| ❌ Impossible to ask questions   | ✅ 1-on-1 personal attention     |
| ❌ 90+ min exhausting bus commute| ✅ Convenient Lucan location     |
| ❌ Heavy upfront term lock-ins   | ✅ Flexible €20 pay-as-you-go    |
| ❌ One-size-fits-all lectures    | ✅ Tailored to student weaknesses|
+----------------------------------+----------------------------------+
```

---

### 3.4 Interactive Timetable Explorer

#### Filtering Toolbar
* **Cycle Toggle:** `[ All Cycles ]` | `[ Leaving Certificate (5th & 6th) ]` | `[ Junior Cycle (1st - 3rd) ]`
* **Level Pill:** `[ All Levels ]` | `[ Higher Level ]` | `[ Ordinary Level ]`
* **Day Selector:** `[ Both Days ]` | `[ Wednesday Evenings ]` | `[ Saturday Daytime ]`
* **Subject Search:** Instant search input with autocomplete (`"Maths"`, `"Biology"`, `"Irish Oral"`, etc.)

#### Timetable Slot Card Anatomy
```
+--------------------------------------------------------------------+
| [LEAVING CERT] [HIGHER LEVEL]               [🟢 SPACES AVAILABLE]  |
|                                                                    |
| LC Higher Maths (Calculus & Functions Focus)                       |
| Teacher: Mr. E. Brennan (Senior SEC Examiner • 18 yrs exp)         |
|                                                                    |
| 🕒 Wednesdays: 5:30 PM - 6:30 PM     📍 Room 4, Scoil Áine Naofa   |
| 💶 €20.00 / class (Bundle options)   🌐 Hybrid Attendance Avail.   |
|                                                                    |
| [ Add to Study Plan ]                        [ Enrol in This Slot ]|
+--------------------------------------------------------------------+
```

---

### 3.5 Dynamic Pricing & Bundle Calculator

A gamified, interactive component that encourages parents to enroll in multiple subjects:

```
+--------------------------------------------------------------------+
| 🧮 Interactive Subject Bundle Calculator                           |
| How many weekly subjects would you like to take?                   |
|                                                                    |
|       [ - ]    3 Subjects Selected    [ + ]                         |
|                                                                    |
|  • Subject 1: LC Higher Maths        €20.00 / class                |
|  • Subject 2: LC Higher Irish        €20.00 / class                |
|  • Subject 3: LC Higher Chemistry    €15.00 / class (Bundle Deal!) |
|                                                                    |
|  ----------------------------------------------------------------- |
|  Standard Single Rate:        €60.00 / week                        |
|  Your Solomon Bundle Price:   €55.00 / week                        |
|  🎉 Total Family Savings:     €150.00 saved over a 30-week term!    |
|                                                                    |
|  [ ⚡ Lock In This Bundle & Reserve Seats ]                        |
+--------------------------------------------------------------------+
```

---

### 3.6 Faculty & Examiner Profiles

Highlighting the unique advantage that **all teachers are past or present examiners**:

```
+--------------------------------------------------------------------+
| [Photo Avatar]  Caitriona Hayes                                    |
|                 Director & Senior Modern Languages Lead            |
|                 State Examinations Commission Examiner (20+ Years) |
|                                                                    |
| "We focus on exam technique, marking scheme insights, and building |
| student self-confidence in small, encouraging group sessions."     |
|                                                                    |
| Subjects: Leaving Cert French • LC Spanish • Oral Preparation      |
+--------------------------------------------------------------------+
```

---

### 3.7 Commuter & Location Section: "Avoid the City Centre"

A dedicated visual section emphasizing Scoil Áine Naofa's convenient location:

```
+-----------------------------------------------------------------------------+
| 📍 Safe, Convenient Lucan Location (Avoid 2+ Hours in City Centre Traffic)   |
|                                                                             |
| Scoil Áine Naofa, Newcastle Road, Lucan, K78 PF65 (Opposite SuperValu)       |
|                                                                             |
| [ INTERACTIVE GOOGLE MAP ]        | Transport & Commute Times:              |
| Showing Lucan N4 interchange      | 🚗 Lucan Village: 3 mins               |
| Free on-site parking for drop-off | 🚗 Celbridge: 10 mins (via R405)       |
| Safe, well-lit school environment | 🚗 Leixlip: 8 mins (via R148)          |
|                                   | 🚗 Palmerstown / Liffey Valley: 7 mins  |
|                                   | 🚌 Dublin Bus: C1, C2, C4, L51, L52, L53|
+-----------------------------------------------------------------------------+
```

---

### 3.8 Multi-Step Booking & Enrolment Modal (Wizard)

* **Step 1: Student & Parent Profile**
  * Student Name, Current School, Year of Study (e.g., 6th Year LC).
  * Parent Name, Mobile/WhatsApp Number, Email Address.
* **Step 2: Subject & Schedule Selection**
  * Multi-select checkboxes generated from active timetable slots.
  * Live clash-detector: Alerts parent if two selected classes occur at the same time.
* **Step 3: Confirmation & Dispatch**
  * Summary of selections, venue details, and bundle pricing.
  * Direct one-click trigger: **"Send to Caitriona on WhatsApp"** (auto-opens WhatsApp with encoded inquiry text).
  * Fallback button: **"Submit Online Enrolment"** (stores in mock DB and triggers local success modal).

---

## 4. Responsive Breakpoint Specifications

| Breakpoint | Range (Width) | Layout Strategy |
| :--- | :--- | :--- |
| **Mobile (`sm`)** | `360px – 639px` | Single-column cards; sticky bottom bar with WhatsApp & "Book" buttons; filter drawer accessible via floating button; full-width timetable cards. |
| **Tablet (`md`)** | `640px – 1023px` | 2-column grid for subjects and faculty; horizontal filter chips; touch-friendly 48px tap targets. |
| **Desktop (`lg`/`xl`)** | `1024px – 1440px` | 3-column timetable card grid or weekly 2-dimensional calendar matrix; persistent sidebar calculator; multi-pane modal dialogs. |

---

## 5. Micro-interactions & Motion Design (Framer Motion)

* **Card Hover States:** Gentle scale `scale: 1.015`, subtle border glow in `emerald-500/20`, and elevation lift (`-4px` Y-axis transition over `200ms ease-out`).
* **Filter Switching:** Seamless layout animation (`layoutId` in Framer Motion) when toggling between Leaving Cert and Junior Cycle subjects.
* **Bundle Calculator Slider:** Dynamic numerical counters ticking up/down with animated savings celebration ribbons.
* **Modal Dialog:** Fade backdrop (`opacity: 0 -> 1`) with smooth elastic scale-in (`scale: 0.95 -> 1.0`) over `150ms`.

---

## 6. Accessibility & Compliance (WCAG 2.1 AA)

* **Color Contrast:** All text tokens meet or exceed `4.5:1` ratio against light backgrounds (`#FFFFFF`, `#F8FAFC`) and dark navy containers (`#0A192F`).
* **Keyboard Navigation:** Logical tab sequences across all filter buttons, subject cards, and modal inputs. Visible `ring-2 ring-emerald-500 ring-offset-2` outline on keyboard focus.
* **Screen Reader Optimization:** ARIA live regions for the timetable filter results count (`aria-live="polite"`); descriptive button labels (e.g., `aria-label="Enrol in Leaving Cert Higher Maths on Wednesday at 5:30 PM"`).
