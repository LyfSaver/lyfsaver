export type FaqItem = { q: string; a: string };
export type FaqGroup = { topic: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    topic: "Final Year Projects",
    items: [
      { q: "Do you cover CSE, ISE, AIML, ECE and other branches?", a: "Yes — we cover CSE, ISE, CSBS, AIML, Data Science, MCA, BCA, BSc, MSc and ECE/EEE electronics projects." },
      { q: "Will I get source code, report and PPT?", a: "Every project ships with full source code, a college-format report, PPT, demo video and a viva Q&A sheet." },
      { q: "Can you match my college's report format?", a: "Yes. Share your college template and we'll deliver the report in the exact required format." },
    ],
  },
  {
    topic: "Website Development",
    items: [
      { q: "Do you build SEO-optimized websites?", a: "Yes. Every website we build is fast, responsive and SEO-optimized with structured data and clean semantic HTML." },
      { q: "Can you build restaurant, hospital, clinic or school websites?", a: "Yes. We specialize in business websites for restaurants, hospitals, clinics, schools, colleges and startups." },
      { q: "Do you provide website maintenance?", a: "Yes. We offer monthly maintenance plans with backups, updates, security patches and content changes." },
    ],
  },
  {
    topic: "Mobile Apps",
    items: [
      { q: "Do you build Android and iOS apps?", a: "We build native Android (Kotlin/Java), native iOS (Swift) and cross-platform Flutter apps." },
      { q: "Can you publish the app to Play Store / App Store?", a: "Yes. We assist with publishing, screenshots and store listings for both platforms." },
    ],
  },
  {
    topic: "Business Software",
    items: [
      { q: "Do you build ERP, CRM and inventory software?", a: "Yes. We build custom ERP, CRM, inventory and billing software tailored to your business workflow." },
      { q: "Is the software GST-ready?", a: "Yes. Our billing software supports GST invoicing, tax reports and multi-user access." },
    ],
  },
  {
    topic: "AI Projects",
    items: [
      { q: "Do you build AI and Machine Learning projects?", a: "Yes — classification, NLP, computer vision, recommendation systems, deep learning and generative AI." },
      { q: "Will results be reproducible?", a: "We share clean notebooks, model files and evaluation metrics so results are fully reproducible." },
    ],
  },
  {
    topic: "Research Projects",
    items: [
      { q: "Can you help with an IEEE base paper implementation?", a: "Yes. We implement IEEE base papers, reproduce results and add novelty for publication-ready outcomes." },
      { q: "Do you help draft a research paper?", a: "Yes. We help draft, format and revise papers for conferences and journals." },
    ],
  },
  {
    topic: "Careers",
    items: [
      { q: "Are you hiring developers and designers?", a: "We regularly hire developers, designers and interns. Reach out via the contact page with your portfolio to apply." },
      { q: "Do you offer remote roles?", a: "Yes. Most of our roles are fully remote across India." },
    ],
  },
];