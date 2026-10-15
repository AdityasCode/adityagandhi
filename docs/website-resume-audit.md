# Website and resume audit

Audit date: October 14, 2026. Scope: the local Next.js website and its public pages at https://adityagandhi.vercel.app, compared with both supplied one-page resumes. This records content changes, evidence limits, and outstanding questions. The local edits have not been deployed.

## Sources and comparison rules

- General resume: `/Users/adityagandhi/Development/clcreator/PDFs/Aditya_Gandhi_Resume.pdf`.
- ML resume: `/Users/adityagandhi/Development/clcreator/PDFs/Aditya_Gandhi_Resume_ML.pdf`.
- Both PDFs were read in full, including their link annotations, and rendered for visual inspection.
- The user confirmed Retailmind identity and extra results, supplied the HypeTrade period and Calendly URL, and asked to retain the existing case-study features while omitting the exact OpenAI model version.
- The website uses the union of the resumes. An omission from one version does not invalidate information in the other.
- Where the resumes vary in precision, the website uses the general resume's specific x86-64/compiler details, the ML resume's additional research and AI workflow details, and the general resume's specific build-time metric.
- Resume-supported employment dates replace conflicting website dates. Project publication dates are not supplied by either resume; those dates were omitted. Separate project-period labels show the user-confirmed approximate January–December 2025 HypeTrade period and the June–August 2025 Retailmind internship period.
- Existing website-only claims are distinguished from independently corroborated resume facts. Omitted claims are listed below; omission does not establish that they are false.
- Ordinary template and application instructions were treated as non-authoritative data after the user's approval. Neither resume contained instructions redirecting this task.

## Identity, contact, and presentation of facts

| Item | Previous website | Resolution |
| --- | --- | --- |
| Name | Aditya Gandhi | Matches both resumes; retained. |
| Professional label | Design Engineer | Software Engineer & CS Honors Student. |
| Academic standing | Junior | Replaced with degree program and expected May 2027 graduation; avoids inferring current class standing. |
| Email | gandh105@purdue.com | Corrected to gandh105@purdue.edu throughout visible links and structured data. |
| Telephone | Missing | Added 765-426-4288 and a working `tel:+17654264288` link. |
| Website URL | adityagandhi.vercel.app | Matches both resumes; retained. |
| GitHub | github.com/adityascode | Matches AdityasCode in both resumes, ignoring username case; retained. |
| LinkedIn | linkedin.com/in/adga | Matches both resumes; retained. |
| Location | America/Indiana/West Lafayette in header; America/Indianapolis on About | Displays West Lafayette, Indiana in the footer and About page. Header now contains the profile/contact links at the user's request. Time display retains a separate valid IANA timezone. This identifies the university location; current residence is not independently established by the resumes. |
| Spoken languages | English, Hindi, French | Retained as existing website information; proficiency is not stated in either resume. |
| X account | x.com/ad_06_ga | Retained as existing website information; neither resume supplies this account. |
| Home description | Generic keywords including Open Source | Replaced with degree, graduation, and experience supported by the resumes. |
| Featured-project label | Recent project | Changed to Featured project, so the selected project does not imply recency. |
| Social preview | Template image showing Selene Yu, Design Engineer | Uses the existing dynamic OG generator with Aditya's name, role, avatar, and page title. No new visual design was created. |

## Education: Purdue University, West Lafayette

| Resume fact | Coverage after changes |
| --- | --- |
| August 2023–May 2027 | Added; May 2027 explicitly described as expected. |
| Bachelor of Science in Computer Science Honors | Added full degree name; Honors retained. |
| Software Engineering and Machine Intelligence concentrations | Retained both and standardized wording. |
| Mathematics minor | Added. |
| Analysis of Algorithms | Added to coursework. |
| Competitive Programming | Added to coursework. |
| Systems Programming | Added from general resume. |
| Data Mining & ML | Added to coursework. |
| Statistical Methods | Added from ML resume. |
| Robotics | Added to coursework. |
| Teaching Assistant, Analysis of Algorithms | Added. No unsupported dates or additional duties inferred. |
| Hello World developer; Purdue's largest hackathon | Added as stated in both resumes. |
| AMD Track at StarkHacks | Added verbatim in substance; no prize, placing, or winner status inferred. |
| Alpha Lambda Delta Honor Society | Added. |
| Dean's List | Added. |

## Experience

| Role / fact | Previous website | Coverage after changes |
| --- | --- | --- |
| Amazon: Software Development Engineer Intern | Missing | Added June–August 2026, Bellevue, WA. |
| Amazon: 105+ AI-generated native Kotlin UI tests | Missing | Added; covers the two largest Amazon Flex screens. AI-generation detail comes from ML resume. |
| Amazon Flex: 400K+ users | Missing | Added as product user count, not a personal user-acquisition result. |
| Amazon: daily release pipeline used by 40+ engineers | Missing | Added. |
| Amazon: reusable Kotlin infrastructure and agent workflows | Missing | Added workspace-aware navigation, failure diagnostics, and reduced setup/prompting/manual intervention. |
| Amazon: 40-test cycle, 8 hours to at most 20 minutes | Missing | Added with manual-testing and automated-testing qualifiers. |
| Duality Lab: Undergraduate Researcher | Missing | Added January–May 2026, Purdue University. Uses ML Systems specialty from ML resume; Systems in general resume describes the same work. |
| Duality Lab: led five-person team | Missing | Added. |
| Duality Lab: OpenSWE resource/cost-constrained agent runtime | Missing | Added with token, tool-call, and wall-clock budgets enforced during execution. |
| Duality Lab: routing, degradation, recovery, observability | Missing | Added policy-driven model routing, graceful degradation, 12+ failure categories, and structured per-node telemetry. |
| Privacy-Preserving Machine Learning Lab | Missing | Added August–December 2025, Undergraduate Researcher (Machine Learning), Purdue University; source is ML resume. |
| Privacy lab: PyTorch OOD detection | Missing | Added distribution shift, AUROC, FPR@95, and conformal prediction for uncertainty/failure detection. |
| Privacy lab: reproducible evaluation | Missing | Added reusable libraries, evaluation harnesses, standardized outputs, two-stage Apptainer/Singularity containers, and benchmarking. |
| Retailmind employer | Stealth Startup | Uses **Retailmind (Stealth Startup)** as explicitly requested. The user confirmed the employer/project mapping. |
| Retailmind dates | July–August 2025 | Corrected to June–August 2025. |
| Retailmind title | AI Engineer Intern | Corrected to Software Engineering Intern (Distributed Systems). |
| Retailmind distributed backend | Agent-centric narrative | Added distributed, multithreaded processing across 4,500+ store-department entities and retained the user-confirmed 45 stores. |
| Retailmind availability | Incomplete | Added asynchronous pipelines maintaining availability under compute-intensive peak loads. |
| Retailmind hierarchical forecasting | 60% accuracy improvement; MinT | Retained after user confirmation; added resume-supported multi-backend forecasting, Prophet, AutoGluon, and sub-300ms inference. Also retained confirmed causal analysis using vector search. |
| Retailmind latency | Sub-300ms responsive UI | Preserved the original multi-tool-agent/UI responsiveness description, alongside the distinct resume-supported forecasting inference measurement. |
| Indegene dates | May–July 2024 | Corrected to June–August 2024. |
| Indegene title | Software Engineering Intern in Chief Technology Operations | Full original title and department retained; resume-supported dates corrected separately. |
| Indegene location | Missing | Added Karnataka, India, expanding resume abbreviation KA. |
| Indegene regulatory-document analysis | RAG narrative | Original pharmaceutical-document and domain-expert review detail retained, with Python microservice, NLP, OpenAI, and compliance-review details added. |
| Indegene article generation | Present | Retained Excel-to-source-backed-article workflow, which is supported by general resume. |

## Projects

| Project / fact | Previous website | Coverage after changes |
| --- | --- | --- |
| HypeTrade card summary | Unrelated Next.js/Figma design-system text | Replaced with stock sentiment platform, cloud backend, scale, and cost reduction. |
| HypeTrade date | April 8, 2024 | Removed false publication date. Shows user-confirmed approximate January–December 2025 project period, with the latter half spent on Firestarter and preparation. |
| HypeTrade cloud/backend | Mostly present in body | Explicit FastAPI/Python services, GCP Cloud Run, Redis, Docker, React. |
| HypeTrade performance | API and UI claims conflated | Retains 500+ concurrent users, 99% uptime, and sub-300ms API responses; removes claim of sub-300ms page rendering. |
| HypeTrade leadership | Scrum Master without all context | Adds six developers, Purdue pre-incubator, sprints, and DevOps practices. |
| HypeTrade product features | Authentication, portfolios, messaging, real-time forum, and additional site-only features | Retained resume-supported features and user-confirmed Vertex AI, Hugging Face integration, Gemini chatbot, top-20 S&P 500 tracking, twice-daily Reddit scraping, paused sentiment emails, and 2FA. |
| HypeTrade CI/CD | General delivery narrative | Explicit Cloud Build container deployment automation and 90% shorter build time. ML resume says deployment time; general resume supplies the narrower build-time definition. |
| HypeTrade FinBERT | Present | Retains dynamic batching, 500+ daily tickers, and 56% lower model-serving costs. Does not equate this with all hosting or API costs. |
| HypeTrade technologies | Mixed body narrative | Consolidates resume technologies plus existing Vite/Hugging Face information. |
| RetailMind card summary | Unrelated spaces-versus-tabs text | Replaced with retail analytics, distributed processing, and hierarchical forecasting. |
| RetailMind date | April 1, 2024 | Removed false publication date. Project period uses the confirmed internship dates, June–August 2025. |
| RetailMind backend results | Missing from project page | Added 4,500+ entities, 45 stores, multithreading, async availability, multiple forecasting backends, and sub-300ms inference. User confirmed that this is the internship project. |
| RetailMind model identity | GPT-4o in features, GPT-4o-mini in tools | Uses OpenAI without an exact model version, as requested. |
| RetailMind frontend | Streamlit dashboard and conversational analytics | Retained user-confirmed conversational memory, more than a dozen tools, and Sentence-Transformers, along with dashboard and causal-analysis details. |
| Systems Programming | Missing | Added a third case study; no date or repository URL invented. |
| Compiler | Missing | Single-pass SimpleC-to-x86-64 compiler with Lex/Yacc; expressions, arrays, functions, and control flow. Uses precise general-resume description over abbreviated ML wording. |
| Unix shell | Missing | Flex/Bison parsing, pipelines, I/O redirection, background processes, built-ins, subshells, expansions, signals, history. |
| Systems overview | Missing | Includes compilation, memory allocation, process management, control flow, and signals across projects, without attributing every feature to every component. |
| Assembly utilities | Missing | x86-64 heap sort with recursive heapify, frame-pointer stack unwinding with signal handlers, hexadecimal memory/file dump utilities. |
| Project links | Relative `work/...` links | Root-relative `/work/...` links work when clicked from both Home and Work. |
| Project imagery | Existing project screenshots | Retained. New systems case study has no fabricated screenshot. |

## Complete skills coverage

The hidden template Figma/Next.js claims were replaced with a visible section. The following is the union of both resumes, including technologies named in experience/project bullets:

| Group | Website coverage |
| --- | --- |
| Languages | C++, Java, Python, C, Kotlin, SQL, TypeScript, JavaScript, Bash, Swift, C#, HTML/CSS. |
| Systems and backend | Linux, FastAPI, Node.js, Redis, REST APIs, Gradle, Git, Flex/Bison (Lex/Yacc), x86-64 Assembly. |
| Cloud and infrastructure | Docker, GCP, Cloud Run, Cloud Build, CI/CD, Kubernetes, Ansible, Jenkins, Apptainer (Singularity). |
| ML and data | PyTorch, Hugging Face, Pandas, NumPy, LangChain, FinBERT, Prophet, AutoGluon, RAG; NLP and OpenAI appear in experience/project descriptions. |
| Web and tools | React, Vite, Flask, LaTeX. |

## Download, incomplete features, and metadata

| Item | Resolution |
| --- | --- |
| Resume asset | Replaced `public/resume.pdf` with the supplied general PDF without modifying the document. SHA-256: `80d888ea144b59bab33e12bd6f5de58b45c122a1eeadfa1481677572bdc7e37f`. |
| Existing modified PDF | Preserved before replacement at `/tmp/aditya-website-resume-before-update.pdf`; unrelated `.idea` changes and `tmp.py` were left untouched. |
| Resume navigation | Uses same-origin `/resume.pdf`, honors the display flag, has a descriptive accessible label, and includes a mobile icon. The old absolute URL could send a local/preview visitor to the old production PDF. |
| Scheduling | Replaced generic cal.com link with user-provided `https://calendly.com/adityagandhi/new-meeting-1`; scheduling control remains enabled. |
| Newsletter | Disabled because action was `https://url/subscribe/post?parameters`; does not currently establish a functioning subscription workflow. |
| Blog | No published posts exist under the loader's `blog/posts` directory. Disabled empty route and homepage section; archived template tutorials remain unpublished. |
| Gallery | Restored after the user clarified that these are their gallery photos. The earlier placeholder assumption was incorrect. Removed stale template comments; gallery route, navigation, and sitemap inclusion are enabled. |
| Phantom GitHub route | Removed `/GitHub` entry; no matching page existed. Actual GitHub profile links remain. |
| Sitemap | Reflects enabled pages and all three project case studies; omits unsourced publication dates. |
| Structured data | Correct email/phone/role; social profiles are URL strings rather than objects. Removed an uncorroborated Purdue home-page identity link. Fixed duplicate-domain image URLs. |
| Page titles | Removed hard-coded layout `<title>` so individual page metadata supplies the appropriate title. |

## Confirmations and remaining evidence limits

1. The user confirmed that Retailmind is the former Stealth Startup and requested the exact display name **Retailmind (Stealth Startup)**. The RetailMind case study represents this work.
2. The user confirmed the 45-store count, more-than-60% forecasting-accuracy improvement, MinT reconciliation, and causal-analysis work. These details appear alongside the resume metrics. The accuracy claim remains relative to baseline models; no particular dataset or accuracy formula was invented.
3. The user supplied approximately January–December 2025 for HypeTrade, with the latter half spent taking it through Firestarter and preparing it. The site labels this as a project period rather than a publication date. RetailMind's project period follows the confirmed internship dates.
4. The user supplied the Calendly URL now used by the scheduling control.
5. The user explicitly requested retaining HypeTrade's Vertex AI deployment, Gemini chatbot, twice-daily Reddit scraping, paused sentiment emails, top-20 S&P 500 tracking, and 2FA, plus RetailMind's conversational memory, 12+ tools, and Sentence-Transformers. These are supported by user confirmation rather than by the resumes alone.
6. The user requested omitting the exact OpenAI model version; the old GPT-4o/GPT-4o-mini inconsistency is resolved without guessing.
7. After the user objected to lost detail, the original project narratives and outcome descriptions were restored, including hosting/proxy context and manual-analysis time comparisons. These remain existing website claims; they are not independently certified by the resume comparison.
8. Existing English/Hindi/French proficiency, X account, current physical location, and continued availability of external project demos cannot be verified from the resumes. Existing account and language information was retained; no proficiency level was added.
9. This audit checks consistency with the supplied resumes and user confirmations. It does not independently certify employment, metrics, awards, or project operations.

## Validation

- `tsc --noEmit --incremental false`: passed.
- Final `npm run build`: completed successfully with all 16 static pages generated, including all three project case studies. Existing Google Fonts required network access for the build.
- Changed JS/TS files: passed ESLint using an isolated flat configuration loading the installed Next.js core-web-vitals rules. The repository's existing `.eslintrc.json` integration still reports a circular-configuration error with the installed ESLint/config versions; project tooling was left unchanged.
- Desktop browser: verified the Home, About, Work, and three case-study pages, including corrected project links, dates/periods, confirmed metrics, and full content visibility.
- Mobile browser at 390 × 844: verified About content, no horizontal overflow, visible resume navigation, and the exact Calendly URL. Temporary viewport override was reset.
- Rendered content checks: all selected resume facts, roles, research metrics, education details, and skill groups were present; old email, junior label, 2024 project dates, unrelated project summaries, and exact GPT model claims were absent.
- Metadata: one correct title per checked page; valid OG image URLs; correct email/phone; social-profile URL strings. The generated replacement OG image returned HTTP 200 with PNG content.
- Production HTTP checks: Home, About, Work, all three case studies, resume PDF, sitemap, and robots returned HTTP 200 with appropriate content types.
- Disabled Blog: not-found content, explicit Page Not Found title, and `noindex, nofollow` metadata verified. The existing client route guard/streaming structure returns HTTP 200 for this disabled route; it is removed from navigation and the sitemap and explicitly excluded from indexing. Gallery has since been restored at the user's request.
- Served `/resume.pdf`: SHA-256 exactly matches the supplied general PDF, not merely its text or filename.
- Sitemap: includes Gallery and the systems case study; excludes Blog, the phantom GitHub route, and unsourced publication dates.
- Whitespace check: `git -c core.whitespace=cr-at-eol diff --check` passed, allowing the repository's existing CRLF source files.
- Local production preview is running at `http://127.0.0.1:3000`. No commit, push, or deployment was performed.

## Design follow-up

- Give the homepage a concise introduction to Amazon experience and the systems/ML focus, with a direct path to the experience section.
- Implemented after the user's follow-up approval: compact highlight rows on Home and Work cards and on individual case studies. HypeTrade shows 500+ concurrent users, 56% lower model-serving costs, and 90% shorter build time. RetailMind shows 4,500+ store-department entities, <300ms forecasting inference, and >60% accuracy gain versus baseline. Systems Programming shows confirmed compiler, shell, and assembly capabilities without invented outcome metrics.
- Group the longer About page into clearly scannable experience and education sections, with optional expansion for technical detail.

The existing fonts, colors, effects, and project screenshots were preserved. The user-approved rows use shared semantic definition lists and existing typography/color tokens, with a narrow-screen spacing adjustment. Other design suggestions remain unimplemented.

Metric-row verification: type checking and standalone lint passed; production build completed with the previously documented ESLint integration issue. Browser checks found three rows on Home and Work and one on each case-study page. All three sets of values were inspected at 390px and 1280px widths, with no metric text overflow. The temporary viewport override was reset.


## Gallery restoration and header/footer swap

The user corrected the earlier assumption about gallery ownership. The existing gallery and all eight images are restored, along with navigation, normal gallery metadata, and sitemap inclusion. Stale placeholder/photographer comments were removed; the original image assets were preserved. Two files with `.jpg` names actually contain HEIC data and failed in the browser. Added JPEG versions (`horizontal-4.jpeg` and `vertical-4.jpeg`) and pointed the gallery at those new paths, also avoiding previously cached HEIC responses.

The five former footer links (GitHub, LinkedIn, X, email, and phone) now occupy the header's location section. The location occupies their former footer section. Copyright, Once UI attribution, and the desktop clock remain. At mobile sizes, the links form a row above the existing bottom navigation; tablet navigation uses icons to leave room for the links.

Verification for this follow-up: all eight gallery photos decoded in the browser; the restored page has its gallery title and no noindex tag; Gallery appears in navigation and the sitemap. Header contains all five profile/contact links and no location text; footer contains the location and retains only the Once UI attribution link. Layout checked at 1280px, 900px, and 390px widths with no horizontal overflow and all five header links visible. Type checks and standalone lint passed; production build completed with the previously documented ESLint integration error unchanged.


## Gallery loading report, featured experience, and scheduling follow-up

The user reported blank/missing gallery photos. In both inspectable tabs before this follow-up, all eight images had decoded and were visible in the DOM, so the reported failure was not reproduced and its exact cause remains unconfirmed. The gallery's masonry implementation, column breakpoint, photo order, and aspect ratios were unchanged by the earlier edits. Earlier gallery changes were enabling the route again, removing stale template comments, and using real JPEG copies of the two HEIC files.

The gallery now bypasses Next.js runtime image optimization (`unoptimized`) and serves the eight valid JPEG URLs directly. Only the first two images are prioritized; the remainder load as the visitor approaches them. All eight direct URLs returned HTTP 200 and decoded successfully as JPEGs, and a fresh browser reload followed by scrolling confirmed eight loaded images. This removes the optimizer/cache dependency without asserting that it was the proven cause of the user's earlier blank images.

Amazon, Duality Lab, and the Privacy-Preserving Machine Learning Lab now appear as visible experience sections on Home and Work, before the project list. They reuse the About page's dates, titles, locations, and achievement bullets through a shared featured-experience component. Work's heading and metadata now describe experience and projects.

Scheduling was enabled on About using the supplied Calendly URL, but only the small arrow was an anchor. A shared scheduling control now makes the whole button clickable on Home, About, and Work: `https://calendly.com/adityagandhi/new-meeting-1`.

Validation: type checking and standalone lint passed; production build completed with the previously documented ESLint integration error. Home and Work show all three roles at desktop and 390px mobile widths without horizontal overflow. All three pages have a full-sized scheduling anchor pointing to the exact supplied URL.


## Full-detail restoration

The user objected to role detail being condensed. The original Retailmind achievements are restored verbatim, including the natural-language analytics/KPA/visualization detail, novel vector-search causal inference, automatic root-cause identification, multithreaded multi-tool agent/UI responsiveness, and MinT implementation from the ground up. Distributed backend, asynchronous availability, Prophet/AutoGluon, and forecasting-inference details from the resumes remain in additional bullets. Indegene retains the full Chief Technology Operations title, original pharmaceutical-document/domain-expert review detail, and Excel-to-sourced-article description, with the resume's Python microservice, NLP, OpenAI, and compliance context added. Amazon and both lab descriptions retain all previously added resume details.

Home and Work now render all five experience records from the shared About data, without the three-role selection filter. The full HypeTrade and RetailMind case-study narratives, feature descriptions, technologies, challenges, learnings, and outcomes are restored. The corrected project periods and quantitative definitions remain; the exact OpenAI model version remains omitted as requested.

Source comparison confirms all six original role bullets are present in full. It also confirms all 21 original HypeTrade content lines and all 22 original RetailMind content lines remain, allowing only the explicit metric-wording/GPT-version corrections and additive technology details. Type checking and standalone lint passed.

Rendered verification after restoration: all six original role bullets were found in full on Home, Work, and About; all five roles and the added resume details are present on all three pages. Both case studies render the restored feature, technology, challenges/learnings, and outcome sections. The Work page was checked at 390px with all five roles and no horizontal overflow. Production build completed with the existing ESLint integration issue unchanged.


## Research presentations and additional PPML context

The user supplied additional facts directly. Duality Lab now credits presentation at GCASR 2026 and the Purdue Spring Research Expo. PPML now credits presentation at the Purdue Fall Research Expo; no expo year, paper title, authorship claim, or award was inferred.

All four supplied PPML points were added: productionized PyTorch OOD components and AUROC/FPR@95 validation; rapid onboarding, monolithic-code refactoring into importable libraries for a large-scale ML evaluation pipeline, and robust normalization for heterogeneous upstream model outputs; Responsible AI robustness/uncertainty/failure-detection work through conformal prediction, OOD detection, and distribution-shift evaluation harnesses; and a two-stage Apptainer/Singularity cluster-deployment system with deterministic reproducibility across 25+ build iterations. Existing lab descriptions were retained. Shared experience data makes these additions visible on Home, Work, and About.

Rendered verification: every new presentation credit and PPML detail was found on Home, Work, and About, and all six original role bullets remain on each page. Type checks and standalone lint passed; production build completed with the previously documented ESLint integration issue unchanged.
