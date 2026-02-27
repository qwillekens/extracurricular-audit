import { useState } from "react";

/* ── SVG Icons ── */
const Icons = {
  career: ({ size = 20, color = "#cd6414" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  ),
  major: ({ size = 20, color = "#003964" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  essay: ({ size = 20, color = "#00a89c" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  leadership: ({ size = 20, color = "#5a8c4d" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  check: ({ size = 14, color = "#fff" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  arrow: ({ size = 16, color = "#003964" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  back: ({ size = 14, color = "#6b7280" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  ),
  chevDown: ({ size = 14, color = "#003964" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  chevUp: ({ size = 14, color = "#003964" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  ),
  clock: ({ size = 12, color = "#003964" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  lightbulb: ({ size = 14, color = "#003964" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" /><path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  ),
};

const PATENT_CATEGORIES = {
  career: {
    id: "career", name: "Career-Related",
    patentDef: "Real-world professional exposure aligned to target career",
    Icon: Icons.career, color: "#cd6414",
    bg: "rgba(205,100,20,0.06)", border: "rgba(205,100,20,0.2)", tagBg: "rgba(205,100,20,0.1)",
  },
  major: {
    id: "major", name: "Major-Related",
    patentDef: "Academic depth aligned to intended field of study",
    Icon: Icons.major, color: "#003964",
    bg: "rgba(0,57,100,0.04)", border: "rgba(0,57,100,0.15)", tagBg: "rgba(0,57,100,0.08)",
  },
  essay: {
    id: "essay", name: "Essay-Related",
    patentDef: "Experiences that produce compelling application narratives",
    Icon: Icons.essay, color: "#00a89c",
    bg: "rgba(0,168,156,0.05)", border: "rgba(0,168,156,0.2)", tagBg: "rgba(0,168,156,0.1)",
  },
  leadership: {
    id: "leadership", name: "Leadership & Social Responsibility",
    patentDef: "Leadership, collaboration, social responsibility, and challenge",
    Icon: Icons.leadership, color: "#5a8c4d",
    bg: "rgba(90,140,77,0.05)", border: "rgba(90,140,77,0.2)", tagBg: "rgba(90,140,77,0.1)",
  },
};

const QUESTIONS = [
  {
    id: "age",
    question: "How old is your student?",
    note: "The patent adjusts its roadmap recommendations by grade level and semester.",
    type: "single",
    options: [
      { label: "12-14 (middle school)", value: "12-14" },
      { label: "15-16 (early high school)", value: "15-16" },
      { label: "17-18 (college prep)", value: "17-18" },
      { label: "19-22 (gap year / college)", value: "19-22" },
    ],
  },
  {
    id: "target_field",
    question: "What direction interests them most?",
    note: "The patent matches extracurriculars to target major and career path.",
    type: "single",
    options: [
      { label: "STEM (science, engineering, medicine, tech)", value: "stem" },
      { label: "Social sciences & humanities (politics, psychology, history)", value: "social" },
      { label: "Business, economics & entrepreneurship", value: "business" },
      { label: "Arts, media & creative fields", value: "arts" },
      { label: "Environment, sustainability & conservation", value: "environment" },
      { label: "Still figuring it out", value: "exploring" },
    ],
  },
  {
    id: "current_activities",
    question: "What's currently in their extracurricular profile?",
    note: "The patent scores the student's existing activity portfolio before identifying gaps.",
    type: "multi",
    max: 5,
    options: [
      { label: "School clubs or student government", value: "clubs", cats: ["leadership"] },
      { label: "Varsity or competitive sports", value: "sports", cats: ["leadership"] },
      { label: "Local volunteer work", value: "local_vol", cats: ["leadership"] },
      { label: "Academic competitions (debate, math, science)", value: "academic_comp", cats: ["major"] },
      { label: "Job, internship, or job shadowing", value: "work", cats: ["career"] },
      { label: "International travel or study abroad", value: "travel", cats: ["essay"] },
      { label: "Independent creative projects", value: "creative", cats: ["essay", "major"] },
      { label: "Summer academic program", value: "summer_academic", cats: ["major"] },
      { label: "Service trip abroad", value: "service_trip", cats: ["leadership", "essay"] },
      { label: "Not much yet", value: "none", cats: [] },
    ],
  },
  {
    id: "gap_perception",
    question: "Which category feels most absent from their profile?",
    note: "The patent flags categories where a student falls below the acceptance threshold for their target university.",
    type: "single",
    options: [
      { label: "Hands-on career or professional exposure", value: "career" },
      { label: "Deep academic engagement outside the classroom", value: "major" },
      { label: "A defining experience worth writing about", value: "essay" },
      { label: "Meaningful leadership, service, or cross-cultural work", value: "leadership" },
      { label: "All of the above. The profile needs building.", value: "all" },
    ],
  },
  {
    id: "timeline",
    question: "What's the timeline?",
    note: "The patent generates semester-by-semester plans. When could your student act?",
    type: "single",
    options: [
      { label: "Summer 2026", value: "summer_2026" },
      { label: "Gap year 2026-2027", value: "gap_year" },
      { label: "Spring break or shorter", value: "short" },
      { label: "Just planning ahead", value: "exploring" },
    ],
  },
];

/* ── Scoring ── */

function scoreProfile(answers) {
  const scores = { career: 0, major: 0, essay: 0, leadership: 0 };
  const max = 3;
  const activities = answers.current_activities || [];
  const opts = QUESTIONS.find((q) => q.id === "current_activities").options;
  for (const act of activities) {
    const opt = opts.find((o) => o.value === act);
    if (opt?.cats) {
      for (const cat of opt.cats) scores[cat] = Math.min(scores[cat] + 1, max);
    }
  }
  const norm = {};
  for (const k of Object.keys(scores)) norm[k] = scores[k] / max;
  return norm;
}

function getGaps(scores, explicit) {
  if (explicit === "all") return Object.keys(scores).sort((a, b) => scores[a] - scores[b]);
  const sorted = Object.entries(scores).sort((a, b) => a[1] - b[1]);
  const gaps = sorted.filter(([, s]) => s < 0.5).map(([k]) => k);
  if (explicit && explicit !== "all" && !gaps.includes(explicit)) gaps.unshift(explicit);
  return gaps.length > 0 ? gaps.slice(0, 3) : [sorted[0][0]];
}

/* ── Tips Generation (patent-grounded, brand-neutral) ── */

function getTips(gaps, answers) {
  const field = answers.target_field;
  const age = answers.age;
  const timeline = answers.timeline;
  const tips = [];

  if (gaps.includes("career")) {
    const careerTips = {
      stem: {
        title: "Get into a lab, clinic, or field station",
        what: "The patent cites robotics bootcamps and engineering academies as career-related activities. The key is professional exposure in the student's target field, not reading about it.",
        how: [
          "Apply to university-hosted summer research programs (many are free for high schoolers)",
          "Look for field research in ecology, marine biology, or geology where students collect real data alongside working scientists",
          "Seek hospital volunteering, biotech company shadows, or maker-space mentorships",
        ],
        timing: age === "17-18" ? "Urgent. Summer before senior year is the last window to add this before applications." : "Best placed summer before junior year so there's time to build on it.",
      },
      business: {
        title: "Get exposure to real business operations",
        what: "The patent specifically names 'Wall Street Investment & Trading Bootcamp' as its career-related example. Students need direct exposure to how professionals in their target field actually work.",
        how: [
          "Apply to business or finance summer intensives at universities or organizations like NFTE",
          "Start a small venture (Etsy shop, tutoring service, school event) and document the P&L",
          "Shadow a local entrepreneur or nonprofit director for a week and write about the experience",
        ],
        timing: "Summer before junior or senior year. Enough time to show sustained interest on applications.",
      },
      social: {
        title: "Work alongside professionals in the field",
        what: "The patent scores career-related activities on whether the student has direct exposure to their target profession. For social sciences, that means working where policy, psychology, or social systems are the daily work.",
        how: [
          "Intern at a local nonprofit, advocacy org, legal clinic, or government office",
          "Volunteer with community health or social service organizations",
          "Attend a summer program focused on public policy, university-level Model UN, or conflict resolution",
        ],
        timing: "Summer before junior year gives time to reflect and build on the experience.",
      },
    };
    const tip = careerTips[field] || careerTips["social"];
    if (field === "environment") {
      tips.push({
        category: "career",
        title: "Do conservation or sustainability work in the field",
        what: "The patent weights career-related activities on professional exposure in the target field. For environment-focused students, that means fieldwork, not classroom simulations.",
        how: [
          "Look for conservation programs with real ecological research (coral surveys, species monitoring, habitat restoration)",
          "Apply to national park service volunteer programs or state wildlife agency internships",
          "Seek out sustainability-focused organizations in your area and ask to shadow or assist",
        ],
        timing: timeline === "summer_2026" ? "Summer 2026. Prime time for a 2 to 4 week field placement." : "Any summer works, but earlier means more time to deepen the interest.",
      });
    } else if (field === "arts") {
      tips.push({
        category: "career",
        title: "Create in a professional or public-facing context",
        what: "The patent scores career exposure on proximity to real professional practice. For arts students, that means work that lives outside the classroom: exhibited, published, performed, or commissioned.",
        how: [
          "Submit to literary magazines, film festivals, or juried art shows",
          "Assist a working artist, photographer, filmmaker, or designer on a real project",
          "Attend a pre-college arts intensive at a conservatory or design school",
        ],
        timing: "Build a portfolio across multiple summers to show progression.",
      });
    } else {
      tips.push({ category: "career", ...tip });
    }
  }

  if (gaps.includes("major")) {
    if (field === "stem" || field === "environment") {
      tips.push({
        category: "major",
        title: "Go deeper than AP with university-level academic engagement",
        what: "The patent cites 'Case Western Reserve: Social Entrepreneurship' and 'Illinois Institute of Technology: Computer Science' as major-related activities. The common thread is academic depth beyond what high school offers, specifically aligned to the intended major.",
        how: [
          "Enroll in a university summer course in their intended field (many offer high school student enrollment)",
          "Pursue independent research under a teacher or professor with a real question, methodology, and paper",
          "Take online courses from MIT OpenCourseWare, Coursera, or edX and complete the capstone project",
        ],
        timing: age === "15-16" ? "Start sophomore or junior summer. Gives time for a second, deeper experience." : "Any summer, but pair it with a tangible output like a paper, project, or dataset.",
      });
    } else if (field === "business") {
      tips.push({
        category: "major",
        title: "Demonstrate academic depth in economics or business theory",
        what: "The patent maps major-related activities to the student's intended field. For business-track students, admissions AI looks for intellectual engagement with economics, markets, or organizational behavior, not just entrepreneurial hustle.",
        how: [
          "Take a university summer economics or business course (the patent flags these as high-signal)",
          "Compete in economics or business case competitions (DECA, FBLA, or university-hosted)",
          "Write a research paper on a market, industry, or economic question that genuinely interests them",
        ],
        timing: "Junior year summer is ideal. Shows academic maturity right before application season.",
      });
    } else {
      tips.push({
        category: "major",
        title: "Build academic depth outside the classroom",
        what: "The patent scores major-related activities on whether the student has engaged their field beyond high school coursework. For humanities and social sciences, that means independent inquiry, not just good grades.",
        how: [
          "Attend a university summer program in their area of interest (history, psychology, literature, languages)",
          "Pursue cultural immersion or language study abroad, which the patent maps to IB Language Acquisition and Individuals & Society subject groups",
          "Conduct an independent research or creative project with a mentor and present the results",
        ],
        timing: "Best before junior year. Leaves room to reference the experience in application essays.",
      });
    }
  }

  if (gaps.includes("essay")) {
    if (timeline === "gap_year" || age === "19-22") {
      tips.push({
        category: "essay",
        title: "Invest in an extended experience that transforms perspective",
        what: "The patent's essay-related category, which cites the 'NYT School: Summer Academy' as an example, identifies experiences that produce compelling written narratives. Its AI correlates acceptance with experiences that are specific, personal, and unreplicable.",
        how: [
          "Plan a multi-month gap year with structured service, travel, and reflection across unfamiliar cultures",
          "Live and work in a community fundamentally different from your own, not as a tourist but as a participant",
          "Keep a daily journal. The essay doesn't write itself. The reflection is the work.",
        ],
        timing: "Gap year between senior year and college. The patent's roadmap system places extended immersive experiences here.",
      });
    } else {
      tips.push({
        category: "essay",
        title: "Seek a specific, unfamiliar experience worth writing about",
        what: "The patent flags essay-related activities as experiences admissions committees remember, and generic summer camps produce generic essays. Specificity (a particular place, a particular moment, a particular challenge) is what the AI is trained to recognize.",
        how: [
          "Travel somewhere unfamiliar and do something meaningful there, whether service, cultural immersion, or research",
          "Put yourself in a context where you're uncomfortable and have to adapt (new language, new culture, new skill)",
          "Choose depth over breadth. Two weeks in one place beats five countries in three weeks.",
        ],
        timing: age === "17-18" ? "Summer before senior year. Last window before Common App opens." : "Summer before junior year gives time to reflect and write well.",
      });
    }
  }

  if (gaps.includes("leadership")) {
    tips.push({
      category: "leadership",
      title: "Lead a real project with real people, not just a title on a resume",
      what: "The patent bundles five traits into one category: leadership, collaboration, socialization, social responsibility, and challenge. The signal admissions AI looks for is evidence that the student led something difficult alongside other people.",
      how: [
        "Organize an international service project where you're responsible for outcomes, not just attendance",
        "Lead a team on a community development project (construction, education, conservation) where the work matters after you leave",
        "Take on a leadership role in an unfamiliar cultural context where you can't rely on status or familiarity",
      ],
      timing: age === "12-14" ? "Start early. Leadership experience compounds across multiple years." : timeline === "summer_2026" ? "Summer 2026. The patent's roadmap can place this in any semester." : "Any summer. Even a 1-week intensive builds the signal if the student actually leads.",
    });
  }

  // Ensure at least 2 tips
  if (tips.length < 2) {
    if (!gaps.includes("essay")) {
      tips.push({
        category: "essay",
        title: "Even strong profiles need essay-worthy experiences",
        what: "The patent shows students with coverage across all four categories have the highest acceptance correlation. An immersive experience adds the narrative dimension that ties everything together.",
        how: [
          "Travel to an unfamiliar place and do meaningful work there",
          "Seek out cross-cultural experiences that challenge assumptions",
          "Journal daily. The raw material for a great essay is specific sensory detail, not abstract reflection.",
        ],
        timing: "Any summer. The earlier, the more time to build on it.",
      });
    }
    if (!gaps.includes("leadership")) {
      tips.push({
        category: "leadership",
        title: "Add a leadership and service dimension",
        what: "The patent treats leadership and social responsibility as a high-weight category. Even students with strong academic profiles benefit from demonstrating they can lead, collaborate, and serve.",
        how: [
          "Volunteer abroad in a structured program with real community impact",
          "Organize a service project at home: fundraiser, tutoring initiative, or environmental cleanup",
          "Take on responsibility in a group setting where outcomes depend on your initiative",
        ],
        timing: "Flexible. Works at any point in the roadmap.",
      });
    }
  }

  return tips.slice(0, 3);
}

/* ── UI Components ── */

function ProgressBar({ current, total }) {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "32px" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          flex: 1, height: "2px", borderRadius: "1px",
          background: i <= current ? "#003964" : "#e5e7eb",
          transition: "background 0.4s ease",
        }} />
      ))}
    </div>
  );
}

function ScoreRow({ catKey, score }) {
  const cat = PATENT_CATEGORIES[catKey];
  const level = score < 0.3 ? "Gap" : score < 0.6 ? "Developing" : "Strong";
  const levelColor = score < 0.3 ? "#cd6414" : score < 0.6 ? "#003964" : "#5a8c4d";
  const levelBg = score < 0.3 ? "rgba(205,100,20,0.08)" : score < 0.6 ? "rgba(0,57,100,0.06)" : "rgba(90,140,77,0.08)";

  return (
    <div style={{ marginBottom: "22px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <cat.Icon size={18} color={cat.color} />
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}>{cat.name}</span>
        </div>
        <span style={{
          fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
          color: levelColor, background: levelBg, padding: "3px 12px", borderRadius: "3px",
        }}>{level}</span>
      </div>
      <div style={{ height: "4px", borderRadius: "2px", background: "#f3f4f6", overflow: "hidden" }}>
        <div style={{
          height: "100%", width: `${Math.max(score * 100, 4)}%`, borderRadius: "2px",
          background: cat.color, transition: "width 0.8s ease",
        }} />
      </div>
      <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "5px" }}>{cat.patentDef}</div>
    </div>
  );
}

function TipCard({ tip }) {
  const [open, setOpen] = useState(false);
  const cat = PATENT_CATEGORIES[tip.category];

  return (
    <div style={{
      background: "#fff", border: `1px solid ${cat.border}`, borderRadius: "8px",
      overflow: "hidden", marginBottom: "14px",
    }}>
      <div style={{ padding: "18px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: cat.tagBg, color: cat.color,
            fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "3px",
            letterSpacing: "0.04em", textTransform: "uppercase",
          }}>
            <cat.Icon size={13} color={cat.color} />
            {cat.name}
          </span>
        </div>

        <h4 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px", color: "#333" }}>{tip.title}</h4>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          fontSize: "12px", color: "#003964", fontWeight: 500, marginBottom: "14px",
        }}>
          <Icons.clock size={12} color="#003964" />
          {tip.timing}
        </div>

        <div style={{
          background: cat.bg, borderRadius: "6px", padding: "14px 16px",
          borderLeft: `3px solid ${cat.color}`,
        }}>
          <div style={{
            fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.1em", color: cat.color, marginBottom: "6px",
          }}>What the patent says</div>
          <div style={{ fontSize: "13px", color: "#404041", lineHeight: 1.7 }}>{tip.what}</div>
        </div>

        <button onClick={() => setOpen(!open)} style={{
          display: "flex", alignItems: "center", gap: "6px", marginTop: "12px",
          background: "none", border: "none", color: "#003964",
          fontSize: "13px", fontWeight: 600, cursor: "pointer", padding: "2px 0",
        }}>
          <Icons.lightbulb size={14} color="#003964" />
          {open ? "Hide action steps" : "What to do about it"}
          {open ? <Icons.chevUp size={13} color="#003964" /> : <Icons.chevDown size={13} color="#003964" />}
        </button>

        {open && (
          <div style={{
            marginTop: "10px", padding: "14px 16px", background: "#f9fafb", borderRadius: "6px",
            borderLeft: "3px solid #d1d5db",
          }}>
            {tip.how.map((step, i) => (
              <div key={i} style={{
                display: "flex", gap: "10px", marginBottom: i < tip.how.length - 1 ? "10px" : 0,
                fontSize: "13px", color: "#404041", lineHeight: 1.6,
              }}>
                <span style={{ color: "#003964", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main Quiz ── */

export default function PatentAudit() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState({});
  const [show, setShow] = useState(false);

  const font = "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

  function select(val) {
    const q = QUESTIONS[step];
    if (q.type === "single") {
      setAnswers({ ...answers, [q.id]: val });
      setTimeout(() => {
        if (step < QUESTIONS.length - 1) setStep(step + 1);
        else setShow(true);
      }, 200);
    } else {
      const cur = answers[q.id] || [];
      const max = q.max || 99;
      if (cur.includes(val)) setAnswers({ ...answers, [q.id]: cur.filter((v) => v !== val) });
      else if (cur.length < max) setAnswers({ ...answers, [q.id]: [...cur, val] });
    }
  }

  function next() {
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setShow(true);
  }

  /* INTRO */
  if (step === -1) {
    return (
      <div style={{ fontFamily: font, maxWidth: "580px", margin: "0 auto", padding: "48px 24px", color: "#333" }}>
        <div style={{
          fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "#6b7280", marginBottom: "14px",
        }}>Based on Patent <a href="https://doi.org/10.8080/1020240076746" target="_blank" rel="noopener noreferrer" style={{ color: "#6b7280", textDecoration: "underline", textUnderlineOffset: "2px" }}>KR20250176675A</a></div>

        <h1 style={{ fontSize: "26px", fontWeight: 700, lineHeight: 1.3, margin: "0 0 14px", color: "#003964" }}>
          Extracurricular Profile Audit
        </h1>

        <p style={{ fontSize: "15px", color: "#404041", lineHeight: 1.7, marginBottom: "24px" }}>
          A patent published in December 2025 describes an AI platform that scores student extracurriculars across four categories and maps them against real university acceptance data. This audit uses the same framework.
        </p>

        <div style={{ background: "#f9fafb", borderRadius: "8px", padding: "20px", marginBottom: "28px" }}>
          <div style={{
            fontSize: "11px", fontWeight: 700, color: "#6b7280", marginBottom: "14px",
            textTransform: "uppercase", letterSpacing: "0.08em",
          }}>The patent's four categories</div>
          {Object.values(PATENT_CATEGORIES).map((cat) => (
            <div key={cat.id} style={{
              display: "flex", alignItems: "flex-start", gap: "12px",
              marginBottom: "12px", fontSize: "14px", lineHeight: 1.5,
            }}>
              <div style={{ marginTop: "2px", flexShrink: 0 }}><cat.Icon size={18} color={cat.color} /></div>
              <div>
                <span style={{ fontWeight: 600, color: cat.color }}>{cat.name}</span>
                <span style={{ color: "#6b7280" }}>: {cat.patentDef}</span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6, marginBottom: "28px" }}>
          Five questions. Two minutes. No account or email required.
        </p>

        <button onClick={() => setStep(0)} style={{
          width: "100%", padding: "15px", background: "#00a89c", color: "#fff", border: "none",
          borderRadius: "6px", fontSize: "15px", fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
        }}>
          Start the Audit <Icons.arrow size={16} color="#fff" />
        </button>
      </div>
    );
  }

  /* RESULTS */
  if (show) {
    const scores = scoreProfile(answers);
    const gaps = getGaps(scores, answers.gap_perception);
    const tips = getTips(gaps, answers);

    return (
      <div style={{ fontFamily: font, maxWidth: "580px", margin: "0 auto", padding: "40px 24px", color: "#333" }}>
        <div style={{
          fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "#6b7280", marginBottom: "8px",
        }}>Patent-Based Profile Audit</div>

        <h2 style={{ fontSize: "22px", fontWeight: 700, lineHeight: 1.3, margin: "0 0 6px", color: "#003964", border: "none", padding: 0 }}>
          Your student's extracurricular scorecard
        </h2>
        <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "24px", lineHeight: 1.5 }}>
          Scored against the four categories from Patent <a href="https://doi.org/10.8080/1020240076746" target="_blank" rel="noopener noreferrer" style={{ color: "#6b7280", textDecoration: "underline", textUnderlineOffset: "2px" }}>KR20250176675A</a>. The patent's AI benchmarks these scores against real university acceptance data to flag where a student falls below the threshold for their target school.
        </p>

        <div style={{ background: "#f9fafb", borderRadius: "8px", padding: "24px", marginBottom: "32px" }}>
          {Object.keys(PATENT_CATEGORIES).map((k) => (
            <ScoreRow key={k} catKey={k} score={scores[k]} />
          ))}
        </div>

        <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 4px", color: "#333" }}>
          What to do about the gaps
        </h3>
        <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 18px", lineHeight: 1.5 }}>
          Actionable steps based on the patent's framework and your student's profile.
        </p>

        {tips.map((t, i) => <TipCard key={i} tip={t} />)}

        <div style={{
          marginTop: "32px", padding: "20px", background: "#f9fafb", borderRadius: "8px",
          borderLeft: "3px solid #00a89c", fontSize: "14px", color: "#404041", lineHeight: 1.7,
        }}>
          <div style={{ fontWeight: 600, color: "#003964", marginBottom: "4px" }}>Looking for programs that check these boxes?</div>
          Rustic Pathways runs 130+ programs across 38 countries for students aged 12 to 22. Service learning, conservation research, cultural immersion, and gap year semesters that map directly to the categories above.
        </div>

        <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <a href="https://rusticpathways.com/students/programs/program-types/2026-programs" target="_blank" rel="noopener noreferrer" style={{
            background: "#00a89c", color: "#fff", border: "none", borderRadius: "6px",
            padding: "15px", fontSize: "15px", fontWeight: 600, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            textDecoration: "none",
          }}>
            See 2026 Programs <Icons.arrow size={16} color="#fff" />
          </a>
        </div>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <button onClick={() => { setStep(-1); setAnswers({}); setShow(false); }} style={{
            background: "none", border: "none", color: "#6b7280", fontSize: "12px",
            cursor: "pointer", textDecoration: "underline",
          }}>Retake audit</button>
        </div>
      </div>
    );
  }

  /* QUESTIONS */
  const q = QUESTIONS[step];
  const isMulti = q.type === "multi";
  const sel = isMulti ? (answers[q.id] || []) : answers[q.id];

  return (
    <div style={{ fontFamily: font, maxWidth: "580px", margin: "0 auto", padding: "40px 24px", color: "#333" }}>
      <ProgressBar current={step} total={QUESTIONS.length} />

      <div style={{
        fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em",
        textTransform: "uppercase", color: "#6b7280", marginBottom: "6px",
      }}>Question {step + 1} of {QUESTIONS.length}</div>

      <h2 style={{
        fontSize: "20px", fontWeight: 700, lineHeight: 1.35, margin: "0 0 4px", color: "#333",
        border: "none", padding: 0,
      }}>{q.question}</h2>

      {q.note && (
        <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: "20px", lineHeight: 1.5, fontStyle: "italic" }}>
          {q.note}
        </p>
      )}

      {isMulti && (
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "14px" }}>Select up to {q.max}</p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {q.options.map((opt) => {
          const active = isMulti ? sel.includes(opt.value) : sel === opt.value;
          return (
            <button key={opt.value} onClick={() => select(opt.value)} style={{
              display: "flex", alignItems: "center", gap: "12px",
              padding: "12px 16px", borderRadius: "6px",
              border: active ? "2px solid #003964" : "1px solid #e5e7eb",
              background: active ? "rgba(0, 57, 100, 0.03)" : "#fff",
              cursor: "pointer", fontSize: "14px", textAlign: "left",
              transition: "all 0.15s ease", fontWeight: active ? 500 : 400, color: "#333",
            }}>
              {isMulti && (
                <div style={{
                  width: "16px", height: "16px", borderRadius: "3px", flexShrink: 0,
                  border: active ? "none" : "1.5px solid #d1d5db",
                  background: active ? "#003964" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {active && <Icons.check size={10} color="#fff" />}
                </div>
              )}
              {opt.label}
            </button>
          );
        })}
      </div>

      {isMulti && (
        <button onClick={next} disabled={(sel || []).length === 0} style={{
          marginTop: "16px", width: "100%", padding: "14px", borderRadius: "6px", border: "none",
          background: (sel || []).length > 0 ? "#00a89c" : "#d1d5db",
          color: "#fff", fontSize: "15px", fontWeight: 600,
          cursor: (sel || []).length > 0 ? "pointer" : "not-allowed",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
        }}>
          Continue <Icons.arrow size={16} color="#fff" />
        </button>
      )}

      {step > 0 && (
        <button onClick={() => setStep(step - 1)} style={{
          display: "flex", alignItems: "center", gap: "6px", marginTop: "12px",
          background: "none", border: "none", color: "#6b7280",
          fontSize: "13px", cursor: "pointer", padding: "4px 0",
        }}>
          <Icons.back size={12} color="#6b7280" /> Back
        </button>
      )}
    </div>
  );
}
