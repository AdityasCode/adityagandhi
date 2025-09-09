const person = {
  firstName: "Aditya",
  lastName: "Gandhi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  email: "gandh105@purdue.com",
  location: "America/Indianapolis", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  actual_location: "America/Indiana/West Lafayette",
  languages: ["English", "Hindi", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      You'll be updated on projects I publish!
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adityascode/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adga/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/ad_06_ga",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Translating big data into simple, actionable answers</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/retailmind-project-page",
  },
  subline: (
    <>
      I'm Aditya, a CS student at Purdue, and I craft intuitive
      <br /> robust applications, utilizing AI/ML and SWE principles.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.actual_location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aditya is a junior in CS at Purdue University, WL, focused in ML solutions and cloud infrastructure.
        His work spans big data, sentiment analysis, and cloud deployment.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Stealth Startup",
        timeframe: "July 2025 - August 2025",
        role: "AI Engineer Intern",
        achievements: [
          <>
            Engineered a conversational AI agent for retail analytics, processing data across 45 stores and 4,500+ department-store combinations to answer complex business queries in natural language, bringing real-world insights and KPAs with simple visualizations and summaries to plainly numerical analyses.
          </>,
          <>
            Developed a novel causal inference feature using vector search to correlate unstructured text events (e.g., marketing plans) with sales data, automatically identifying root causes for performance anomalies.
          </>,
          <>
            Architected a multi-tool agent with multithreading, ensuring a sub-300ms latency responsive UI during long-running ML tasks.
          </>,
          <>
            Implemented a hierarchical forecasting model using MinT Reconciliation from the ground up, outperforming baseline models and increasing prediction accuracy by over 60%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            // src: "/images/projects/project-01/cover-01.jpg",
            // alt: "Once UI Project",
            // width: 16,
            // height: 9,
          },
        ],
      },
      {
        company: "Indegene",
        timeframe: "May 2024 - July 2024",
        role: "Software Engineering Intern in Chief Technology Operations",
        achievements: [
          <>
            Engineered a Retrieval-Augmented Generation pipeline to analyze multi-hundred-page pharmaceutical regulatory documents, significantly reducing manual review time for domain experts.
          </>,
          <>
            Developed a content automation engine that transformed structured data from Excel into dynamically generated, sourced news articles, streamlining content creation workflows.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Purdue University, West Lafayette",
        description: <>CS Honors, specializing in Machine Intelligence and Software Engineering.</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
