/**
 * Centralized Project Knowledge Base & Inventory for Wahyu Isnan, S.Kom.
 * Synchronized across Tier 1 (Featured Case Studies), Tier 2 (Domain Engineering), and Tier 3 (Labs & Automation).
 */

export const PROJECTS = [
  // ==========================================
  // TIER 1: FEATURED CASE STUDIES
  // ==========================================
  {
    id: "netclassify",
    tier: 1,
    title: "NetClassify",
    subtitle: "Encrypted Network Traffic Classification System",
    category: "Cybersecurity · Network Traffic Analysis · Machine Learning",
    context: "Tugas Akhir Informatika UNP (Final Degree Project)",
    positioning: "Intersection of network packet flow analysis, machine learning classification, and active MikroTik RouterOS hardware control.",
    terminalCmd: "netclassify --analyze-stream --interface ether1 --filter 'tls or ssl'",
    protocolBadges: ["PCAP / FLOW", "RANDOM-FOREST", "ROUTEROS-API", "CICFLOWMETER", "SQLITE"],
    metrics: [
      { label: "Classification Model", value: "Random Forest" },
      { label: "Traffic Types", value: "Web, Streaming, VPN, Social" },
      { label: "Mitigation Speed", value: "< 1.2s via RouterOS API" },
      { label: "Analysis Method", value: "Payload-Blind Flow Stats" },
    ],
    description:
      "A comprehensive network security platform designed to identify and classify encrypted network traffic without decrypting user payloads. Leverages CICFlowMeter statistical flow features, machine learning, and integrates directly with MikroTik RouterOS API to dynamically enforce firewall filters and bandwidth management policies in real time.",
    coreFeatures: [
      "PCAP Capture Ingestion: Secure upload and validation of network capture (.pcap) files.",
      "Statistical Flow Extraction: Computes 80+ bidirectional network flow metrics using CICFlowMeter.",
      "Multi-Class ML Engine: Random Forest classifier categorizing flows into Browsing, Media Streaming, VPN tunneling, and Social Media.",
      "Hardware-Level Mitigation: Automated firewall rule injection via MikroTik RouterOS API to isolate or throttle unauthorized traffic.",
      "Admin Telemetry Dashboard: Real-time traffic breakdown charts, audit logs, and historical session investigation.",
    ],
    techStack: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "CICFlowMeter",
      "Wireshark / PCAP",
      "MikroTik RouterOS API",
      "SQLite",
      "JavaScript",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/whyisn",
      live: null,
      caseStudy: "#netclassify-details",
    },
  },
  {
    id: "ae-ptl-queue",
    tier: 1,
    title: "AE•PTL Queue Application",
    subtitle: "Enterprise Workflow & Inter-Departmental Queue Management",
    category: "Workflow Automation · Cross-Platform Mobile · Enterprise Systems",
    context: "PT PLN Icon Plus KP Sumbar Internship (Individual Engineering Project)",
    positioning: "Production mobile system bridging corporate business units with field execution teams.",
    terminalCmd: "supabase realtime:subscribe --table requests --filter 'status=in_queue'",
    protocolBadges: ["FLUTTER", "SUPABASE-BAAS", "POSTGRES-RLS", "REALTIME-SYNC", "ENTERPRISE-SOP"],
    metrics: [
      { label: "User Roles", value: "AE vs PTL Segregated" },
      { label: "Database Sync", value: "Realtime WebSocket" },
      { label: "Deployment", value: "PT PLN Icon Plus Sumbar" },
      { label: "Security", value: "Row-Level Security (RLS)" },
    ],
    description:
      "Engineered an enterprise queue automation platform deployed during internship at PT PLN Icon Plus KP Sumbar. The application eliminates operational bottlenecks between Account Executives (AE) who submit retail activation orders and Project Team Leaders (PTL) who schedule field fiber installations.",
    coreFeatures: [
      "Real-Time Ticket Dispatch: Immediate synchronization of new customer requests between corporate AE and field PTLs.",
      "Granular Status Lifecycles: Tracking from order entry, technical verification, field survey, to completion.",
      "Row-Level Security: Strict data isolation ensuring staff can only access operational records pertinent to their tier.",
      "Performance Analytics: Metrics on activation turnaround time and pending queue bottlenecks.",
      "Offline-Ready Local Cache: Ensures field supervisors can verify dispatch orders under unstable mobile signal.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "Realtime DB",
      "Row-Level Security",
      "Riverpod",
    ],
    links: {
      github: "https://github.com/whyisn",
      live: null,
      caseStudy: "#ae-ptl-details",
    },
  },
  {
    id: "dermaaid",
    tier: 1,
    title: "DermaAid",
    subtitle: "AI Skin Cancer Detection & High-Availability Cloud Infrastructure",
    category: "Cloud Computing · Healthcare Tech · Artificial Intelligence",
    context: "Bangkit Academy Capstone Project (Google, Tokopedia, Gojek, Traveloka) — Cloud Computing Lead",
    positioning: "Scalable cloud architecture hosting machine learning microservices for clinical risk triage.",
    terminalCmd: "gcloud run deploy dermaaid-api --image gcr.io/dermaaid/inference:v1 --min-instances 1",
    protocolBadges: ["GCP CLOUD-RUN", "DOCKER", "REST-API", "TENSORFLOW", "IAM & GCS"],
    metrics: [
      { label: "Cloud Provider", value: "Google Cloud Platform" },
      { label: "Containerization", value: "Docker / Artifact Registry" },
      { label: "API SLA", value: "99.9% Cloud Run Availability" },
      { label: "Model Runtime", value: "TensorFlow Serving" },
    ],
    description:
      "Architected and deployed the cloud infrastructure for DermaAid, an AI-powered diagnostic companion that analyzes dermatological lesions for early-stage skin malignancy risk. Led the Cloud Computing division to build resilient, HIPAA-conscious REST APIs and containerized microservices on GCP.",
    coreFeatures: [
      "Stateless Cloud Run Services: Auto-scaling containerized API endpoints handling medical image ingestion.",
      "Encrypted Storage: Google Cloud Storage (GCS) buckets with fine-grained IAM roles and signed upload URLs.",
      "ML Inference Integration: Seamless bridge between mobile clients and TensorFlow convolutional models.",
      "Secure Auth Gateway: Token-based authentication verifying request integrity and user session data.",
      "CI/CD Pipeline: Automated build and push via Google Cloud Build to Container Registry.",
    ],
    techStack: [
      "Google Cloud Platform (GCP)",
      "Cloud Run",
      "Docker",
      "Python",
      "Flask",
      "TensorFlow",
      "Google Cloud Storage",
      "IAM & Cloud Build",
    ],
    links: {
      github: "https://github.com/whyisn",
      live: null,
      caseStudy: "#dermaaid-details",
    },
  },
  {
    id: "skillupid",
    tier: 1,
    title: "SkillUpID",
    subtitle: "Interactive Digital Microlearning Platform & Payment Gateway",
    category: "Web Development · EdTech · Full-Stack Web",
    context: "Class Project / Live Production Web App (Backend & Integration Engineer)",
    positioning: "End-to-end full-stack web engineering with secure automated payment webhooks and certificate issuance.",
    terminalCmd: "midtrans webhook:listen --target https://skillupid.vercel.app/api/webhooks/payment",
    protocolBadges: ["NEXT.JS 14", "MIDTRANS-API", "SUPABASE", "VERCEL-EDGE", "WEBHOOK-VERIFY"],
    metrics: [
      { label: "Payment Gateway", value: "Midtrans Snap API" },
      { label: "Routing Architecture", value: "Next.js App Router" },
      { label: "Edge Deployment", value: "Vercel Global Network" },
      { label: "Security", value: "HMAC Webhook Verification" },
    ],
    description:
      "A digital microlearning ecosystem that offers interactive bite-sized learning pathways for Indonesian learners. Engineered the backend payment orchestration using Midtrans payment gateway, automated digital credential issuance, and Supabase database schemas.",
    coreFeatures: [
      "Payment Orchestration: Integrated Midtrans Snap API supporting QRIS, Virtual Accounts, and e-Wallets.",
      "Cryptographic Webhook Handler: Automated payment status confirmation with signature hashing to prevent fraud.",
      "Dynamic Certificate Generator: Generates verifiable digital completion certificates with distinct UID hashes.",
      "Freemium Content Engine: Strict database access policies granting course access upon transaction settlement.",
      "Edge Performance: Server-Side Rendering (SSR) and edge-cached static course catalog.",
    ],
    techStack: [
      "Next.js",
      "Supabase",
      "Midtrans Payment Gateway",
      "Tailwind CSS",
      "PostgreSQL",
      "Vercel Edge",
    ],
    links: {
      github: "https://github.com/whyisn/skillupid-next-prod",
      live: "https://skillupid.vercel.app/",
      caseStudy: "#skillupid-details",
    },
  },

  // ==========================================
  // TIER 2: SPECIALIZED & DOMAIN PROJECTS
  // ==========================================
  {
    id: "petanikita",
    tier: 2,
    title: "PetaniKita",
    subtitle: "Agricultural Land & Harvest Management Platform",
    category: "Native Android · Firebase · Conversational AI",
    context: "Hackathon Project (Backend & Android Developer)",
    protocolBadges: ["KOTLIN-NATIVE", "GOOGLE-MAPS", "FIREBASE-FIRESTORE", "RANI-CHATBOT"],
    description:
      "Native Android platform enabling smallholder farmers to map agricultural acreage, track harvest cycles, and interact with 'Rani', an AI conversational assistant providing crop advisory.",
    techStack: ["Kotlin", "Android SDK", "Firebase Firestore", "Google Maps API", "REST API"],
    links: {
      github: "https://github.com/whyisn/petanikita",
      live: null,
    },
  },
  {
    id: "giziku",
    tier: 2,
    title: "GiziKu",
    subtitle: "Nutrition Assistance Distribution & Educational Platform",
    category: "Mobile Development · Health Tech · AI Chatbot",
    context: "Class Assignment (Full-Stack Mobile Developer)",
    protocolBadges: ["FLUTTER-DART", "FIREBASE-AUTH", "FIRESTORE", "GIZISMART-AI"],
    description:
      "A cross-platform mobile solution built for healthcare officers and families to track governmental nutrition aid distributions, meal health index, and query the GiziSmart advisory bot.",
    techStack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "AI Chatbot"],
    links: {
      github: "https://github.com/ipaddr/MPLJJ25-139-KEL-10",
      live: null,
    },
  },
  {
    id: "wheeled-robot",
    tier: 2,
    title: "Wheeled Soccer Robot Control",
    subtitle: "Autonomous Motion & Embedded Strategy Firmware",
    category: "Robotics · Embedded Systems · Software Control",
    context: "UNP Robotics Activity Unit (KRSBI Beroda Division Programmer, 2023–2024)",
    protocolBadges: ["EMBEDDED-C++", "PYTHON", "MOTOR-PID", "REALTIME-SENSORS"],
    description:
      "Developed omnidirectional movement algorithms, real-time PID velocity stabilization, and solenoid kicker trigger timing for UNP's autonomous wheeled soccer robots in national KRSBI contests.",
    techStack: ["C++", "Python", "Microcontrollers", "PID Control", "Embedded Sensors"],
    links: {
      github: "https://github.com/whyisn",
      live: null,
    },
  },
  {
    id: "hand-tracking-cv",
    tier: 2,
    title: "Hand Tracking Computer Vision",
    subtitle: "Real-Time Landmark Extraction & Gesture Recognition",
    category: "Computer Vision · Artificial Intelligence",
    context: "AI Research & Vision Experiment",
    protocolBadges: ["OPENCV", "MEDIAPIPE", "NUMPY", "CAMERA-STREAM"],
    description:
      "Real-time video pipeline utilizing MediaPipe hand landmark extraction to detect finger coordinates, calculate gesture vectors, and trigger desktop control actions with minimal latency.",
    techStack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    links: {
      github: "https://github.com/whyisn",
      live: null,
    },
  },

  // ==========================================
  // TIER 3: LABS, RESEARCH & AUTOMATION
  // ==========================================
  {
    id: "mt5-bot",
    tier: 3,
    title: "MT5 Adaptive Trading Bot",
    subtitle: "Algorithmic Time-Series Signal Generation & Execution",
    category: "Financial Engineering · Python Automation",
    context: "Quantitative Trading Automation Experiment",
    protocolBadges: ["METATRADER-5", "PANDAS", "TIME-SERIES", "RISK-GUARD"],
    description:
      "Automated time-series data ingest and algorithmic strategy execution connecting to MetaTrader 5 terminal, calculating technical indicators with automated risk stops.",
    techStack: ["Python", "MetaTrader 5 API", "Pandas", "TA-Lib"],
    links: {
      github: "https://github.com/whyisn",
      live: null,
    },
  },
  {
    id: "security-labs",
    tier: 3,
    title: "Network & Security Engineering Labs",
    subtitle: "Hardware Routing, Packet Capture & Pen-Testing Environments",
    category: "Network Administration · Linux · Security Testing",
    context: "Continuous Hands-on Security & System Hardening",
    protocolBadges: ["MIKROTIK-HAP", "BURP-SUITE", "UBUNTU-SERVER", "DOCKER-LAB"],
    description:
      "Physical and virtualized lab environments covering MikroTik hAP RouterOS configurations, Wireshark packet capture analysis, Linux server hardening, and Burp Suite web vulnerability assessments.",
    techStack: ["MikroTik RouterOS", "Wireshark", "Ubuntu Linux", "Burp Suite", "Docker"],
    links: {
      github: "https://github.com/whyisn",
      live: null,
    },
  },
  {
    id: "minor-apps",
    tier: 3,
    title: "Utility Apps: MyNotes & Photobox",
    subtitle: "Cloud Notes CRUD & Web Camera Canvas Processing",
    category: "Web & Mobile Utilities",
    context: "Independent Experiments",
    protocolBadges: ["FIREBASE-AUTH", "HTML5-CANVAS", "STREAM-CAPTURE"],
    description:
      "A dual suite of utility tools: 'MyNotes-Wahyu' demonstrating isolated user CRUD with Firebase Auth, and 'Photobox Couple' utilizing HTML5 webcam video stream compositing into custom photostrips.",
    techStack: ["JavaScript", "HTML5 Canvas", "Firebase", "CSS3"],
    links: {
      github: "https://github.com/whyisn",
      live: null,
    },
  },
];
