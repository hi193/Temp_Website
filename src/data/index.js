const person = {
  firstName: "Himanshi",
  lastName: "Jain",
  fullName: "Himanshi Jain",
  email: "himanshi16205@gmail.com",
};

const siteUrl = "https://dheerajbuilds.com";

export const siteConfig = {
  person,
  seo: {
    siteUrl,
    title: "Portfolio of Himanshi Jain",
    description:
      "Portfolio of Himanshi Jain - full-stack engineer building AI-first products, systems, and polished web experiences.",
    icon: `${siteUrl}/global/Site_Icon.svg`,
    shareImage: `${siteUrl}/screenshots/Thumbnail.png`,
  },
  navigation: {
    badgeLabel: "Himanshi Jain © 2026",
    resumePath: "/Himanshi_Jain_Resume.pdf",
    menuItems: [
      { label: "Work", to: "/#case-studies" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
    socialLinks: [
      {
        label: "Behance",
        href: "https://www.behance.net/",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/himanshi22/",
      },
    ],
  },
  contact: {
    header: "In some other universe, we're already friends.\nSo why not in this one? So let's connect!",
    description:
      "I'm currently open to full-time/part-time opportunities! Let's create something amazing together!",
    cta: {
      label: "Get in Touch",
      to: "/contact",
    },
    form: {
      eyebrow: "Let’s connect",
      scene: "(Update — 07)",
      copyright: "© 2026",
      title: "Start a Project",
      description:
        "Have a product idea, an AI workflow, or a system challenge? Share the details and I’ll reply with next steps.",
      availability: ["Open to opportunities", "Remote or on-site"],
      placeholders: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
      submitLabel: "Send Message",
    },
  },
  home: {
    heroDescription:
      "UI/UX designer with 3 years in SaaS, making businesses feel effortless for real people.",
    heroHighlights: ["Product Designer", "UX-AI"],
    introTagline: "I design. I build. I experiment.",
    introHeading: "with care and product intuition",
    introStateLabel: "/ Core State /",
    stickyNav: ["About Me", "Let’s Connect"],
    stickyFooter: ["Engineering with Intent", "Open to Collaborations"],
    stickyTitles: [
      "I build full-stack products",
      "shape clean interfaces",
      "and turn messy ideas into systems",
    ],
    workHeaderSuffix: "selects",
    hobbies: ["Systems", "AI", "Web", "Product"],
  },
  about: {
    establishedLabel: "Est",
    establishedYear: "1997",
    spotlightBottomBar: ["▸ Specs loaded", "/ Readme.md"],
    spotlightParagraphs: [
      "Welcome to the corner of the internet where things get built, not just for the scroll, but for the story. This is not just a site. Its a working archive of experiments, learnings, and quiet flexes.",
      "I am Himanshi Jain. I design with rhythm, build with care, and believe every detail deserves a reason to exist. From quick sketches to final deploy, everything here was made with intent and maybe a bit of caffeine. This space is built for motion, meaning, and messing around until it clicks.",
    ],
    spotlightKeywords: [
      "corner",
      "scroll",
      "archive",
      "learnings",
      "rhythm",
      "detail",
      "deploy",
      "caffeine",
      "messing",
    ],
    deskLabel: "About Me / Himanshi Jain",
    deskHeadline: "A product designer by day and a curious reader by night",
    deskBody:
      "Congrats, you made it to this tab. I hope it wasn’t an accident.\n(If it was, welcome. That’s how most good things start.)\n\nHey, I’m Himanshi, a designer with a bit of a plot twist! I didn’t start in design. I spent years learning how to code.\n\nThat path gave me a lens wider than just the screen. I learned how people actually find products, what frustrates them to the point of quitting, and what makes them trust a brand enough to stay.\nI thrive in the messy, ambiguous parts of product building. I love taking complex, heavy information and turning it into clear, calm experiences that feel human.",
    outroTitle: "Scroll ends but ideas do not",
    outroDescription:
      "This space is a running log of experiments, shipping notes, and design instincts tested in the wild.",
    outroTags: [
      "Product Thinking",
      "Systems",
      "AI x UX",
      "Critical Thinking",
      "Teamwork",
    ],
    galleryCards: [
      { id: "X01-842", image: "/project/Logofy.jpeg" },
      { id: "V9-372K", image: "/project/Sparknotes.jpeg" },
      { id: "Z84-Q17", image: "/project/meet.jpeg" },
      { id: "L56-904", image: "/project/gofetch.png" },
      { id: "A23-7P1", image: "/project/banner.jpg" },
      { id: "T98-462", image: "/project/Logofy.jpeg" },
    ],
    intro: [
      "I'm " + person.fullName + " — a computer science student and full-stack developer focused on systems and AI. I enjoy building practical products with clean architecture and strong UX.",
      "I care about clarity, performance, and scalable design. Whether it’s an AI workflow, a SaaS app, or a developer tool, I aim for reliability and impact.",
      "Every project is a chance to learn, iterate, and ship. If it solves a real problem and feels solid to use, it’s a win.",
    ],
  },
  faq: {
    titleLine1: "Frequently",
    titleLine2: "Asked Questions",
  },
  marquee: {
    headlinePrimary: "Turning ideas into scalable products",
    headlineSecondary: "Designing intelligent digital experiences",
    bannerCopy: "Crafting systems that feels alive",
    bannerLogo: `[ ${person.firstName}.exe ]`,
    bannerImage: "/marquee-banner/marquee_banner_01.png",
  },
  clubs: {
    title: "Clubs",
    members: [
      {
        id: "card-1",
        name: "IET NITK",
        img: "/Logos/IET_Logo.jpeg",
        alt: "IET NITK logo",
        position: "Executive Member | Web Team",
        description:
          "Revamped IET NITK website, developed a CTF platform for 60+ teams, and taught web development to 80+ students.",
        instagram: "https://www.instagram.com/ietnitk/",
      },
      {
        id: "card-2",
        name: "TEDx NITKSurathkal",
        img: "/Logos/Tedx_Logo.png",
        alt: "TEDx NITKSurathkal logo",
        position: "Executive Member | Web Developer & UI/UX Designer",
        description:
          "Contributing to the design and development of the TEDxNITK website, ensuring a consistent and impactful digital experience.",
        instagram: "https://www.instagram.com/tedxnitksurathkal/",
      },
      {
        id: "card-3",
        name: "GDG-WEC NITK",
        img: "/Logos/WEC_Nitk.png",
        alt: "WEC NITK logo",
        position: "Executive Member | Web Developer",
        description:
          "Developing Docker Integration Host, a platform for centralized management and monitoring of remote Docker hosts.",
        instagram: "https://www.instagram.com/wecnitk/",
      },
    ],
  },
  projectPage: {
    headerEyebrow: "Short film on self-discovery",
    headerTitle: "Fragments of Light",
    bannerImage: "/project/banner.jpg",
    overviewLabel: "Overview",
    overviewCopy:
      "A visual meditation on identity, *Fragments of Light* explores the quiet journey of self-discovery through minimalism, mood, and motion.",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Category", value: "Short Film" },
      { label: "Running Time", value: "6:30" },
      { label: "Directed by", value: person.fullName },
    ],
    images: [
      "/project/Logofy.jpeg",
      "/project/Sparknotes.jpeg",
      "/project/meet.jpeg",
      "/project/gofetch.png",
      "/project/banner.jpg",
    ],
    credits: [
      { label: "Editor", value: person.fullName },
      { label: "Sound Design", value: "Elena Brooks" },
      { label: "Art Director", value: "Milo Vance" },
      { label: "Producer", value: "Asha Lennox" },
      { label: "Director", value: person.fullName },
    ],
    next: {
      index: "02 - 05",
      label: "Next",
      image: "/project/Sparknotes.jpeg",
      title: "Market Pulse",
    },
  },
  work: {
    selectedProjectLabel: "Selected Project",
    storySlidesFooterLabel: "Project Index",
    storySlidesFooterMeta: "( Since 2024 )",
  },
  footer: {
    brandLine1: person.firstName,
    brandLine2: person.lastName,
    copyrightYear: "2026",
    templateCredit: "Made with Love",
  },
};
