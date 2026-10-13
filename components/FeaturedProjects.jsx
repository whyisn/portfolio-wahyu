"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { 
  Shield, 
  Terminal, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  ArrowUpRight,
  ChevronRight,
  Server
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function FeaturedProjects() {
  const tier1Projects = PROJECTS.filter((p) => p.tier === 1);
  const [activeProject, setActiveProject] = useState(tier1Projects[0]);

  return (
    <section id="case-studies" className="relative py-20 sm:py-28 border-t border-blue-900/30">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid-dense opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>PRIMARY WORKFLOW // TIER 1 SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Featured Engineering Case Studies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
            Rigorous systems engineering combining encrypted packet flow analysis, cloud infrastructure, 
            enterprise queue automation, and production full-stack web platforms.
          </p>
        </div>

        {/* Interactive Case Study Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {tier1Projects.map((project) => {
            const isSelected = activeProject.id === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`text-left p-3.5 rounded-lg border font-mono transition-all duration-200 relative overflow-hidden ${
                  isSelected
                    ? "bg-[#0c152c] border-cyan-500/80 shadow-[0_0_20px_rgba(6,182,212,0.15)] text-white"
                    : "bg-[#080d1a]/80 border-gray-800/80 hover:border-blue-500/40 text-gray-400 hover:text-gray-200"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400"></span>
                )}
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className={isSelected ? "text-cyan-400 font-semibold" : "text-gray-500"}>
                    CASE 0{tier1Projects.indexOf(project) + 1}
                  </span>
                  {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>}
                </div>
                <div className="text-sm font-bold truncate">{project.title}</div>
                <div className="text-[11px] text-gray-400 truncate mt-0.5">{project.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detailed Card */}
        <div className="rounded-xl border border-blue-500/30 bg-[#080d1a]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Card Terminal Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-800/90 bg-[#050811]/90 flex-wrap gap-2">
            <div className="flex items-center gap-2 font-mono text-xs text-gray-300">
              <span className="text-cyan-400">spec:</span>
              <span className="font-semibold text-white">{activeProject.title}</span>
              <span className="text-gray-600">//</span>
              <span className="text-gray-400 text-[11px]">{activeProject.category}</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40 text-blue-300 text-[11px]">
                {activeProject.context}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Terminal Command */}
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white">
                    {activeProject.title}
                    <span className="block sm:inline sm:ml-3 text-base sm:text-lg font-normal text-cyan-300">
                      — {activeProject.subtitle}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-4xl">
                    {activeProject.description}
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-2.5 flex-shrink-0">
                  {activeProject.links.live && (
                    <a
                      href={activeProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded font-mono text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20 transition-all"
                    >
                      <span>LIVE SYSTEM</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {activeProject.links.github && (
                    <a
                      href={activeProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded font-mono text-xs font-semibold border border-gray-700 bg-[#0b1224] hover:bg-gray-800 text-gray-200 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>REPOSITORY</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Terminal Command Bar */}
              <div className="p-3 rounded-lg bg-[#04060d] border border-blue-950/60 font-mono text-xs text-gray-300 flex items-center justify-between overflow-x-auto">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">$</span>
                  <span className="text-gray-200">{activeProject.terminalCmd}</span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider ml-4 flex-shrink-0">
                  EXEC_STATUS: READY
                </span>
              </div>
            </div>

            {/* Protocol & Architecture Badges */}
            <div>
              <div className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-2">
                [SYSTEM PROTOCOLS & ARCHITECTURE FLAGS]
              </div>
              <div className="flex flex-wrap gap-2">
                {activeProject.protocolBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded bg-[#0b1429] border border-blue-500/30 text-cyan-300 font-mono text-xs font-medium tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics Telemetry Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {activeProject.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg border border-blue-900/30 bg-[#060a16] font-mono"
                >
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Features & Highlights */}
            <div className="space-y-3 pt-2 border-t border-gray-800/80">
              <div className="text-[11px] font-mono uppercase text-gray-400 tracking-wider">
                [TECHNICAL SPECIFICATIONS & ARCHITECTURAL HIGHLIGHTS]
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeProject.coreFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-gray-800/70 bg-[#090e1d]/60 flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-2 border-t border-gray-800/80">
              <div className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-2">
                [DEPLOYED STACK & LIBRARIES]
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full text-xs font-mono bg-gray-900/80 border border-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
