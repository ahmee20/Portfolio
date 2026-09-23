// Content ported verbatim from ahmee20/ahmad-mehmood-portfolio (src/lib/portfolio-data.ts)

export const PROFILE = {
  name: "Muhammad Ahmad Mehmood",
  short: "Ahmad Mehmood",
  role: "AI Engineer",
  focus: ["Agentic AI", "LLM Systems", "Workflow Automation"],
  location: "Islamabad, Pakistan | Remote",
  email: "ahmad.shahid.ds@gmail.com",
  github: "https://github.com/ahmee20",
  linkedin: "https://www.linkedin.com/in/muhammad-ahmad-236973359/",
  status: "Open to opportunities",
  intro:
    "AI Engineer specializing in agentic systems, LLM integration, ML/DL, and production workflow automation. I build end-to-end solutions including voice agents, multi-agent pipelines, ML/DL systems, and API-connected workflows with Python, LangGraph, LangChain, FastAPI, and n8n, from architecture through deployment.",
  highlights: [
    "AI Engineer specializing in agentic systems, LLM integration, ML/DL, and production workflow automation.",
    "Experienced in end-to-end solutions: voice agents, multi-agent pipelines, ML/DL systems, and API-connected workflows using Python, LangGraph, LangChain, FastAPI, and n8n.",
    "Comfortable taking projects from architecture through deployment, with additional depth in ML/DL, NLP and computer vision.",
    "Dean's List graduate in Data Science from FAST-NUCES, Islamabad.",
  ],
};

export const STATS = [
  { label: "Shipped projects", value: "9+" },
  { label: "Agentic AI projects", value: "9" },
  { label: "ML / DL projects", value: "10+" },
  { label: "Research / side projects", value: "5" },
];

export const TAG_LABELS = {
  PW: "Professional Work",
  AP: "Academic Projects",
  AR: "Academic Research",
  SP: "Side Project",
};

export const ALL_TAGS = ["PW", "AP", "AR", "SP"];

export const GROUPS = [
  {
    slug: "agentic-ai",
    index: "01",
    name: "Agentic AI",
    count: "9 projects",
    description:
      "Automation, voice agents and multi-step AI workflows built for real business processes.",
  },
  {
    slug: "ml-dl-engineering",
    index: "02",
    name: "ML / DL Engineering",
    count: "10+ projects",
    description:
      "Predictive systems, deep learning, recommendation engines and computer-vision work.",
  },
  {
    slug: "ai-full-stack",
    index: "03",
    name: "AI Full-Stack",
    count: "2 projects",
    description: "Web products and interfaces connected to AI systems.",
  },
  {
    slug: "c-plus-plus-projects",
    index: "04",
    name: "C++ Projects",
    count: "3 projects",
    description: "Systems fundamentals, academic engineering and core CS work.",
  },
  {
    slug: "academic-research",
    index: "05",
    name: "Academic Research",
    count: "2 projects",
    description:
      "Research-led AI work spanning agentic systems, generative modeling and structured analysis.",
  },
  {
    slug: "side-projects",
    index: "06",
    name: "Side Projects",
    count: "3 projects",
    description: "Independent prototypes and experimentation beyond coursework.",
  },
];

export const PROJECTS = [
  {
    id: "rag-document-summarizer",
    title: "RAG Document Summarizer",
    groups: ["agentic-ai"],
    tags: ["SP"],
    why: "Built to provide fast, high-quality document summarization and interactive exploration over long texts.",
    what:
      "A RAG-powered document summarization system featuring semantic chunking, SentenceTransformers vector embeddings, ChromaDB storage, BART-large-CNN summarization, and WebSocket-based live processing in an interactive web interface.",
    tech: ["Python", "Flask", "RAG", "ChromaDB", "SentenceTransformers", "HuggingFace", "BART", "SocketIO"],
    repo: "https://github.com/ahmee20/Document_Summarization_RAG",
  },
  {
    id: "ai-receptionist",
    title: "AI Voice Receptionist / Calling Agent",
    groups: ["agentic-ai"],
    tags: ["PW"],
    why: "Built at Tashi Technologies to fully automate appointment scheduling for a business client.",
    what:
      "Handles inbound calls, checks real-time availability, books appointments, updates records and sends confirmations across ElevenLabs, Google Workspace, Twilio and n8n.",
    tech: ["Python", "n8n", "VAPI", "Twilio", "ElevenLabs", "Google Calendar", "Google Sheets", "Gmail"],
    repo: "https://github.com/ahmee20/Ai-Receptionist-Calling-Agent",
    live: "https://www.loom.com/share/180bcb4863c9433aa260a7bc5ba26a28",
    liveLabel: "Walkthrough",
  },
  {
    id: "voxyl-screener",
    title: "Voxyl Screener / Resume: automated application agent",
    groups: ["agentic-ai", "ai-full-stack"],
    tags: ["SP"],
    why: "Built to remove the repetitive work of tailoring an application to every single job posting.",
    what:
      "Scrapes relevant openings, adapts uploaded resumes to target roles, generates applications and holds them for user approval before sending, delivered as a full-stack product over a FastAPI backend.",
    impact:
      "Cut per-application work from 10 to 15 minutes to generating up to 12 tailored resumes and cover letters in approximately 3 minutes.",
    tech: ["Python", "FastAPI", "React", "TypeScript", "Tailwind CSS", "Apify", "Groq", "PostgreSQL", "Supabase"],
    repo: "https://github.com/ahmee20/voxyl-resume-parser",
    live: "https://voxyl-resume-parser-six.vercel.app/",
    liveLabel: "Live product",
  },
  {
    id: "whatsapp-chatbot",
    title: "WhatsApp Chatbot: appointments, CRM and follow-ups",
    groups: ["agentic-ai"],
    tags: ["SP"],
    why: "Built to run a business's WhatsApp channel end to end, from first question to post-visit feedback.",
    what:
      "Receives messages through the official WhatsApp Cloud API, answers customer queries from an Excel knowledge base of business services such as dental treatments or restaurant menus, books, reschedules and cancels appointments, syncs those changes with Google Calendar, updates HubSpot CRM, sends email confirmations and review or feedback follow-ups, and keeps past chats in Supabase memory. A React and CSS management dashboard reports total bookings, revenue, cancelled appointments and related results.",
    tech: [
      "Python",
      "WhatsApp Cloud API",
      "HubSpot",
      "Google Calendar",
      "Supabase",
      "React",
      "CSS",
      "Excel Knowledge Base",
      "Email Automation",
    ],
    repo: "https://github.com/ahmee20/WhatsApp-Chatbot",
  },
  {
    id: "storybook",
    title: "AI-Powered Personalized Storybook Generator",
    groups: ["agentic-ai"],
    tags: ["PW", "SP"],
    why: "Built to turn a child's traits and a short prompt into a complete illustrated storybook.",
    what:
      "Uses vision APIs and prompt orchestration to derive scene and character attributes, then builds a consistent multi-scene storytelling workflow with generated illustrations and PDF output.",
    tech: ["JavaScript", "OpenAI", "Face++", "Google Vision", "Cloudinary", "PDF.co"],
    repo: "https://github.com/ahmee20/Childrens-Story_Book-Generator",
  },
  {
    id: "dependency-auditor",
    title: "Agentic Dependency Security Auditor",
    groups: ["academic-research", "agentic-ai"],
    tags: ["SP", "AR"],
    why: "Built to make dependency risk auditing deterministic instead of a manual, ad-hoc review.",
    what:
      "Uses approved tools plus generated task-specific tooling to trace dependency risk, cross-reference PyPI and OSV, and keep full operational evidence of every decision.",
    tech: ["Python", "LangGraph", "LangSmith", "Pydantic", "PyPI API", "Tavily"],
    repo: "https://github.com/ahmee20/Dependency-Aware-Auditing",
  },
  {
    id: "launchmind",
    title: "LaunchMind: multi-agent product planning",
    groups: ["agentic-ai"],
    tags: ["SP"],
    why: "Built to explore how agents coordinate around planning tasks without losing traceability.",
    what:
      "A workflow-driven planning and knowledge orchestration system where agents share tasks, tool usage and decisions under structured execution.",
    tech: ["Multi-Agent", "LLM", "Python", "Workflow Design", "Automation"],
    repo: "https://github.com/ahmee20/launchmind-skillbridge",
  },
  {
    id: "personal-voice-agent",
    title: "Personal Voice Agent",
    groups: ["agentic-ai", "side-projects"],
    tags: ["SP"],
    why: "Built as a personal assistant experiment for hands-free task automation.",
    what:
      "Explores command recognition, conversational intent handling and AI-driven workflow execution in a personal productivity context.",
    tech: ["Python", "Voice AI", "Automation", "AI Agents"],
    repo: "https://github.com/ahmee20/personal-voice-agent",
  },
  {
    id: "voice-agent-assessment",
    title: "Voice Agent (Assessment Build)",
    groups: ["agentic-ai", "side-projects"],
    tags: ["SP"],
    why: "Built as a timed technical assessment on conversational agent design.",
    what:
      "Creates a voice interaction flow that interprets user intent from speech and responds with structured actions.",
    tech: ["Voice AI", "LLM", "Python", "Automation"],
    repo: "https://github.com/ahmee20/Voice-Agent",
  },
  {
    id: "whatsapp-router",
    title: "WhatsApp Message Router",
    groups: ["agentic-ai", "side-projects"],
    tags: ["SP"],
    why: "Built during a hackathon to cut manual triage of high-volume inbound messages.",
    what:
      "Classifies incoming WhatsApp messages with an LLM workflow and routes each to the right handling pathway.",
    tech: ["Python", "LLM", "Messaging", "Automation", "Workflow Design"],
    repo: "https://github.com/ahmee20/Whatsapp-Message-Notification-Router",
  },
  {
    id: "sentraq",
    title: "SentraQ: AI video content moderation",
    groups: ["ml-dl-engineering"],
    tags: ["PW", "AP"],
    why: "Final-year industry project with AJCL, addressing the need for scalable automated moderation of video content.",
    what:
      "Detects offensive language and hate speech in video using NLP, computer vision and speech-to-text with fine-tuned transformers at 81% accuracy, backed by an ingest → transcribe → inference → database ETL pipeline and dashboards for moderation events and team productivity.",
    impact: "2,850+ 2-minute videos moderated in a day.",
    tech: ["Python", "NLP", "Computer Vision", "Speech-to-Text", "Transformers", "ETL"],
    confidential: true,
  },
  {
    id: "music-recs",
    title: "Music Streaming & Recommendation Platform",
    groups: ["ml-dl-engineering"],
    tags: ["AP"],
    why: "Academic project exploring real-time recommendation systems at dataset scale.",
    what:
      "An ETL pipeline extracts audio features from 100,000+ tracks into MongoDB vectors, and a K-Means model on Spark MLlib drives Kafka-streamed personalized recommendations inside a Flask streaming app.",
    tech: ["Apache Spark", "Kafka", "MongoDB", "Flask", "K-Means", "Recommendation Systems"],
    repo: "https://github.com/ahmee20",
  },
  {
    id: "streetbot",
    title: "AI Streetbot: game-playing agent",
    groups: ["ml-dl-engineering"],
    tags: ["AP"],
    why: "Academic project on learned control policies in a competitive game environment.",
    what:
      "Trains a model to interpret street-fighter game states and predict actions, with its own data-collection loop for gameplay frames.",
    tech: ["Python", "TensorFlow", "Neural Networks", "Game AI", "Data Collection"],
    repo: "https://github.com/ahmee20",
  },
  {
    id: "tb-analysis",
    title: "TB Data Analysis & Visualization",
    groups: ["ml-dl-engineering"],
    tags: ["AP"],
    why: "Built to study tuberculosis trends in public-health data and make them legible.",
    what:
      "Applies analytical workflows, SQL querying and visualization to surface TB patterns and support data-driven insight generation.",
    tech: ["Python", "SQL", "Visualization", "Data Analysis", "Dashboards"],
    repo: "https://github.com/ahmee20/TB-Data-Analysis-and-Visualization",
  },
  {
    id: "mask-detector",
    title: "Real-Time Face Mask Detection",
    groups: ["ml-dl-engineering"],
    tags: ["AP"],
    why: "Built to run compliance-style vision detection live on commodity webcam input.",
    what:
      "Detects mask usage from a live camera feed through a CNN image-classification and detection pipeline in OpenCV.",
    tech: ["Python", "OpenCV", "TensorFlow", "CNN", "Computer Vision"],
    repo: "https://github.com/ahmee20/Real-Time_Face_Mask_Detector",
  },
  {
    id: "warehouse",
    title: "Near Real-Time Data Warehouse",
    groups: ["ml-dl-engineering"],
    tags: ["AP"],
    why: "Built to practice warehousing patterns where analytics can't wait for nightly batches.",
    what:
      "Implements ingestion and processing flows into an analytical warehouse, focused on flow design and timely operational reporting.",
    tech: ["Data Warehouse", "MySQL", "Java", "ETL", "Architecture"],
    repo: "https://github.com/ahmee20/Near-Real-Time-Data-Warehouse",
  },
  {
    id: "load-forecasting",
    title: "Electric Load Forecasting",
    groups: ["ml-dl-engineering"],
    tags: ["AP"],
    why: "Built to forecast electrical demand for capacity-planning decisions.",
    what:
      "Predicts future load patterns from historical demand series using time-series modeling and evaluation of forecast error.",
    tech: ["Python", "Time Series", "Forecasting", "ML", "Analytics"],
    repo: "https://github.com/ahmee20/Electric_Load_Forecasting",
  },
  {
    id: "cnn-benchmark",
    title: "CNN Architecture Performance Evaluation",
    groups: ["ml-dl-engineering"],
    tags: ["AP"],
    why: "Built to test how architectural choices actually change classification performance.",
    what:
      "Benchmarks multiple convolutional designs across the same task, comparing accuracy, efficiency and training behavior.",
    tech: ["Python", "CNN", "Evaluation", "Deep Learning", "Experimentation"],
    repo: "https://github.com/ahmee20/CNN-Architecture-Performance-Evaluation",
  },
  {
    id: "signature-verification",
    title: "ML Signature & Text Recognition Triad",
    groups: ["ml-dl-engineering"],
    tags: ["AP"],
    why: "Built to study separability of handwritten patterns across three linked recognition tasks.",
    what:
      "Combines classification, feature analysis and visual learning workflows over signature, text and MNIST data to compare model quality.",
    tech: ["Python", "Machine Learning", "Computer Vision", "Image Processing", "Evaluation"],
    repo: "https://github.com/ahmee20/ml-triad-signature-text-mnist",
  },
  {
    id: "ora-aesthetics",
    title: "Ora Aesthetics: client brand platform",
    groups: ["ai-full-stack"],
    tags: ["PW"],
    why: "Built for a client that needed a credible public brand presence plus operational access.",
    what:
      "A modern web experience for an aesthetics brand with a strong presentation layer and admin-style operational views.",
    tech: ["React", "Node.js", "Netlify", "UI/UX", "Full Stack"],
    live: "https://ora-aesthetic.netlify.app/",
    liveLabel: "Live site",
  },
  {
    id: "conditional-bicgan",
    title: "Conditional BI-DCGAN",
    groups: ["ml-dl-engineering", "academic-research"],
    tags: ["AR"],
    why: "Research into controllable generation: can class conditioning steer a GAN reliably?",
    what:
      "A conditional GAN setup that synthesizes class-directed images and tests generative behavior under structured constraints.",
    tech: ["PyTorch", "GANs", "Deep Learning", "Computer Vision"],
    repo: "https://github.com/ahmee20/Conditional_BI-DCGAN",
  },
  {
    id: "clause-similarity",
    title: "Clause Similarity: Siamese BiLSTM and Attention",
    groups: ["ml-dl-engineering"],
    tags: ["AP"],
    why: "Built to study clause-level semantic comparison for legal text.",
    what:
      "Uses a Siamese BiLSTM with attention to learn clause representations and score semantic closeness between text pairs.",
    tech: ["Python", "BiLSTM", "Attention", "NLP", "Text Similarity"],
    repo: "https://github.com/ahmee20/Clause-Similarity-with-Siamese-BiLSTM-and-Attention",
  },
  {
    id: "virtual-classroom",
    title: "Console-Based Virtual Classroom",
    groups: ["c-plus-plus-projects"],
    tags: ["AP"],
    why: "Coursework in structured system design with real object modeling.",
    what:
      "Models classroom operations and user roles as a console application, exercising OOP and software-design discipline in C++.",
    tech: ["C++", "Systems", "Software Design", "Academic"],
    repo: "https://github.com/ahmee20/Console-Based-Virtual-Classroom",
  },
  {
    id: "console-notepad",
    title: "Console-Based Notepad",
    groups: ["c-plus-plus-projects"],
    tags: ["AP"],
    why: "Coursework on file handling and terminal interaction fundamentals.",
    what:
      "A lightweight notepad-style editor in a console environment, covering buffers, file I/O and keyboard-driven workflow.",
    tech: ["C++", "OS Concepts", "Console Apps", "Engineering"],
    repo: "https://github.com/ahmee20/Console-Based-Notepad",
  },
  {
    id: "mapreduce",
    title: "MapReduce Implementation",
    groups: ["c-plus-plus-projects"],
    tags: ["AP"],
    why: "Operating-systems coursework on parallel task distribution.",
    what:
      "Implements MapReduce-style mapping, shuffling and aggregation to model distributed processing behavior from first principles.",
    tech: ["C++", "Distributed Systems", "MapReduce", "Algorithms"],
    repo: "https://github.com/ahmee20/OS_Mapper-Reducer",
  },
];

export const SKILLS = [
  {
    area: "AI / ML Engineering",
    items: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "LLM Systems",
      "RAG",
      "Time-Series Forecasting",
    ],
  },
  {
    area: "Agentic AI & Automation",
    items: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "n8n",
      "AI Voice Agents",
      "Chatbots",
      "WhatsApp Cloud API",
      "HubSpot CRM",
      "Google Calendar",
      "Workflow Automation",
      "API Integrations",
      "Multi-Agent Systems",
    ],
  },
  {
    area: "Data & Systems",
    items: [
      "SQL",
      "MongoDB",
      "MySQL",
      "Supabase",
      "Alchemy",
      "Google Cloud",
      "ETL",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Git",
    ],
  },
  {
    area: "Product & Interfaces",
    items: ["React", "TypeScript", "CSS", "Tailwind CSS", "Dashboards", "Flask", "Streamlit"],
  },
];

export const EXPERIENCE = [
  {
    company: "Tashi Technologies Corp (Pvt) Ltd.",
    role: "AI Automation Engineer",
    period: "Jun 2025 - Mar 2026",
    summary:
      "Architected and deployed agentic AI workflows integrating LLMs, voice agents, social platforms (Meta, X) and third-party APIs to automate end-to-end business processes, owning engineering standards from requirements gathering to production deployment.",
    impact: [
      "Architected and deployed AI workflows spanning LLMs, voice agents, social platforms and third-party APIs.",
      "Owned engineering standards from requirements gathering through production deployment.",
      "Automated end-to-end processes across scheduling, communication and data workflows.",
    ],
  },
  {
    company: "AJCL (Private) Limited",
    role: "Final-Year Industry Project",
    period: "Jul 2025 - Jun 2026",
    summary:
      "Built an AI video content-moderation platform using NLP, computer vision and speech-to-text to detect offensive language and hate speech at 81% accuracy, with real-time logging and dashboards for moderation events and team productivity.",
    impact: [
      "Built an end-to-end moderation platform on NLP, computer vision and speech-to-text pipelines.",
      "Enabled real-time activity logging and productivity dashboards for moderation operations.",
      "Delivered a production-style industry project with measurable business impact.",
    ],
  },
  {
    company: "Genesys Research Lab",
    role: "Computer Vision Research Assistant (Intern)",
    period: "Jun 2025 - Jul 2025",
    summary:
      "Worked on a CPEC-associated infrastructure monitoring pipeline using LiDAR data and YOLO-based defect detection, integrating GPS coordinates to visualize detected defects on maps.",
    impact: [
      "Developed a LiDAR + YOLO defect-detection pipeline for infrastructure assessment.",
      "Integrated GPS geospatial mapping to visualize defect locations for monitoring workflows.",
      "Contributed to applied computer-vision research with operational relevance.",
    ],
  },
  {
    company: "FAST-NUCES, Islamabad",
    role: "Lab Demonstrator, Operating Systems",
    period: "Aug 2025 - Dec 2025",
    summary:
      "Mentored 30+ students across operating-systems lab sessions, demonstrating core concepts and guiding hands-on exercises.",
    impact: [
      "Mentored more than 30 students across OS labs and practical exercises.",
      "Guided concept demonstrations bridging theory and implementation.",
      "Supported lab learning outcomes across a full semester.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "FAST-NUCES, Islamabad",
    degree: "B.S. Data Science",
    period: "2022 - 2026",
    note: "Dean's List graduate",
  },
];

export const CERTIFICATES = [
  {
    name: "Claude Academy: Claude Code 101",
    issuer: "Anthropic",
    href: "https://academy.claude.com/verify/8760d772c3a1260191c1398ddd15e414",
    hrefLabel: "Verify certificate",
  },
  {
    name: "Claude Academy: Claude 101",
    issuer: "Anthropic",
    href: "https://academy.claude.com/verify/fcafd795d4f268ef0d65a50848153b56",
    hrefLabel: "Verify certificate",
  },
  {
    name: "Dean's List",
    issuer: "FAST-NUCES, Islamabad",
    href: "https://www.linkedin.com/in/muhammad-ahmad-236973359/overlay/Certifications/310149257/treasury/?profileId=ACoAAFlPSIoBNTJ84wcO9THJzZlvOH0tuZHUZ0c",
    hrefLabel: "Verify certificate",
  },
  {
    name: "Agentic AI with LangChain and LangGraph",
    issuer: "IBM / Coursera",
    href: "https://www.coursera.org/account/accomplishments/verify/X3ZWPKHJ0Q7J?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    hrefLabel: "Verify certificate",
  },
  {
    name: "Machine Learning with Scikit-Learn",
    issuer: "LinkedIn Learning",
    href: "https://www.linkedin.com/learning/certificates/938d8decff0ec851efe6c9ac93ab07231c8e6ccf85f06a854d070fdc5107891c",
    hrefLabel: "Verify certificate",
  },
  {
    name: "Data Analytics with Python",
    issuer: "Simplilearn / Coursera",
    href: "https://www.coursera.org/account/accomplishments/verify/X3ZWPKHJ0Q7J?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    hrefLabel: "Verify certificate",
  },
];

export const RESUMES = [
  {
    title: "AI Engineering Resume",
    note: "Professional resume focused on agentic AI systems and workflow automation.",
    href: "/resumes/Ahmad_Resume_AI-Eng.pdf",
  },
  {
    title: "ML/DL Resume",
    note: "Professional resume focused on machine learning, deep learning, and data science.",
    href: "/resumes/Muhammad_Ahmad_resume_ML.pdf",
  },
];

export const QUOTE =
  "Good engineering is invisible. It ships, it scales, and it keeps working while everyone else moves on.";

// ---- Loft OS: rooms & music ----

export const ROOMS = [
  {
    id: "about",
    label: "About Me",
    place: "Living Room",
    wall: "#bcc5d4",
    floor: "#8d97a8",
    guide: "Come in! Agents, LLMs and pipelines are my thing. Let me show you around.",
  },
  {
    id: "projects",
    label: "Projects",
    place: "Workshop",
    wall: "#d6c7a6",
    floor: "#a4926c",
    guide: "The workshop is where the real work happens. Twenty-six builds and counting.",
  },
  {
    id: "experience",
    label: "Experience",
    place: "Office",
    wall: "#adc7c4",
    floor: "#7f9a97",
    guide: "Four desks, four chapters. Tashi, AJCL, Genesys and the OS lab.",
  },
  {
    id: "skills",
    label: "Skills",
    place: "Gym",
    wall: "#d2b6aa",
    floor: "#a1837a",
    guide: "My kit. These are the tools I train with every day.",
  },
  {
    id: "education",
    label: "Education",
    place: "Study",
    wall: "#bccbb0",
    floor: "#8b9c7f",
    guide: "Data Science at FAST-NUCES. Dean's List, if you ask.",
  },
  {
    id: "achievements",
    label: "Achievements",
    place: "Trophy Wall",
    wall: "#d9cc9e",
    floor: "#a8996c",
    guide: "Credentials and recognition. Every one links to its issuer.",
  },
  {
    id: "resume",
    label: "Resume",
    place: "Garage",
    wall: "#bcc1cb",
    floor: "#8a909c",
    guide: "Two resumes parked in the garage. Take whichever fits the drive.",
  },
  {
    id: "contact",
    label: "Contact",
    place: "Rooftop",
    wall: "#a9bfd6",
    floor: "#7b93ad",
    guide: "Tell me what should exist. Email is the fastest route up here.",
  },
];

export const SONGS = [
  { id: "self-control", title: "Self Control", artist: "Laura Branigan", src: "/music/self-control.mp3" },
  { id: "save-your-tears", title: "Save Your Tears", artist: "The Weeknd", src: "/music/save-your-tears.mp3" },
  { id: "forever-young", title: "Forever Young", artist: "Alphaville", src: "/music/forever-young.mp3" },
  { id: "heaven-knows", title: "Heaven Knows I'm Miserable Now", artist: "The Smiths", src: "/music/heaven-knows.mp3" },
];

export const BOOT_LINES = [
  { text: "COUNTING ROOMS", result: "8 FOUND" },
  { text: "WARMING UP THE GPU", result: "OK" },
  { text: "TUNING THE TURNTABLE", result: "OK" },
  { text: "WAKING THE RESIDENT", result: "OK" },
  { text: "BREWING THE COFFEE", result: "OK" },
];
