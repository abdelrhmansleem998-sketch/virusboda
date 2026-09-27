export type Lang = "ar" | "en";

type Text = Record<Lang, string>;

export const profile = {
  handle: "virusboda",
  name: { en: "Abdelrhman Silem", ar: "عبدالرحمن سليم" } satisfies Text,
  location: { en: "Egypt", ar: "مصر" } satisfies Text,
  email: "abdelrhmansleem998@gmail.com",
  github: "https://github.com/abdelrhmansleem998-sketch",
  githubLabel: "abdelrhmansleem998-sketch",
};

export const skillGroups = [
  {
    id: "offense",
    title: { en: "Offensive security", ar: "الأمن الهجومي" },
    items: [
      { en: "Web pentesting — Hegazy", ar: "اختبار اختراق الويب — حجازي" },
      { en: "Reconnaissance", ar: "الاستطلاع" },
      { en: "OSINT", ar: "الاستخبارات مفتوحة المصدر" },
      { en: "Reporting", ar: "كتابة التقارير" },
      { en: "Security fundamentals", ar: "أساسيات الأمن" },
      { en: "Cybersecurity tooling", ar: "أدوات الأمن السيبراني" },
      { en: "Network attacks — basics", ar: "هجمات الشبكات — أساسيات" },
    ],
  },
  {
    id: "vulns",
    title: { en: "Vulnerability classes", ar: "تصنيفات الثغرات" },
    items: [
      { en: "XSS", ar: "XSS" },
      { en: "SQL injection", ar: "حقن SQL" },
      { en: "IDOR", ar: "IDOR" },
      { en: "XXE", ar: "XXE" },
      { en: "Information disclosure", ar: "تسريب المعلومات" },
      { en: "Broken access control", ar: "كسر التحكم بالوصول" },
      { en: "Local file inclusion", ar: "تضمين الملفات المحلية" },
      { en: "File upload", ar: "رفع الملفات" },
      { en: "API testing", ar: "اختبار واجهات البرمجة" },
      { en: "Business logic", ar: "منطق الأعمال" },
      { en: "Authentication", ar: "المصادقة" },
      { en: "SSRF", ar: "SSRF" },
    ],
  },
  {
    id: "labs",
    title: { en: "Labs & programs", ar: "المعامل والبرامج" },
    items: [
      { en: "Hack The Box", ar: "Hack The Box" },
      { en: "TryHackMe", ar: "TryHackMe" },
      { en: "PortSwigger Web Security Academy", ar: "أكاديمية PortSwigger" },
      { en: "HackerOne — live programs", ar: "HackerOne — برامج حيّة" },
      { en: "Bugcrowd", ar: "Bugcrowd" },
      { en: "Private programs + valid findings", ar: "برامج خاصة وثغرات مؤكدة" },
    ],
  },
  {
    id: "eng",
    title: { en: "Engineering", ar: "هندسة البرمجيات" },
    items: [
      { en: "C++", ar: "C++" },
      { en: "Java", ar: "Java" },
      { en: "Object-oriented programming", ar: "البرمجة كائنية التوجه" },
      { en: "Python", ar: "Python" },
      { en: "Bash & scripting — basics", ar: "Bash والسكربتات — أساسيات" },
      { en: "Git & GitHub", ar: "Git و GitHub" },
      { en: "HTML, CSS, JavaScript — basics", ar: "HTML و CSS و JavaScript — أساسيات" },
      { en: "Node.js & Express", ar: "Node.js و Express" },
      { en: "Databases", ar: "قواعد البيانات" },
      { en: "Problem solving — ICPC", ar: "حل المشكلات — ICPC" },
    ],
  },
  {
    id: "systems",
    title: { en: "Systems", ar: "الأنظمة" },
    items: [
      { en: "Linux", ar: "لينكس" },
      { en: "Windows Server administration — basics", ar: "إدارة ويندوز سيرفر — أساسيات" },
      { en: "Networking basics", ar: "أساسيات الشبكات" },
      { en: "Hashing & encoding — basics", ar: "التجزئة والترميز — أساسيات" },
      { en: "System analysis & computer science", ar: "تحليل النظم وعلوم الحاسب" },
    ],
  },
] as const;

export const study = [
  {
    label: { en: "CS50", ar: "CS50" },
    note: { en: "Self-study", ar: "دراسة ذاتية" },
  },
  {
    label: { en: "OSCP content", ar: "محتوى OSCP" },
    note: { en: "Self-study", ar: "دراسة ذاتية" },
  },
  {
    label: { en: "Web pentesting", ar: "اختبار اختراق الويب" },
    note: { en: "Hegazy", ar: "حجازي" },
  },
  {
    label: { en: "CCNA", ar: "CCNA" },
    note: { en: "Networking path", ar: "مسار الشبكات" },
  },
  {
    label: { en: "ICPC", ar: "ICPC" },
    note: { en: "Competitive programming", ar: "برمجة تنافسية" },
  },
] as const;

export const copy = {
  nav: {
    about: { en: "About", ar: "نبذة" },
    skills: { en: "Skills", ar: "المهارات" },
    vulns: { en: "Vulns", ar: "الثغرات" },
    path: { en: "Path", ar: "المسار" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  role: {
    en: "Offensive security · Bug bounty",
    ar: "أمن هجومي · صيد الثغرات",
  },
  education: {
    en: "FCI — second level, computer science",
    ar: "كلية الحاسبات والمعلومات — المستوى الثاني",
  },
  heroLead: {
    en: "I hunt web vulnerabilities on live programs, then write them up cleanly. Student by day, researcher on HackerOne, Bugcrowd, and private scopes.",
    ar: "أصيد ثغرات الويب على برامج حيّة، ثم أكتب التقرير بوضوح. طالب نهارًا، وباحث على HackerOne وBugcrowd والبرامج الخاصة.",
  },
  ctaSkills: { en: "See the stack", ar: "شاهد المهارات" },
  ctaContact: { en: "Get in touch", ar: "تواصل معي" },
  aboutTitle: { en: "Dossier", ar: "الملف" },
  aboutBody: {
    en: "virusboda is the public handle of Abdelrhman Silem, a computer-science student in Egypt. The page is built from his Notion CV: offensive security, web pentesting, and the classes he actually practices — XSS, SQLi, IDOR, access control, APIs, and business logic — plus labs on Hack The Box, TryHackMe, and PortSwigger.",
    ar: "virusboda هو الاسم العلني لعبدالرحمن سليم، طالب علوم حاسب في مصر. الصفحة مبنية من سيرته في نوشن: أمن هجومي، اختبار اختراق الويب، والثغرات التي يعمل عليها فعليًا — XSS وSQLi وIDOR والتحكم بالوصول والواجهات ومنطق الأعمال — مع معامل Hack The Box وTryHackMe وPortSwigger.",
  },
  aboutNote: {
    en: "Sourced from the Notion CV page. Public profile only — no private recon.",
    ar: "مأخوذة من صفحة السيرة في نوشن. الملف العلني فقط — بدون ملاحظات الاستطلاع الخاصة.",
  },
  stats: [
    { value: "12", label: { en: "vuln classes", ar: "تصنيف ثغرة" } },
    { value: "3", label: { en: "live platforms", ar: "منصات حيّة" } },
    { value: "FCI", label: { en: "second level", ar: "المستوى الثاني" } },
  ],
  skillsTitle: { en: "Field notes", ar: "ملاحظات الميدان" },
  skillsLead: {
    en: "Grouped the way the CV is written — not a keyword dump.",
    ar: "مجمّعة كما كُتبت في السيرة — ليست قائمة كلمات مفتاحية.",
  },
  pathTitle: { en: "Study path", ar: "مسار الدراسة" },
  pathLead: {
    en: "Self-study first. OSCP content in progress. CS50 and ICPC already on the record.",
    ar: "الدراسة الذاتية أولًا. محتوى OSCP قيد العمل. CS50 وICPC مسجّلان.",
  },
  contactTitle: { en: "Signal", ar: "إشارة" },
  contactLead: {
    en: "For coordinated disclosure, collaborations, or a walkthrough of a finding.",
    ar: "للإفصاح المنسّق، أو التعاون، أو شرح إيجاد.",
  },
  contactCta: { en: "Write an email", ar: "أرسل رسالة" },
  githubCta: { en: "GitHub", ar: "GitHub" },
  copied: { en: "Copied", ar: "تم النسخ" },
  copyEmail: { en: "Copy email", ar: "انسخ البريد" },
  footer: {
    en: "virusboda — portfolio from the Notion CV.",
    ar: "virusboda — ملف أعمال من سيرة نوشن.",
  },
  themeLight: { en: "Light", ar: "فاتح" },
  themeDark: { en: "Dark", ar: "غامق" },
  langEn: { en: "EN", ar: "EN" },
  langAr: { en: "AR", ar: "ع" },
  skip: { en: "Skip to content", ar: "تخطَّ إلى المحتوى" },
} as const;
