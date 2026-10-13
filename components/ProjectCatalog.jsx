"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { 
  FolderGit2, 
  Terminal, 
  ExternalLink, 
  Filter, 
  Layers, 
  Cpu, 
  Smartphone, 
  ShieldAlert,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectCatalog() {
  const [filter, setFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Repositories", count: PROJECTS.length },
    { id: "tier1", label: "Tier 1: Flagship Systems", count: PROJECTS.filter(p => p.tier === 1).length },
    { id: "tier2", label: "Tier 2: Specialized & Mobile", count: PROJECTS.filter(p => p.tier === 2).length },
    { id: "tier3", label: "Tier 3: Labs & Engineering", count: PROJECTS.filter(p => p.tier === 3).length },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "all") return true;
    if (filter === "tier1") return project.tier === 1;
    if (filter === "tier2") return project.tier === 2;
    if (filter === "tier3") return project.tier === 3;
    return true;
  });

  return (
    <section id="all-projects" className="relative py-20 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 mb-2">
              <FolderGit2 className="w-4 h-4 text-blue-400" />
              <span>SYNCHRONIZED PROJECT INVENTORY // 11 REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
              Complete Project Directory
            </h2>
            <p className="mt-2 text-sm text-gray-400 max-w-2xl">
              Cross-disciplinary software architectures across network security, cloud deployments, 
              native mobile, autonomous robotics, and quantitative time-series automation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                  filter === tab.id
                    ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 border border-blue-400/50"
                    : "bg-[#0b1224] text-gray-400 hover:text-gray-200 border border-gray-800 hover:border-gray-700"
                }`}
              >
                <span>{tab.label}</span>{" "}
                <span className="opacity-70 text-[10px]">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg border border-blue-500/20 bg-[#080d1a]/90 hover:border-cyan-500/50 p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] hover:-translate-y-0.5"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between font-mono text-[11px] mb-3">
                  <span className={`px-2 py-0.5 rounded border ${
                    project.tier === 1 
                      ? "bg-blue-950/60 border-blue-600/40 text-blue-300 font-semibold"
                      : project.tier === 2
                      ? "bg-cyan-950/40 border-cyan-700/30 text-cyan-300"
                      : "bg-gray-900 border-gray-800 text-gray-400"
                  }`}>
                    TIER 0{project.tier}
                  </span>
                  <span className="text-gray-500 truncate max-w-[150px]">
                    {project.category.split("·")[0].trim()}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-sans text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Protocol Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.protocolBadges.slice(0, 3).map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-0.5 rounded bg-[#0b1429] border border-blue-900/40 text-gray-300 font-mono text-[10px]"
                    >
                      {badge}
                    </span>
                  ))}
                  {project.protocolBadges.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-gray-900 text-gray-500 font-mono text-[10px]">
                      +{project.protocolBadges.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer / Links */}
              <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-gray-500"
                    >
                      #{tech.toLowerCase().replace(/[^a-z0-9]/g, "")}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded hover:bg-cyan-950/40 text-cyan-400 hover:text-cyan-300 transition-colors"
                      title="Live System"
                      aria-label="Live Demo Link"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository Link"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
