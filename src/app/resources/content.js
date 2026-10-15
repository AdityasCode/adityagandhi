const person = {
  firstName: "Aditya",
  lastName: "Gandhi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer & CS Honors Student",
  avatar: "/images/avatar.jpg",
  email: "gandh105@purdue.edu",
  phone: "765-426-4288",
  location: "America/Indianapolis", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  actual_location: "West Lafayette, Indiana",
  languages: ["English", "Hindi", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      You&apos;ll be updated on projects I publish!
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
  {
    name: person.phone,
    icon: "phone",
    link: `tel:+1${person.phone.replaceAll("-", "")}`,
  },
];

const home = {
  path: "/",
  image: "/og?title=Aditya%20Gandhi%20%7C%20Software%20Engineering%20%26%20ML%20Systems",
  label: "Home",
  title: "Aditya Gandhi | Software Engineering & ML Systems",
  description: "Aditya Gandhi is a Purdue Computer Science Honors student, graduating in May 2027, with experience at Amazon, Duality Lab, the Privacy-Preserving Machine Learning Lab, Retailmind, and Indegene.",
  headline: <>Translating big data into simple, actionable answers</>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">RetailMind</strong></>,
    href: "/work/retailmind-project-page",
  },
  subline: (
    <>
      I&apos;m Aditya, a Computer Science Honors student at Purdue, graduating in May 2027.
      <br /> I build software, distributed systems, and machine learning infrastructure.
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
    link: "https://calendly.com/adityagandhi/new-meeting-1",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m pursuing a B.S. in Computer Science Honors at Purdue University in West Lafayette,
        with concentrations in Software Engineering and Machine Intelligence and a minor in Mathematics.
        I expect to graduate in May 2027. My work spans Kotlin test automation at Amazon,
        resource-constrained agent runtimes, distribution-shift research, distributed forecasting,
        and cloud services.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Amazon",
        timeframe: "June 2026 - August 2026",
        role: "Software Development Engineer Intern",
        location: "Bellevue, WA",
        achievements: [
          <>
            Designed and productionized 105+ AI-generated native Kotlin UI tests covering the two largest
            screens on Amazon Flex (400K+ users), replacing manual suites in a daily release pipeline
            used by 40+ engineers.
          </>,
          <>
            Built reusable Kotlin UI-test infrastructure and agent workflows with workspace-aware
            navigation and actionable failure diagnostics, reducing repetitive setup, prompting,
            and manual intervention.
          </>,
          <>
            Standardized test execution, resolved framework limitations, and implemented workarounds, reducing a 40-test
            validation cycle from 8 hours of manual testing to at most 20 minutes of automated testing.
          </>,
        ],
        images: [],
      },
      {
        company: "Duality Lab",
        timeframe: "January 2026 - May 2026",
        role: "Undergraduate Researcher (ML Systems)",
        location: "Purdue University",
        achievements: [
          <>
            Led a 5-person team to build a resource-constrained agent runtime for OpenSWE,
            enforcing token, tool-call, and wall-clock budgets during execution.
          </>,
          <>
            Implemented policy-driven model routing and graceful degradation, recovery policies
            across 12+ failure categories, and structured per-node telemetry for observability.
          </>,
          <>
            Presented this research at GCASR 2026 and the Purdue Spring Research Expo.
          </>,
        ],
        images: [],
      },
      {
        company: "Privacy-Preserving Machine Learning Lab",
        timeframe: "August 2025 - December 2025",
        role: "Undergraduate Researcher (Machine Learning)",
        location: "Purdue University",
        achievements: [
          <>
            Developed PyTorch-based out-of-distribution (OOD) detection for distribution shift;
            evaluated AUROC, FPR@95, and conformal prediction for uncertainty estimation and
            failure detection.
          </>,
          <>
            Modularized research code into reusable libraries and evaluation harnesses,
            standardized outputs, and built reproducible two-stage Apptainer (Singularity)
            containers for consistent benchmarking.
          </>,
          <>
            Built and productionized OOD detection components in PyTorch to improve model reliability
            under distribution shift, validating results via AUROC and FPR@95 metrics.
          </>,
          <>
            Rapidly onboarded to new ML frameworks and infrastructure under tight timelines, and
            refactored monolithic research code into importable libraries for a large-scale ML
            evaluation pipeline; created robust normalization layers to handle heterogeneous
            outputs from disparate upstream models.
          </>,
          <>
            Applied Responsible AI principles (robustness, uncertainty estimation, failure detection)
            via conformal prediction and OOD detection; built evaluation harnesses to validate OOD
            detection behavior across distribution shifts.
          </>,
          <>
            Architected a two-stage Apptainer (Singularity) container system for cluster deployment,
            ensuring deterministic reproducibility across 25+ build iterations.
          </>,
          <>
            Presented this research at the Purdue Fall Research Expo.
          </>,
        ],
        images: [],
      },
      {
        company: "Retailmind (Stealth Startup)",
        timeframe: "June 2025 - August 2025",
        role: "Software Engineering Intern (Distributed Systems)",
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
          <>
            Architected a distributed, multithreaded backend processing data across
            45 stores and 4,500+ store-department entities.
          </>,
          <>
            Designed asynchronous pipelines that maintained availability under
            compute-intensive peak loads.
          </>,
          <>
            Engineered a hierarchical forecasting service with sub-300ms inference latency
            across multiple model backends, using Prophet and AutoGluon.
          </>,
        ],
        images: [],
      },
      {
        company: "Indegene",
        timeframe: "June 2024 - August 2024",
        role: "Software Engineering Intern in Chief Technology Operations",
        location: "Karnataka, India",
        achievements: [
          <>
            Engineered a Retrieval-Augmented Generation pipeline to analyze multi-hundred-page pharmaceutical regulatory documents, significantly reducing manual review time for domain experts.
            Built the pipeline as a Python microservice using NLP and OpenAI for compliance review.
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
        timeframe: "August 2023 - May 2027 (expected)",
        description: <>Bachelor of Science (B.S.) in Computer Science Honors.</>,
        details: [
          <>Concentrations: Software Engineering and Machine Intelligence. Minor in Mathematics.</>,
          <>Coursework: Analysis of Algorithms, Competitive Programming, Systems Programming, Data Mining &amp; ML, Statistical Methods, and Robotics.</>,
          <>Activities: Teaching Assistant for Analysis of Algorithms; Developer for Hello World, Purdue&apos;s largest hackathon.</>,
          <>Achievements: AMD Track at StarkHacks; Alpha Lambda Delta Honor Society; Dean&apos;s List.</>,
        ],
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>C++, Java, Python, C, Kotlin, SQL, TypeScript, JavaScript, Bash, Swift, C#, HTML/CSS.</>,
        images: [],
      },
      {
        title: "Systems & Backend",
        description: <>Linux, FastAPI, Node.js, Redis, REST APIs, Gradle, Git, Flex/Bison (Lex/Yacc), x86-64 Assembly.</>,
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: <>Docker, Google Cloud Platform (GCP), Cloud Run, Cloud Build, CI/CD, Kubernetes, Ansible, Jenkins, Apptainer (Singularity).</>,
        images: [],
      },
      {
        title: "Machine Learning & Data",
        description: <>PyTorch, Hugging Face, Pandas, NumPy, LangChain, FinBERT, Prophet, AutoGluon, RAG.</>,
        images: [],
      },
      {
        title: "Web & Tools",
        description: <>React, Vite, Flask, LaTeX.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software and machine learning",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Experience & Projects – ${person.name}`,
  description: `Software engineering and ML systems experience at Amazon and Purdue research labs, plus projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
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
      src: "/images/gallery/horizontal-4.jpeg",
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
      src: "/images/gallery/vertical-4.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

// Resume link to the public PDF asset.
const resume = {
  path: "/resume.pdf",
  label: "Resume",
  display: true,
};

export { person, social, newsletter, home, about, blog, work, gallery, resume };
