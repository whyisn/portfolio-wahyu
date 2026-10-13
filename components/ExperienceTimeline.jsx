"use client";

import { useState } from "react";
import { EXPERIENCES, CERTIFICATIONS, ACHIEVEMENTS } from "@/data/experience";
import { 
  Briefcase, 
  Award, 
  Terminal, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldCheck,
  Trophy
} from "lucide-react";

export default function ExperienceTimeline() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="experience" className="relative py-20 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>OPERATIONAL TIMELINE & INDUSTRY RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Work Experience & Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Industrial field leadership at PLN Icon Plus, system administration at Kanwil Kemenkumham, 
            academic teaching in AI, verified credentials, and institutional grants.
          </p>
        </div>

        {/* Official Certifications Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-wider mb-4">
            <Award className="w-4 h-4" />
            <span>[OFFICIAL VERIFIED CERTIFICATIONS]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="rounded-lg border border-blue-500/30 bg-[#080d1a]/90 p-5 flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40 text-cyan-300 font-semibold text-[11px]">
                      {cert.badgeType}
                    </span>
                    <span className="text-gray-400">{cert.issueDate}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3 font-mono">
                    Issuer: {cert.issuer}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {cert.competencies.map((comp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-800 flex items-center justify-between font-mono text-xs">
                  <div className="text-[11px] text-gray-400 truncate max-w-[170px]">
                    ID: <span className="text-gray-200">{cert.credentialId}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(cert.id, cert.credentialId)}
                    className="flex items-center gap-1 px-2 py-1 rounded bg-[#0b1429] hover:bg-blue-900/40 text-gray-400 hover:text-cyan-300 transition-colors text-[11px]"
                    title="Copy Certificate ID"
                  >
                    {copiedId === cert.id ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    <span>{copiedId === cert.id ? "COPIED" : "COPY ID"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider mb-8">
            <Terminal className="w-4 h-4" />
            <span>[CHRONOLOGICAL CAREER & FIELD ROLES]</span>
          </div>

          <div className="relative border-l border-blue-900/60 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="relative group">
                {/* Node indicator */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                  exp.isCurrent
                    ? "bg-emerald-500 border-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse"
                    : "bg-[#0b1224] border-blue-500 group-hover:border-cyan-400 transition-colors"
                }`}></div>

                {/* Card Container */}
                <div className="rounded-lg border border-blue-500/20 bg-[#080d1a]/80 p-5 hover:border-cyan-500/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-bold text-white font-sans">
                        {exp.role}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                          ACTIVE ROLE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-cyan-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-4">
                    <span className="text-gray-200 font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="text-gray-500">{exp.location}</span>
                  </div>

                  <ul className="space-y-2 mb-4 text-xs sm:text-sm text-gray-300">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-800/70">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0b1429] border border-blue-900/40 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Achievements & Grants */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            <span>[NOTABLE ACHIEVEMENTS & HACKATHONS]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((ach, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-amber-500/20 bg-[#080d1a]/80 font-mono text-xs space-y-2"
              >
                <div className="flex items-center justify-between text-amber-300 font-semibold">
                  <span>{ach.title}</span>
                  <span className="text-[11px] text-gray-400">{ach.year}</span>
                </div>
                <div className="text-gray-200 font-sans text-sm font-medium">
                  {ach.competition}
                </div>
                <div className="text-[11px] text-gray-400">
                  Authority: {ach.issuer}
                </div>
                <p className="text-xs text-gray-400 font-sans leading-relaxed pt-1 border-t border-gray-800">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
