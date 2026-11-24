export const personalInfo = {
  name: "Akshat Pandey",
  title: "Software Engineer & Systems Builder",
  headline: "Building AI applications, developer tools, and distributed systems.",
  bio: "Computer Science undergraduate at VIT Bhopal (2023–2027) and Summer Fellow at FOSSEE, IIT Bombay. I design and build production-grade AI platforms, developer infrastructure, and distributed systems engineered for resilience, measurable throughput, and real-world utility.",
  location: "Varanasi, India",
  email: "akshatpandeygit28@gmail.com",
  education: {
    degree: "B.Tech. in Computer Science and Engineering",
    institution: "Vellore Institute of Technology, Bhopal",
    period: "2023 – 2027",
    details: "Core coursework in Data Structures & Algorithms, Distributed Systems, Operating Systems, Database Management, Computer Networks, and Software Engineering."
  },
  competitiveProgramming: {
    title: "LeetCode Knight",
    rating: "1,923 (Top 3.81% globally)",
    solved: "300+ Problems",
    details: "Active contestant with 50+ Hard-level problems solved across graphs, dynamic programming, and data structures."
  },
  spokenLanguages: [
    { language: "English", level: "Fluent" },
    { language: "Hindi", level: "Native" },
    { language: "Spanish", level: "Intermediate" }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/akshat2805p", username: "akshat2805p", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/akshatpandey28", username: "akshatpandey28", icon: "linkedin" },
    { name: "LeetCode", url: "https://leetcode.com/u/akshatpandey28/", username: "akshatpandey28", icon: "code" },
    { name: "Codeforces", url: "https://codeforces.com/profile/akshat_2805p", username: "akshat_2805p", icon: "terminal" },
    { name: "X (Twitter)", url: "https://x.com/Ak_Ap28Tweet", username: "@Ak_Ap28Tweet", icon: "twitter" },
    { name: "Hugging Face", url: "https://huggingface.co/akshatgit28", username: "akshatgit28", icon: "cpu" }
  ]
};

export const experiences = [
  {
    role: "Summer Fellow",
    organization: "FOSSEE, IIT Bombay",
    period: "May 2026 – July 2026",
    badge: "Fellowship",
    description: "Spearheaded the engineering of modular automation plugins for the eSim open-source EDA suite, integrating KiCad and Ngspice with intelligent analysis pipelines.",
    highlights: [
      "Architected six native Python/wxPython plugins enabling automated PCB health grading, schematic design-rule checks, and simulation netlist validation across KiCad 6 through 10.",
      "Engineered an API abstraction layer resolving breaking API shifts between KiCad major releases with automatic fallback routing.",
      "Developed a three-stage AI-assisted reporting pipeline that translates raw physical layout metrics into actionable design advice with interactive NetworkX dependency graphs."
    ],
    skills: ["Python", "wxPython", "KiCad Scripting API", "Ngspice", "NetworkX", "EDA"]
  },
  {
    role: "Co-Lead & Technical Mentor",
    organization: "Android Club, VIT Bhopal",
    period: "2024 – Present",
    badge: "Community",
    description: "Leading hands-on technical workshops, hackathons, and open-source bootcamps for a university community of 200+ aspiring software engineers.",
    highlights: [
      "Organized live technical deep-dives into mobile architecture, API integration, and modern frontend/backend patterns.",
      "Mentored student teams competing in national hackathons and guided novice contributors into open-source repositories."
    ],
    skills: ["Community Leadership", "System Design Mentorship", "Android / Web", "Open Source"]
  }
];

export const certifications = [
  {
    name: "IBM AI Engineering Professional Certificate",
    issuer: "IBM",
    category: "Machine Learning & AI",
    date: "Verified Credential",
    description: "Mastery in Machine Learning algorithms, Deep Learning with PyTorch & TensorFlow, neural network architectures, and production ML pipelines."
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google",
    category: "Systems & Infrastructure",
    date: "Verified Credential",
    description: "Comprehensive training in networking protocols, system administration, operating systems internals, security, and cloud fundamentals."
  },
  {
    name: "Introduction to Machine Learning",
    issuer: "NPTEL",
    category: "Machine Learning",
    date: "Academic Certification",
    description: "Rigorous theoretical and algorithmic foundations in supervised learning, unsupervised clustering, optimization, and probabilistic models."
  },
  {
    name: "Marketing Analytics",
    issuer: "NPTEL",
    category: "Data Science & Analytics",
    date: "Academic Certification",
    description: "Quantitative analysis, predictive modeling, regression frameworks, and decision-tree architectures applied to customer datasets."
  }
];

export const skillCategories = [
  {
    name: "Programming Languages",
    icon: "code",
    skills: [
      { name: "C++", level: "Advanced", desc: "STL, Modern C++17/20, Concurrency, Algorithms" },
      { name: "Python", level: "Advanced", desc: "FastAPI, PyTorch, scikit-learn, EDA APIs" },
      { name: "Go (Golang)", level: "Proficient", desc: "gRPC, Concurrency, Goroutines, Microservices" },
      { name: "JavaScript / TypeScript", level: "Advanced", desc: "ESNext, React, Next.js, Node.js" },
      { name: "HTML5 / CSS3", level: "Advanced", desc: "Responsive Design, Tailwind, CSS Architecture" }
    ]
  },
  {
    name: "Frameworks & Runtimes",
    icon: "layers",
    skills: [
      { name: "React 19 / Next.js", level: "Advanced", desc: "Server Components, Hooks, State Engines" },
      { name: "FastAPI", level: "Advanced", desc: "Async I/O, Pydantic, OpenAPI, ML Serving" },
      { name: "Node.js / Express", level: "Advanced", desc: "REST APIs, WebSockets, Middleware" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Design Systems, Custom Utility Themes" },
      { name: "wxPython", level: "Proficient", desc: "Desktop GUI architecture for EDA toolkits" }
    ]
  },
  {
    name: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "Proficient", desc: "Relational Modeling, Indexing, ACID transactions" },
      { name: "MySQL", level: "Proficient", desc: "Schema design, queries, normalization" },
      { name: "MongoDB", level: "Proficient", desc: "Document storage, aggregation pipelines" },
      { name: "SQLite", level: "Advanced", desc: "Embedded databases, fallback durability" },
      { name: "Redis", level: "Working", desc: "In-memory caching, pub/sub synchronization" }
    ]
  },
  {
    name: "DevOps & Cloud Infrastructure",
    icon: "cpu",
    skills: [
      { name: "Docker & Compose", level: "Advanced", desc: "Multi-stage builds, container isolation" },
      { name: "Kubernetes", level: "Working", desc: "Pod orchestration, service discovery" },
      { name: "GitHub Actions", level: "Advanced", desc: "Automated CI/CD pipelines, test automation" },
      { name: "Linux / Bash", level: "Advanced", desc: "System administration, shell scripting" },
      { name: "Nginx", level: "Proficient", desc: "Reverse proxying, load balancing, SSL/TLS" }
    ]
  },
  {
    name: "Core Computer Science",
    icon: "book-open",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced", desc: "LeetCode Knight (300+ problems, 1923 rating)" },
      { name: "System Design", level: "Proficient", desc: "Consistent hashing, replication, CAP theorem" },
      { name: "Operating Systems", level: "Proficient", desc: "Process scheduling, virtual memory, threads" },
      { name: "Computer Networks", level: "Proficient", desc: "TCP/IP, HTTP/3, WebSockets, WebRTC, DNS" },
      { name: "Object-Oriented Programming", level: "Advanced", desc: "Design patterns, SOLID principles, clean code" }
    ]
  }
];

export const featuredProjects = [
  {
    id: "esim-kicad-health-analyzer",
    title: "eSim KiCad Health Analyzer & AI PCB Copilot",
    tagline: "Automated PCB Health Grading & AI-Assisted EDA Diagnostics",
    category: "DevTools & AI",
    affiliation: "IIT Bombay · FOSSEE Fellowship",
    stars: "Featured",
    githubUrl: "https://github.com/akshat2805p/esim-kicad-health-analyzer",
    demoUrl: null,
    metrics: [
      { label: "Scan Time", value: "< 2.5s", detail: "On 10,000+ board elements" },
      { label: "KiCad Support", value: "v6 – v10", detail: "Nightly API abstraction" },
      { label: "Plugins", value: "6 Native", detail: "Python & wxPython suite" },
      { label: "Pipeline", value: "3-Stage AI", detail: "Synthesis & DRC audits" }
    ],
    tech: ["Python", "wxPython", "KiCad Scripting API", "Ngspice", "NetworkX", "LLM APIs"],
    shortDesc: "Six Python/wxPython automation plugins for KiCad 6–10 providing automated PCB health grading (A–F), design-rule verification, netlist simulation auditing, and an integrated AI PCB knowledge assistant.",
    caseStudy: {
      problem: "Printed Circuit Board (PCB) design cycles suffer from silent schematic-to-layout divergence, hidden layout congestion, and simulation netlist incompatibilities that surface only after expensive fabrication runs. Furthermore, transitioning across KiCad major versions (6.0 through 10.0) regularly breaks custom scripting plugins due to shifting C++/Python bindings.",
      approach: "Engineered a version-resilient API abstraction layer in Python paired with wxPython native desktop dialogs. The suite translates board geometries into bipartite net-component graphs using NetworkX to compute routing congestion and track trace impedance risks. An integrated three-stage AI Copilot analyzes raw layout metrics, flags DRC hazards, and generates human-readable engineering recommendations.",
      architecture: [
        "Kinetic Parser: Directly interfaces with KiCad's pcbnew and eSim netlist generators to extract component footprints, clearance zones, and trace lengths.",
        "Graph & DRC Engine: Builds in-memory bipartite NetworkX topology graphs to detect floating nets, unrouted pins, and high-frequency crosstalk vulnerabilities.",
        "Cross-Version Abstraction Layer: Dynamically detects host KiCad versions (6.0, 7.0, 8.0, 10.0 nightly) and routes method invocations across diverging API signatures.",
        "AI Diagnostic Pipeline: Feeds structured layout vectors into an LLM synthesis engine that returns contextual layout grades (A through F) with step-by-step remediation guidance."
      ],
      verifiedOutcomes: [
        "Under 2.5 second end-to-end scan latency on complex boards containing over 10,000 physical elements.",
        "Seamless cross-version execution verified on KiCad 6, 7, 8, and 10 nightly without manual code modifications.",
        "Zero external binary dependencies outside the standard Python 3.7+ and wxPython environments."
      ]
    }
  },
  {
    id: "aiops-sentinel",
    title: "AIOps Sentinel",
    tagline: "Multivariate Telemetry Anomaly Detection & Incident Suppression",
    category: "AI & Distributed Systems",
    affiliation: "Independent Engineering",
    stars: "Featured",
    githubUrl: "https://github.com/akshat2805p/AIOps-Sentinel",
    demoUrl: null,
    metrics: [
      { label: "Precision", value: "83.96%", detail: "Vs. 32.4% 3-sigma baseline" },
      { label: "F1 Score", value: "0.6854", detail: "+111% improvement" },
      { label: "FPR Reduction", value: "6× Fewer", detail: "0.80% false alarm rate" },
      { label: "Inference", value: "0.0125 ms", detail: ">80,000 predictions/sec" }
    ],
    tech: ["Python 3.12", "C++20", "FastAPI", "scikit-learn", "PostgreSQL 16", "SQLite", "Docker", "Chart.js"],
    shortDesc: "Production-grade server telemetry anomaly detection platform using an unsupervised Isolation Forest model trained from scratch on 54 temporal rolling features, cutting false alerts by 6× across 10,368 evaluated samples.",
    caseStudy: {
      problem: "Traditional infrastructure monitoring depends on static threshold alerting (e.g., CPU > 85%), creating catastrophic alert fatigue from brief transient spikes while failing to catch subtle multivariate degradations—such as synchronous memory leak creeps accompanied by elevated disk I/O thrashing.",
      approach: "Built a high-throughput ingestion engine in C++20 and FastAPI that ingests multi-dimensional metrics, converts raw data into 54 temporal rolling windows (mean, variance, skew, rate of change), and scores abnormal behaviors using an unsupervised Isolation Forest trained completely without pre-trained weights or external cloud APIs. Added a two-tier alert lifecycle with consecutive confirmation (N ≥ 2) and a 120-second cooldown suppression window.",
      architecture: [
        "Ingestion Pipeline: High-frequency metric ingestion utilizing FastAPI and C++20 bindings with sub-millisecond serialization.",
        "Temporal Feature Transformer: Computes 54 rolling statistical indicators across 1-minute, 5-minute, and 15-minute windows in real time.",
        "Dual-Model ML Core: Unsupervised Isolation Forest for real-time anomaly detection coupled with a secondary supervised Gradient Boosting incident risk forecaster.",
        "Failover Storage Architecture: Primary zero-config PostgreSQL 16 database with automated seamless fallback to SQLite upon database disconnects.",
        "Fault Injection Studio: Built-in simulation testbed for reproducing synthetic CPU bursts, memory thrashing, and cascading 5xx microservice failures."
      ],
      verifiedOutcomes: [
        "83.96% precision and 0.6854 F1 score measured rigorously on 10,368 held-out test samples (compared to 0.3244 for conventional 3-sigma detection).",
        "False Positive Rate slashed to 0.80%—delivering a verified 6× reduction in spurious wake-up pages.",
        "Average detection latency of 4.61s with an inference speed of 0.0125 ms per sample (>80,000 predictions per second on commodity hardware)."
      ]
    }
  },
  {
    id: "mini-dynamo",
    title: "Mini-Dynamo",
    tagline: "Fault-Tolerant Distributed Key-Value Store in Go",
    category: "Distributed Systems",
    affiliation: "Systems Architecture",
    stars: "Featured",
    githubUrl: "https://github.com/akshat2805p/Mini-Dynamo",
    demoUrl: null,
    metrics: [
      { label: "Cluster Size", value: "5 Nodes", detail: "Go 1.25 cluster" },
      { label: "Token Ring", value: "320 Tokens", detail: "64 vnodes per server" },
      { label: "Quorum", value: "N=3, W=2, R=2", detail: "Tunable consistency" },
      { label: "Gossip Period", value: "1.0s", detail: "SWIM membership" }
    ],
    tech: ["Go 1.25", "gRPC", "Protocol Buffers", "mTLS", "Docker", "Prometheus", "Grafana", "k6"],
    shortDesc: "A masterless, partition-tolerant distributed key-value store engineered to Amazon's Dynamo paper specifications with consistent hashing, sloppy quorum, vector clocks, hinted handoff, and background Merkle anti-entropy.",
    caseStudy: {
      problem: "In distributed cloud environments, hardware failures and network partitions are continuous realities. Maintaining high write availability while ensuring predictable eventual consistency without a single point of failure requires rigorous adherence to decentralized consensus principles.",
      approach: "Engineered a pure Go implementation of the seminal Amazon Dynamo architecture (DeCandia et al., SOSP 2007). Employs a 360-degree SHA-256 consistent hash ring with virtual nodes for balanced distribution, sloppy quorum with hinted handoff for partition tolerance, vector clocks to preserve write causality, and a decentralized SWIM gossip protocol for dynamic node failure detection.",
      architecture: [
        "Consistent Hash Ring: 64 virtual tokens per physical node (320 tokens total) distributing keys uniformly with clockwise replica selection.",
        "Durable Storage Engine: Write-Ahead Logging (WAL) with synchronous fsync barriers ensuring zero data loss during sudden node termination.",
        "Causal Vector Clocks: Lamport-inspired multi-party vector clocks capturing concurrent write branches and generating sibling records for client-side resolution.",
        "SWIM Gossip & Hinted Handoff: 1-second pairwise heartbeats transitioning nodes through ALIVE -> SUSPECT -> DEAD states. Surrogate nodes buffer writes intended for partitioned peers and replay hints upon reconnection.",
        "Merkle Tree Anti-Entropy: Periodic 30-second hierarchical hash tree sweeps detect and synchronize stale key ranges across surviving replicas in the background."
      ],
      verifiedOutcomes: [
        "Zero write downtime during simulated 2-node partition events under continuous k6 load testing.",
        "Sub-millisecond local write durability backed by disk fsync and gRPC/mTLS transport encryption.",
        "Comprehensive Prometheus metrics export and live visual cluster telemetry HUD."
      ]
    }
  },
  {
    id: "aura-ai",
    title: "Aura AI",
    tagline: "Context-Aware In-Browser Research Copilot",
    category: "AI & Browser Extensions",
    affiliation: "Production Application",
    stars: "Featured",
    githubUrl: "https://github.com/akshat2805p/AURA-AI",
    demoUrl: "https://aura-ai-lime.vercel.app",
    metrics: [
      { label: "Manifest", value: "v3 Native", detail: "Chrome Extension API" },
      { label: "Engine", value: "Gemini 2.0", detail: "Low-latency Flash API" },
      { label: "Context", value: "100% On-Page", detail: "Grounded DOM parsing" },
      { label: "Interface", value: "Side Panel", detail: "Glassmorphism HUD" }
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "Chrome Manifest V3", "Google Gemini API"],
    shortDesc: "A Manifest V3 Chrome Side Panel extension powered by Google Gemini 2.0 Flash that delivers instant page summarization, contextual in-browser document Q&A, and persistent code snippet management without context-switching.",
    caseStudy: {
      problem: "Developers and researchers lose up to 20% of their focused workflow copying and pasting documentation, API references, and technical papers into external web tabs to generate summaries or query specifics.",
      approach: "Built a sleek, zero-tab-switch Chrome Extension built on Manifest V3. The extension extracts sanitized DOM contents from the active tab, structures clean markdown contexts, and interfaces directly with Google's Gemini Flash endpoint through streaming REST calls. Features a native Glassmorphism design and local snippet storage.",
      architecture: [
        "Manifest V3 Service Worker: Manages secure API key delegation, extension lifecycle, and asynchronous side panel communication.",
        "DOM Context Extractor: Strips boilerplates, navigation chrome, and advertisements to feed clean, semantic text trees to the AI model.",
        "Streaming Response Renderer: Streams tokenized markdown responses into the side panel interface in real time.",
        "Persistent Snippet Manager: Saves code blocks and quotes into Chrome local storage with one-click export."
      ],
      verifiedOutcomes: [
        "Instant summarization and context queries with sub-second response start times via Gemini Flash.",
        "Zero external database footprint—all bookmarks and cached contexts reside strictly on the user's machine.",
        "Live web companion deployed and accessible at aura-ai-lime.vercel.app."
      ]
    }
  }
];

export const allRepositories = [
  // 1. Featured Tier
  {
    name: "esim-kicad-health-analyzer",
    displayName: "eSim KiCad Health Analyzer",
    category: "featured",
    type: "Original Project",
    tech: ["Python", "wxPython", "KiCad API", "Ngspice", "NetworkX"],
    description: "Six Python/wxPython automation plugins for KiCad 6–10: PCB health grading, DRC audits, simulation validation, and 3-stage AI reporting.",
    metrics: "< 2.5s scan time on 10k+ elements",
    githubUrl: "https://github.com/akshat2805p/esim-kicad-health-analyzer",
    demoUrl: null,
    isFork: false,
    stars: "Featured"
  },
  {
    name: "AIOps-Sentinel",
    displayName: "AIOps Sentinel",
    category: "featured",
    type: "Original Project",
    tech: ["Python 3.12", "C++20", "FastAPI", "scikit-learn", "PostgreSQL", "Docker"],
    description: "Multivariate server telemetry anomaly detection using Isolation Forest trained on 54 temporal features; 83.96% precision on 10,368 samples.",
    metrics: "83.96% Precision · 0.685 F1 · 6x false alarm reduction",
    githubUrl: "https://github.com/akshat2805p/AIOps-Sentinel",
    demoUrl: null,
    isFork: false,
    stars: "Featured"
  },
  {
    name: "Mini-Dynamo",
    displayName: "Mini-Dynamo Distributed Store",
    category: "featured",
    type: "Original Project",
    tech: ["Go 1.25", "gRPC", "Protocol Buffers", "TLS", "Docker", "Prometheus"],
    description: "Five-node distributed key-value store in Go implementing consistent hashing, sloppy quorum, vector clocks, hinted handoff, and gossip.",
    metrics: "5 Nodes · 320 Tokens · Sub-ms write latency",
    githubUrl: "https://github.com/akshat2805p/Mini-Dynamo",
    demoUrl: null,
    isFork: false,
    stars: "Featured"
  },
  {
    name: "AURA-AI",
    displayName: "Aura AI Chrome Extension",
    category: "featured",
    type: "Original Project",
    tech: ["JavaScript", "Chrome Manifest V3", "Gemini 2.0 Flash", "CSS3"],
    description: "Manifest V3 Chrome side panel extension for instant webpage summarization, page-grounded AI chat, and saved code snippet management.",
    metrics: "Sub-second response · 100% on-page grounding",
    githubUrl: "https://github.com/akshat2805p/AURA-AI",
    demoUrl: "https://aura-ai-lime.vercel.app",
    isFork: false,
    stars: "Featured"
  },

  // 2. High-Impact Projects
  {
    name: "Self-Ui",
    displayName: "SelfUI — Natural Language to UI",
    category: "project",
    type: "Original Project",
    tech: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Gemini API"],
    description: "Generative UI development platform that translates plain English prompts into production-ready React (JSX) and Tailwind code with live preview.",
    metrics: "~70% UI iteration speedup",
    githubUrl: "https://github.com/akshat2805p/Self-Ui",
    demoUrl: "https://self-ui.vercel.app",
    isFork: false,
    stars: "Production"
  },
  {
    name: "VELORA-",
    displayName: "Velora Browser",
    category: "project",
    type: "Original Project",
    tech: ["Electron", "React 18", "Three.js", "R3F", "Framer Motion", "Vite"],
    description: "AI-first desktop browser for developers and power users: split-screen tiled webviews, integrated live Market Terminal, and encrypted vault.",
    metrics: "GPU-accelerated 3D HUD · Ad blocking",
    githubUrl: "https://github.com/akshat2805p/VELORA-",
    demoUrl: null,
    isFork: false,
    stars: "Desktop App"
  },
  {
    name: "RetinAI-Diabetic-Retinopathy-Severity-Grader",
    displayName: "RetinAI — DR Severity Grader",
    category: "project",
    type: "Original Project",
    tech: ["Python", "PyTorch", "timm (EfficientNet-B4)", "FastAPI", "OpenCV"],
    description: "Clinical medical vision system grading Diabetic Retinopathy into 5 clinical stages with explainable Grad-CAM lesion saliency heatmaps.",
    metrics: "92.7% Accuracy · 0.891 QWK · 47ms GPU latency",
    githubUrl: "https://github.com/akshat2805p/RetinAI-Diabetic-Retinopathy-Severity-Grader",
    demoUrl: null,
    isFork: false,
    stars: "Research"
  },
  {
    name: "Deepdetect-AI",
    displayName: "DeepDetect AI Forensics",
    category: "project",
    type: "Original Project",
    tech: ["React 18", "TypeScript", "Node.js", "Express", "Flask", "Gemini Vision"],
    description: "Forensic analysis suite for deepfake and synthetic content detection across images, video, and audio with live biometric camera scanning.",
    metrics: "Multi-modal vision · PDF forensic reports",
    githubUrl: "https://github.com/akshat2805p/Deepdetect-AI",
    demoUrl: null,
    isFork: false,
    stars: "Forensics"
  },
  {
    name: "NEXUS",
    displayName: "NEXUS — Communication & Hub",
    category: "project",
    type: "Original Project",
    tech: ["React 19", "TypeScript", "Go", "WebSockets", "WebRTC", "PostgreSQL", "Docker"],
    description: "Full-stack real-time communication platform featuring WebRTC P2P video calls, Go WebSocket instant messaging, and synchronized media watch parties.",
    metrics: "Sub-50ms message latency · P2P WebRTC",
    githubUrl: "https://github.com/akshat2805p/NEXUS",
    demoUrl: null,
    isFork: false,
    stars: "Full-Stack"
  },
  {
    name: "NODESTREAM",
    displayName: "NodeStream Visual Pipeline Builder",
    category: "project",
    type: "Original Project",
    tech: ["React", "React Flow", "FastAPI", "Python", "Uvicorn"],
    description: "Node-based visual pipeline builder for constructing AI workflows via drag-and-drop, connecting LLM nodes, API blocks, and transform steps.",
    metrics: "DAG validation · Dynamic execution",
    githubUrl: "https://github.com/akshat2805p/NODESTREAM",
    demoUrl: null,
    isFork: false,
    stars: "DevTools"
  },
  {
    name: "AI-Sprint-Risk-Predictor",
    displayName: "SprintGuard AI",
    category: "project",
    type: "Hackathon Winner",
    tech: ["React 19", "Tailwind CSS", "Recharts", "Gemini API", "Atlassian Forge"],
    description: "Predictive sprint management dashboard that forecasts delivery risks, identifies developer bottlenecks, and issues automated recovery plans.",
    metrics: "Best Project Award @ Devpost Gemini Hackathon",
    githubUrl: "https://github.com/akshat2805p/AI-Sprint-Risk-Predictor",
    demoUrl: "https://springuardai.netlify.app/",
    isFork: false,
    stars: "Award Winner"
  },
  {
    name: "-Orchestra---AI-Damage-Claim-Reviewer",
    displayName: "Orchestra — Claim Reviewer",
    category: "project",
    type: "Original Project",
    tech: ["Python", "Google GenAI SDK", "Gemini Multimodal", "Pandas", "Pillow"],
    description: "Multimodal damage claim evaluation system combining conversation analysis with computer vision assessment to detect fraud and estimate repair scope.",
    metrics: "Strict typed JSON schema · Fallback resilience",
    githubUrl: "https://github.com/akshat2805p/-Orchestra---AI-Damage-Claim-Reviewer",
    demoUrl: null,
    isFork: false,
    stars: "AI Reviewer"
  },
  {
    name: "Junior-DevOps",
    displayName: "Junior DevOps Automation",
    category: "project",
    type: "Original Project",
    tech: ["Docker", "GitHub Actions", "Nginx", "AWS", "Bash", "Python"],
    description: "Production CI/CD pipeline featuring automated Docker Hub image versioning, Nginx reverse proxy configuration, and deployment automation.",
    metrics: "Automated container lifecycle",
    githubUrl: "https://github.com/akshat2805p/Junior-DevOps",
    demoUrl: null,
    isFork: false,
    stars: "DevOps"
  },
  {
    name: "Traffic-Predicrtion-X-Bengaluru",
    displayName: "Traffic Demand Forecasting",
    category: "project",
    type: "Competition ML",
    tech: ["Python", "XGBoost", "scikit-learn", "Pandas", "NumPy"],
    description: "Machine learning solution for Flipkart GRiD predicting road segment traffic demand using 43 spatial/temporal features and geohash Base32 decoding.",
    metrics: "43 Engineered Features · 41,778 predictions",
    githubUrl: "https://github.com/akshat2805p/Traffic-Predicrtion-X-Bengaluru",
    demoUrl: null,
    isFork: false,
    stars: "ML Competition"
  },
  {
    name: "Librarysis",
    displayName: "Library Management System",
    category: "project",
    type: "Original Project",
    tech: ["Python", "Flask", "MySQL", "HTML5", "CSS3", "JavaScript"],
    description: "Full-stack library management application with role-based access for admins and members, dynamic book checkout, and automated late fee tracking.",
    metrics: "Role-based auth · Automated fine calculator",
    githubUrl: "https://github.com/akshat2805p/Librarysis",
    demoUrl: null,
    isFork: false,
    stars: "Full-Stack"
  },
  {
    name: "DWSIM-FOSSEE-INTERN",
    displayName: "DWSIM Automation Infrastructure",
    category: "contribution",
    type: "FOSSEE Contribution",
    tech: ["Python", "DWSIM .NET API", "pythonnet", "Pandas", "NumPy"],
    description: "Headless process automation for Plug Flow Reactors (PFR) and Rigorous Distillation Columns using DWSIM Automation API and parametric sweeps.",
    metrics: "Automated KPI extraction · Headless execution",
    githubUrl: "https://github.com/akshat2805p/DWSIM-FOSSEE-INTERN",
    demoUrl: null,
    isFork: false,
    stars: "FOSSEE Project"
  },

  // 3. Systems, Tools & Experiments
  {
    name: "File-Compression-Tool-",
    displayName: "Huffman File Compressor",
    category: "experiment",
    type: "C++ Systems",
    tech: ["C++17", "STL", "Min-Heap", "Huffman Coding", "Bash"],
    description: "High-performance C++ command-line tool utilizing Huffman Coding for lossless data compression with prefix-free binary tree serialization.",
    metrics: "100% Byte-for-byte fidelity · -O3 compiled",
    githubUrl: "https://github.com/akshat2805p/File-Compression-Tool-",
    demoUrl: null,
    isFork: false,
    stars: "C++ Tool"
  },
  {
    name: "NUMBER-SYSTEM-CONVERTER-",
    displayName: "Number System Converter",
    category: "experiment",
    type: "C++ Tool",
    tech: ["C++", "Algorithms", "Binary / Hex / Octal"],
    description: "Mathematical conversion utility in C++ translating values between Binary, Decimal, Octal, and Hexadecimal representations.",
    metrics: "Arithmetic precision",
    githubUrl: "https://github.com/akshat2805p/NUMBER-SYSTEM-CONVERTER-",
    demoUrl: null,
    isFork: false,
    stars: "C++ Utility"
  },
  {
    name: "chess",
    displayName: "Web Chess Engine",
    category: "experiment",
    type: "Web Game",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
    description: "Interactive chess game implemented in vanilla JavaScript with complete piece movement validation, turn tracking, and board state rendering.",
    metrics: "Standard chess ruleset",
    githubUrl: "https://github.com/akshat2805p/chess",
    demoUrl: null,
    isFork: false,
    stars: "Game"
  },
  {
    name: "Barebones-Calculator",
    displayName: "Barebones Calculator",
    category: "experiment",
    type: "Frontend App",
    tech: ["JavaScript", "HTML5", "CSS3"],
    description: "Clean, distraction-free mathematical calculator with keyboard input support and immediate expression evaluation.",
    metrics: "Keyboard accessible",
    githubUrl: "https://github.com/akshat2805p/Barebones-Calculator",
    demoUrl: null,
    isFork: false,
    stars: "Utility"
  },
  {
    name: "-Practise-cpp-",
    displayName: "C++ Practice Repository",
    category: "experiment",
    type: "Practice / Lab",
    tech: ["C++", "DSA", "Problem Solving"],
    description: "Structured repository of competitive programming solutions, algorithmic benchmarks, and core data structure implementations.",
    metrics: "DSA solutions",
    githubUrl: "https://github.com/akshat2805p/-Practise-cpp-",
    demoUrl: null,
    isFork: false,
    stars: "Lab"
  },
  {
    name: "NFT-preview-card-component",
    displayName: "NFT Preview Card Component",
    category: "experiment",
    type: "Practice / UI",
    tech: ["HTML5", "CSS3", "Responsive UI"],
    description: "Frontend Mentor layout challenge focused on precise CSS positioning, hover color states, and typography execution.",
    metrics: "Pixel-accurate challenge",
    githubUrl: "https://github.com/akshat2805p/NFT-preview-card-component",
    demoUrl: null,
    isFork: false,
    stars: "Practice"
  },
  {
    name: "Travels",
    displayName: "Travels Web Landing",
    category: "experiment",
    type: "Web Concept",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description: "Experimental travel exploration landing page showcasing fluid card animations and imagery presentation.",
    metrics: "Visual showcase",
    githubUrl: "https://github.com/akshat2805p/Travels",
    demoUrl: null,
    isFork: false,
    stars: "Web Concept"
  },
  {
    name: "self-introduction-video-",
    displayName: "Self Introduction Video Showcase",
    category: "experiment",
    type: "Media Showcase",
    tech: ["HTML5", "Video API", "CSS"],
    description: "Media player interface hosting academic and technical self-introduction video assets.",
    metrics: "Video delivery",
    githubUrl: "https://github.com/akshat2805p/self-introduction-video-",
    demoUrl: null,
    isFork: false,
    stars: "Showcase"
  },
  {
    name: "AfterDark",
    displayName: "AfterDark (Experimental Sandbox)",
    category: "experiment",
    type: "Placeholder / Sandbox",
    tech: ["Uninitialized"],
    description: "Reserved sandbox repository earmarked for future night-mode experiments. Transparently documented as uninitialized with zero commits.",
    metrics: "Honest label: Empty repo",
    githubUrl: "https://github.com/akshat2805p/AfterDark",
    demoUrl: null,
    isFork: false,
    stars: "Sandbox"
  },

  // 4. Archive & Legacy Versions
  {
    name: "Main-Page-",
    displayName: "Main Page (Early Iteration)",
    category: "archive",
    type: "Legacy Portfolio",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Early iteration of personal developer landing page. Preserved in the archive for evolutionary lineage.",
    metrics: "Historical version",
    githubUrl: "https://github.com/akshat2805p/Main-Page-",
    demoUrl: null,
    isFork: false,
    stars: "Archived"
  },
  {
    name: "Resume-Portfolio-",
    displayName: "Resume Portfolio v1",
    category: "archive",
    type: "Legacy Portfolio",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "First public deployment of resume portfolio website, which served as the foundation for this complete React upgrade.",
    metrics: "Predecessor website",
    githubUrl: "https://github.com/akshat2805p/Resume-Portfolio-",
    demoUrl: "https://resume-portfolio-sandy.vercel.app/",
    isFork: false,
    stars: "Archived"
  },
  {
    name: "Portfolio-Website",
    displayName: "Portfolio Website Initial",
    category: "archive",
    type: "Legacy Portfolio",
    tech: ["HTML", "CSS"],
    description: "Initial static HTML/CSS experiment exploring personal site layouts and project presentation styles.",
    metrics: "Initial layout draft",
    githubUrl: "https://github.com/akshat2805p/Portfolio-Website",
    demoUrl: null,
    isFork: false,
    stars: "Archived"
  },
  {
    name: "akshat2805p",
    displayName: "akshat2805p Profile Configuration",
    category: "archive",
    type: "GitHub Profile",
    tech: ["Markdown", "GitHub Actions"],
    description: "Special GitHub user profile README repository defining dynamic stats badges, skills matrices, and activity telemetry.",
    metrics: "Profile README",
    githubUrl: "https://github.com/akshat2805p/akshat2805p",
    demoUrl: null,
    isFork: false,
    stars: "Meta"
  },

  // 5. Forks & Studies (Honestly Labeled)
  {
    name: "Ravager",
    displayName: "Ravager 3 (Fork / Study)",
    category: "fork",
    type: "Fork / Chess Engine",
    tech: ["C11", "NNUE", "AVX2/AVX-512", "Bitboards", "UCI Protocol"],
    description: "Fork of the Ravager UCI chess engine pairing alpha-beta search with embedded 1024-wide NNUE evaluation and PEXT bitboard representations.",
    metrics: "CCRL 40/2 FRC: 4039 · Upstream project study",
    githubUrl: "https://github.com/akshat2805p/Ravager",
    demoUrl: null,
    isFork: true,
    stars: "Fork / Study"
  },
  {
    name: "Img2Num",
    displayName: "Img2Num (Fork / Vectorization)",
    category: "fork",
    type: "Fork / Graphics",
    tech: ["C++17", "WebAssembly", "WebGPU", "React", "K-Means"],
    description: "Fork of the cross-platform raster-to-SVG vectorization engine utilizing K-means color clustering and polygon simplification shaders.",
    metrics: "Upstream 125 stars · WebAssembly build",
    githubUrl: "https://github.com/akshat2805p/Img2Num",
    demoUrl: "https://ryan-millard.github.io/Img2Num/",
    isFork: true,
    stars: "Fork / Study"
  },
  {
    name: "odysseus",
    displayName: "Odysseus (Fork / AI Workspace)",
    category: "fork",
    type: "Fork / Local AI",
    tech: ["Python", "FastAPI", "Docker", "ChromaDB", "JavaScript"],
    description: "Fork of the self-hosted local-first AI workspace featuring tool execution, memory retrieval via ChromaDB, and model orchestration.",
    metrics: "Local-first LLM orchestration",
    githubUrl: "https://github.com/akshat2805p/odysseus",
    demoUrl: null,
    isFork: true,
    stars: "Fork / Study"
  },
  {
    name: "awesome-python",
    displayName: "awesome-python (Fork / Curated List)",
    category: "fork",
    type: "Fork / Curated List",
    tech: ["Markdown", "Python Ecosystem"],
    description: "Fork of the community-curated directory of awesome Python frameworks, libraries, software, and resources.",
    metrics: "Ecosystem reference",
    githubUrl: "https://github.com/akshat2805p/awesome-python",
    demoUrl: null,
    isFork: true,
    stars: "Fork / List"
  }
];
