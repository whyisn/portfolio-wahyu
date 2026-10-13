"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Terminal, 
  ShieldCheck, 
  FileCode2, 
  Cpu, 
  Network, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Mail,
  Copy,
  Check
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const [copiedCmd, setCopiedCmd] = useState(false);

  const terminalCmd = "curl -sL https://whyisn.tech/profile.json | jq .focus";

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(terminalCmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-75 pointer-events-none"></div>
      
      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Window Box */}
        <div className="max-w-4xl mx-auto rounded-lg border border-blue-500/25 bg-[#080d1a]/95 shadow-2xl shadow-black/80 overflow-hidden mb-12">
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-blue-900/40 bg-[#050811]/90">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 font-mono text-xs text-gray-400">
                session_01@wahyu-workstation: ~/identity.sh
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-400/80">
              <span className="px-1.5 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">
                SSH: ED25519-ENCRYPTED
              </span>
            </div>
          </div>

          {/* Terminal Window Body */}
          <div className="p-5 sm:p-8 font-mono space-y-6">
            {/* Command Line Prompt */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-gray-800/80 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">wahyu@sec</span>
                <span className="text-gray-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-emerald-400">$</span>
                <span className="text-gray-100 font-semibold">{terminalCmd}</span>
              </div>
              <button
                onClick={handleCopyCmd}
                className="flex items-center gap-1.5 px-2 py-1 rounded bg-blue-950/40 hover:bg-blue-900/40 border border-blue-700/30 text-[11px] text-gray-400 hover:text-cyan-300 transition-all"
                title="Copy shell command"
              >
                {copiedCmd ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCmd ? "COPIED" : "COPY CMD"}</span>
              </button>
            </div>

            {/* Profile Output */}
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-950/50 border border-blue-500/30 text-xs text-cyan-300 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span>AUTHENTICATED OPERATOR // ENGINEERING DOSSIER</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-white mb-3">
                Wahyu Isnan, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400">S.Kom.</span>
              </h1>

              <p className="text-base sm:text-xl text-gray-300 font-sans font-medium leading-relaxed max-w-3xl mb-4">
                Informatics Engineer <span className="text-cyan-400">|</span> Network & Cyber Security Specialist with Software Engineering & AI Experience.
              </p>

              {/* Education & Metric Line */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-gray-400 font-mono py-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b1224] border border-blue-500/20 text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>S1 Informatika, Universitas Negeri Padang (UNP)</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b1224] border border-cyan-500/30 text-cyan-300 font-semibold">
                  <span>IPK 3.64 / 4.00</span>
                  <span className="text-gray-500">·</span>
                  <span>144 SKS Completed</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b1224] border border-gray-800 text-gray-400">
                  <span>Padang, West Sumatra, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Industry Certifications Badges Bar */}
            <div className="pt-2 border-t border-gray-800/80">
              <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-2 font-mono">
                [VERIFIED INDUSTRY CREDENTIALS]
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-2.5 rounded bg-[#0b1120] border border-blue-500/30 hover:border-blue-400/50 transition-all">
                  <div className="flex items-center justify-between text-xs font-semibold text-blue-300">
                    <span>MTCNA Certified</span>
                    <span className="text-[10px] text-gray-400 font-mono">2024</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">MikroTik RouterOS #2407NA7141</div>
                </div>

                <div className="p-2.5 rounded bg-[#0b1120] border border-cyan-500/30 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-300">
                    <span>Cloud Computing Lead</span>
                    <span className="text-[10px] text-gray-400 font-mono">2024</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Bangkit Academy (Google/GCP) #C282B4KY4456</div>
                </div>

                <div className="p-2.5 rounded bg-[#0b1120] border border-emerald-500/30 hover:border-emerald-400/50 transition-all">
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-300">
                    <span>Network Security Fund.</span>
                    <span className="text-[10px] text-gray-400 font-mono">2024</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">TalentHub Kemnaker RI #B-1/1429</div>
                </div>
              </div>
            </div>

            {/* CTAs and Links */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                href="#case-studies"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono text-xs font-semibold tracking-wide bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all"
              >
                <span>INSPECT CASE STUDIES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono text-xs font-semibold tracking-wide border border-cyan-500/40 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>OPEN TRANSMISSION</span>
              </Link>

              <div className="flex items-center gap-2 ml-auto">
                <a
                  href="https://github.com/whyisn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-gray-800 bg-[#0b1120] text-gray-400 hover:text-white hover:border-blue-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/wahyuisnan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-gray-800 bg-[#0b1120] text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border border-blue-500/20 bg-[#080d1a]/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-mono text-xs text-gray-400">FLAGSHIP SYSTEMS</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">4 Cases</div>
            <div className="text-xs text-gray-400 mt-1">Deep-dive technical architectures</div>
          </div>

          <div className="p-4 rounded-lg border border-blue-500/20 bg-[#080d1a]/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Layers className="w-4 h-4" />
              <span className="font-mono text-xs text-gray-400">SYNCHRONIZED REPOS</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">11 Projects</div>
            <div className="text-xs text-gray-400 mt-1">Network, Mobile, Cloud, AI & Labs</div>
          </div>

          <div className="p-4 rounded-lg border border-blue-500/20 bg-[#080d1a]/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <Network className="w-4 h-4" />
              <span className="font-mono text-xs text-gray-400">CREDENTIALS</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">3 Verified</div>
            <div className="text-xs text-gray-400 mt-1">MikroTik MTCNA, GCP, Kemnaker</div>
          </div>

          <div className="p-4 rounded-lg border border-blue-500/20 bg-[#080d1a]/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="font-mono text-xs text-gray-400">ACADEMIC RECORD</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">IPK 3.64</div>
            <div className="text-xs text-gray-400 mt-1">UNP S1 Informatika (144 SKS)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
