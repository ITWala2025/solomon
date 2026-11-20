# Design System & UI/UX Specification (Design.md)
## Project: Solomon Grinds — Modern Digital Experience

* **Version:** 2.0.0
* **Target:** Responsive Multi-Page Web (Desktop, Tablet, Mobile)
* **Brand Direction:** "Academic Prestige & Heritage Claret meets Modern Suburban Warmth"
* **Theme Alignment:** Refined Academic Crimson / Claret (aligning closely with the historic reddish branding of `solomongrinds.ie`, elevated to modern enterprise standards)
* **Header Architecture:** Modern Floating Pill Design
* **Primary Reference:** [https://solomongrinds.ie/](https://solomongrinds.ie/)
* **Base Location:** Scoil Áine Naofa, Newcastle Road, Lucan, Co. Dublin

---

## 1. Enterprise Visual Audit & Creative Direction

### 1.1 Aesthetic Elevation: Reddish Heritage to Academic Crimson
The legacy website (`solomongrinds.ie`) featured primary red tones that conveyed urgency but lacked the understated academic prestige of established Irish educational institutions. The new design system introduces an **Enterprise Academic Crimson & Claret** palette:

* **Primary Claret (`#7E1529` & `#520D1A`):** Evokes centuries of academic tradition (similar to Trinity College Dublin and Oxford academic heraldry), signaling authority, experience, and examiner credibility.
* **Scholar Gold / Amber (`#F59E0B` & `#FBBF24`):** Accents star ratings, examiner badges, and academic achievement accolades.
* **Emerald Success (`#10B981` & `#059669`):** Reserved for conversion triggers, savings calculations, and live seat availability pills.
* **Platinum Surfaces (`#F8FAFC`, `#FFFFFF`):** High-contrast, clean canvas providing effortless readability.

```
  Academic Crimson       Heritage Burgundy      Scholar Amber         Success Emerald
      #7E1529                #520D1A               #F59E0B               #10B981
  [Primary Brand]        [Hero Backdrops]      [Examiner Badges]     [Bundle Savings]
```

---

## 2. Floating Pill Header Specification

```
+---------------------------------------------------------------------------------------------------------+
|                                                                                                         |
|       +-----------------------------------------------------------------------------------------+       |
|       | [🎓 SOLOMON GRINDS]   Home   Our Difference   Timetable   Fees   Examiners   [Enrol Now] |       |
|       +-----------------------------------------------------------------------------------------+       |
|                                                                                                         |
+---------------------------------------------------------------------------------------------------------+
```

### 2.1 Anatomy of the Floating Pill Header
* **Positioning:** Fixed at `top-3`, horizontally centered with `max-w-6xl w-full mx-auto px-4 z-50 pointer-events-none`.
* **Surface Container:** `pointer-events-auto bg-white/95 backdrop-blur-md rounded-full shadow-pill border border-slate-200/90 py-2 px-5 flex items-center justify-between`.
* **Brand Pill:** Circular crest with gold cap (`from-crimson-800 to-crimson-900`) with bold crimson typographic logo.
* **Nav Track:** Recessed rounded pill track (`bg-slate-100/80 p-1 rounded-full`) with floating route pills.
* **Active State:** Solid crimson badge (`bg-crimson-800 text-white font-bold shadow-sm`).
* **Conversion Actions:** Quick dial pill, WhatsApp badge pill, and primary gradient pill button (`bg-gradient-to-r from-crimson-700 to-crimson-900 text-white font-bold rounded-full px-4 py-2`).

---

## 3. Dedicated Multi-Page Information Architecture

Rather than a single endless scroll page, the platform provides dedicated pages for every main menu item:

| Route | Page Title | Core Purpose & Modules |
| :--- | :--- | :--- |
| `/` | **Home Page** | Brand hook, value pillars, preview of timetables, bundle calculator, examiner faculty teaser, and testimonials. |
| `/our-difference` | **Our Difference** | Detailed head-to-head comparison grid against 100-student city centre grind schools, 4 core pillars, and verified student testimonials. |
| `/timetable` | **Timetable & Subjects** | Interactive faceted search (Cycle, Level, Day, Teacher), class card grid, syllabus outlines, and room allocations at Scoil Áine Naofa. |
| `/fees` | **Fees & Bundles** | Interactive bundle discount calculator, pay-as-you-go breakdown, sibling concession policy, and term savings tables. |
| `/faculty` | **Examiner Faculty** | Biographies, examiner credentials, years of experience, and "Why Learning From State Examiners Matters" breakdown. |
| `/specialized` | **Easter & Oral Prep** | Intensive Easter Revision 2027 courses (Book 3, Get 4th Free) and Leaving Cert 40% Oral Examination Immersion. |
| `/location` | **Location & Transit** | Scoil Áine Naofa interactive Google Map, commute times from Celbridge/Leixlip/Palmerstown, Dublin Bus C-spine guide, and free parking directions. |
| `/contact` | **Contact & Enrolment** | Telephone (`01 6284171`), WhatsApp (`087 2745234`), email, 3-step enrolment wizard, and full FAQ accordion. |

---

## 4. Enterprise Design Tokens

### 4.1 Color Tokens
```css
--color-crimson-950: #34060F;
--color-crimson-900: #520D1A;
--color-crimson-850: #681121;
--color-crimson-800: #7E1529; /* Primary Brand */
--color-crimson-700: #9E1C36;
--color-crimson-100: #FCE7EB;
--color-crimson-50:  #FDF2F4;

--color-amber-500:   #F59E0B; /* Examiner Gold */
--color-amber-400:   #FBBF24;
--color-emerald-600: #059669; /* Success & Savings */
--color-emerald-500: #10B981;
```

### 4.2 Typography & Radii
* **Typography:** Display & Headers: `Plus Jakarta Sans` (font-extrabold / bold); Body: `Inter` (regular / medium); Monospace figures: `JetBrains Mono` (`€20.00`, `17:30 – 18:30`).
* **Radii:** Floating Header & Badges: `rounded-full`; Feature & Class Cards: `rounded-3xl` (24px); Inputs & Modals: `rounded-2xl` (16px).
* **Elevation:** Floating pill header: `0 10px 30px -5px rgba(82, 13, 26, 0.12)`; Card hover: `0 12px 28px -4px rgba(15, 23, 42, 0.08)`.
