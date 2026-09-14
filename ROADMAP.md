# 🗺️ Portfolio Redesign & Completion Roadmap

This document outlines the gap analysis, component architecture, and step-by-step roadmap to transition your current codebase to match your hand-drawn wireframe.

---

## 📸 Wireframe & Target Architecture (Bento-Grid)

```
+-----------------------------------------------------------------------------+
|                                    APP                                      |
+------------------------------------+----------------------------------------+
|           PROFILE CARD             |               ABOUT ME                 |
|  [Photo]                           |  [ Home  Projects  Skills  Contact ]   |
|  Siddarth Reddy                    |                                        |
|  Software Developer                |  About Me:                             |
|  [Icons: LeetCode/Git/LinkedIn/Mail|  - Study/Degree (NIT Patna CSE)        |
|  Description (a few lines)         |  - Passion / Problem Solving points    |
|  [Download Resume Button]          |  [ Illustration / Graphic Image ]      |
+------------------------------------+----------------------------------------+
|                               PROJECTS                                      |
|  +-------------------+  +-------------------+  +-------------------+        |
|  | [Thumbnail]       |  | [Thumbnail]       |  | [Thumbnail]       |        |
|  | Project Title     |  | Project Title     |  | Project Title     |        |
|  | [Tech Stack Tags] |  | [Tech Stack Tags] |  | [Tech Stack Tags] |        |
|  | [Live / GitHub]   |  | [Live / GitHub]   |  | [Live / GitHub]   |        |
|  +-------------------+  +-------------------+  +-------------------+        |
+-----------------------------------------------------------------------------+
|                         SKILLS / TECHNOLOGIES                               |
|  Languages | Frontend | Backend | Databases & Tools                         |
|  [Pills / Cards with Icons & Ratings]                                       |
+-----------------------------------------------------------------------------+
|                       ACHIEVEMENTS / EXPERTISE                              |
|  [ 250+ DSA ]      [ 10+ Tech ]      [ 2+ Projects ]      [ 8.9 CGPA ]      |
+-----------------------------------------------------------------------------+
|                           CONTACT / FOOTER                                  |
|  [ Email: ... ]        [ LinkedIn: ... ]        [ GitHub: ... ]             |
+-----------------------------------------------------------------------------+
```

---

## 🔍 Gap Analysis: Current Codebase vs. Wireframe

| Feature / Section | Current State in Code | Wireframe Target | Changes / Tasks Required |
| :--- | :--- | :--- | :--- |
| **Profile Card (Left Hero)** | [`Sidebar.jsx`](file:///c:/Portfolio/Design/src/Components/Sidebar.jsx) contains avatar, name, role, placeholder text, and resume button | Dedicated Profile card with avatar, name, live social links (LeetCode, GitHub, LinkedIn, Mail), and clean bio | Refactor into `ProfileCard.jsx` or clean up `Sidebar.jsx`; replace placeholder text with live icons and links |
| **About Me Card (Right Hero)** | [`Home.jsx`](file:///c:/Portfolio/Design/src/Components/Home.jsx) has Navbar + Hero text + NIT Patna bio + background image | Top Navbar + About Me bio + focus bullets + side illustration | Adjust layout inside `Home.jsx` / `AboutMe.jsx` so text and illustration sit cleanly together under the Navbar |
| **Navbar** | [`Navbar.jsx`](file:///c:/Portfolio/Design/src/Components/Navbar.jsx) has static text links | Navbar at the top of the About card or sticky on page | Add anchor links (`#projects`, `#skills`, `#achievements`, `#contact`) and smooth scrolling |
| **Projects Section** | [`ProjectCard.jsx`](file:///c:/Portfolio/Design/src/Components/ProjectCard.jsx) is empty (0 bytes) | Projects container displaying project cards with preview, tech stack, and links | Create `projectsData.js`, build `ProjectCard.jsx`, and create `Projects.jsx` container |
| **Skills / Technologies** | [`Skills.jsx`](file:///c:/Portfolio/Design/src/Components/Skills.jsx) + [`ServiceCard.jsx`](file:///c:/Portfolio/Design/src/Components/ServiceCard.jsx) with star ratings | Categorized skill chips/badges (Languages, Frameworks, Tools) | Refine skill categorization in [`skillsData.js`](file:///c:/Portfolio/Design/src/Data/skillsData.js) and card display |
| **Achievements** | [`Achivements.jsx`](file:///c:/Portfolio/Design/src/Components/Achivements.jsx) + [`achivementsData.js`](file:///c:/Portfolio/Design/src/Data/achivementsData.js) | Stat cards (250+ DSA, 10+ Tech, 2+ Projects, 8.9 CGPA) | Polish styling, fix spelling typos (`Achivements` → `Achievements`), adjust card border glow |
| **Contact Section** | Not created yet | Dedicated Contact card/bar with Email, LinkedIn, etc. | Create `Contact.jsx` / `Footer.jsx` with direct copy-to-clipboard or mailto links |

---

## 📋 Step-by-Step Implementation Roadmap

### Phase 1: Data Models & Static Assets
- [ ] **Create `src/Data/projectsData.js`**:
  - Add project objects with `title`, `description`, `image`, `techStack` (array), `githubUrl`, and `liveUrl`.
- [ ] **Update `src/Data/skillsData.js`**:
  - Organize skills into clear buckets (e.g., *Programming Languages*, *Frontend*, *Backend*, *Tools & Databases*).
- [ ] **Update `src/Data/achivementsData.js`**:
  - Ensure stats match your wireframe: `250+ DSA`, `10+ Tech`, `2+ Projects`, `8.9 CGPA`.

---

### Phase 2: Component Modifications & New Components

#### 1. Profile / Sidebar (`src/Components/Sidebar.jsx` or `ProfileCard.jsx`)
- [ ] Replace `"icons : leetcode,linkdin,mail,gitHub"` placeholder with actual Lucide icons:
  - `Github`, `Linkedin`, `Mail`, `Code2` (or LeetCode SVG icon).
- [ ] Make icons clickable (`<a href="..." target="_blank">`).
- [ ] Remove draft/placeholder text (`"some bull shit"`).
- [ ] Keep the **Download Resume** button styled with hover state.

#### 2. About Me (`src/Components/Home.jsx`)
- [ ] Keep `<Navbar />` at the top right.
- [ ] Structure the text content on the left:
  - Header: `"About Me"`
  - Description: College / degree / passion summary.
  - Bullet points with icons (e.g. `CheckCircle2` or `SendHorizontal`).
- [ ] Place the tech graphic / illustration on the right side of the card.

#### 3. Projects Showcase (`src/Components/ProjectCard.jsx` & `Projects.jsx`)
- [ ] Build **`ProjectCard.jsx`**:
  - Project thumbnail/image.
  - Title & short description.
  - Tech stack tag pills (React, Tailwind, Node, etc.).
  - Action buttons: GitHub repo & Live Demo with `ExternalLink` icon.
- [ ] Build **`Projects.jsx`**:
  - Container with `"PROJECTS"` heading in green accent (`text-green-400`).
  - Grid layout (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`).

#### 4. Skills Section (`src/Components/Skills.jsx`)
- [ ] Group technologies by categories (e.g., Languages, Web Dev, Databases, Core CS).
- [ ] Render skill badges/pills with matching dark/green border theme.

#### 5. Achievements Section (`src/Components/Achivements.jsx`)
- [ ] Adjust the cards into a clean horizontal grid/flex box.
- [ ] Highlight key metrics with larger bold typography and green accent (`text-green-400 text-3xl font-bold`).

#### 6. Contact & Footer (`src/Components/Contact.jsx`)
- [ ] Create a bottom card with:
  - Heading: `"Get In Touch"` / `"Contact"`
  - Interactive badges/links: Email (`mailto:`), LinkedIn profile, GitHub profile.
  - Optional: quick message copy button or contact form.

---

### Phase 3: Assembly in `App.jsx`
- [ ] Import and organize all components into the layout:
  ```jsx
  <div className="min-h-screen bg-black text-white p-4 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto">
    {/* Row 1: Profile + About */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1"><Sidebar /></div>
      <div className="lg:col-span-2"><Home /></div>
    </div>

    {/* Row 2: Projects */}
    <Projects />

    {/* Row 3: Skills */}
    <Skills />

    {/* Row 4: Achievements */}
    <Achievements />

    {/* Row 5: Contact */}
    <Contact />
  </div>
  ```

---

### Phase 4: Styling, Polish & Responsiveness (When You're Ready to Hand Over)
- [ ] **Breakpoints verification**:
  - Mobile (`< 640px`): Single column stacking, full-width cards, compact padding.
  - Tablet (`640px - 1024px`): 2-column grids for projects and metrics.
  - Desktop (`> 1024px`): Bento grid multi-column layout.
- [ ] **Transitions & Hover Effects**:
  - Hover effects on cards (`hover:border-green-400 hover:scale-[1.01] transition-all`).
  - Smooth anchor scrolling (`html { scroll-behavior: smooth; }`).

