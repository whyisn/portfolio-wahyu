/**
 * Categorized Technical Competencies, Tools, and Protocols for Wahyu Isnan, S.Kom.
 */

export const SKILL_CATEGORIES = [
  {
    id: "network-security",
    title: "Network Infrastructure & Cybersecurity",
    icon: "ShieldAlert",
    tagline: "L2/L3 Routing, Encrypted Traffic Analysis, Firewalling",
    skills: [
      { name: "MikroTik RouterOS", level: "Advanced", desc: "Routing, Mangle, Firewall filter, Queues, API automation" },
      { name: "Wireshark & PCAP Analysis", level: "Advanced", desc: "Packet inspection, stream following, protocol dissection" },
      { name: "CICFlowMeter", level: "Advanced", desc: "Bidirectional flow extraction & network traffic feature generation" },
      { name: "TCP/IP & OSI Model", level: "Expert", desc: "Subnetting, ARP, DHCP, DNS, NAT, VLAN, BGP/OSPF concepts" },
      { name: "FTTH Architecture", level: "Proficient", desc: "OLT, FAT/ODP, Drop Fiber, Optical Power (OPM), ONT Commissioning" },
      { name: "Vulnerability Scanning", level: "Proficient", desc: "Burp Suite, Nmap port recon, OWASP Top 10 mitigation" },
      { name: "Network Hardening", level: "Proficient", desc: "Access Control Lists (ACL), Port Security, Fail2ban, SSH keys" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud Computing & DevOps",
    icon: "Cloud",
    tagline: "GCP Microservices, Containerization, Edge Deployments",
    skills: [
      { name: "Google Cloud Platform (GCP)", level: "Certified", desc: "Cloud Run, Compute Engine, Artifact Registry, Cloud Build" },
      { name: "Docker Containerization", level: "Proficient", desc: "Multi-stage Dockerfiles, image optimization, container networking" },
      { name: "Google Cloud Storage & IAM", level: "Advanced", desc: "Least-privilege IAM roles, bucket policies, signed upload URLs" },
      { name: "Vercel Edge Network", level: "Advanced", desc: "Edge functions, Next.js deployment, domain routing, SSL management" },
      { name: "Linux Server Administration", level: "Advanced", desc: "Ubuntu/Debian, Bash scripting, systemd service management" },
      { name: "Git Version Control", level: "Advanced", desc: "Branching workflows, GitHub Actions, semantic commit conventions" },
    ],
  },
  {
    id: "web-engineering",
    title: "Full-Stack Web Engineering",
    icon: "Globe",
    tagline: "Modern React, Next.js App Router, Backend Integrations",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced", desc: "Server Components, Server Actions, Dynamic Routes, Edge Middleware" },
      { name: "React.js", level: "Advanced", desc: "Hooks, Context API, state machines, component lifecycles" },
      { name: "Supabase BaaS", level: "Advanced", desc: "PostgreSQL, Row-Level Security (RLS), Realtime WebSockets, Auth" },
      { name: "Midtrans Payment Gateway", level: "Proficient", desc: "Snap API integration, cryptographic webhook validation, QRIS/VA" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Custom themes, cyber/dark tech aesthetics, responsive flex/grid" },
      { name: "Python Flask / REST APIs", level: "Advanced", desc: "JSON serialization, middleware auth, backend microservices" },
      { name: "PostgreSQL & SQLite", level: "Advanced", desc: "Relational schema design, indexes, SQL optimization, migrations" },
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    icon: "Smartphone",
    tagline: "Cross-Platform Flutter & Native Android Architecture",
    skills: [
      { name: "Flutter & Dart", level: "Advanced", desc: "Clean architecture, Riverpod/Bloc state management, custom UI" },
      { name: "Native Android (Kotlin)", level: "Proficient", desc: "Activities, Fragments, ViewModel, LiveData, Coroutines, Jetpack" },
      { name: "Firebase Suite", level: "Advanced", desc: "Cloud Firestore, Firebase Authentication, Cloud Messaging" },
      { name: "Google Maps API", level: "Proficient", desc: "Geo-location tracking, polygon mapping, custom map markers" },
    ],
  },
  {
    id: "ai-embedded",
    title: "Artificial Intelligence & Embedded",
    icon: "Cpu",
    tagline: "Applied ML, Computer Vision & Robotics Control",
    skills: [
      { name: "Scikit-Learn (Random Forest)", level: "Advanced", desc: "Model training, hyperparameter tuning, confusion matrix evaluation" },
      { name: "OpenCV & MediaPipe", level: "Proficient", desc: "Real-time webcam pipelines, hand landmark extraction, gesture tracking" },
      { name: "TensorFlow / Keras", level: "Proficient", desc: "Convolutional Neural Networks (CNN) for image inference" },
      { name: "Embedded C++ & Python", level: "Proficient", desc: "Microcontroller programming, sensor data fusion, PID motor algorithms" },
      { name: "Pandas & NumPy", level: "Advanced", desc: "Time-series data wrangling, financial metrics, tabular aggregation" },
    ],
  },
];
