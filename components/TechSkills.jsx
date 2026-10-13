"use client";

import { SKILL_CATEGORIES } from "@/data/skills";
import { 
  ShieldAlert, 
  Cloud, 
  Globe, 
  Smartphone, 
  Cpu, 
  Terminal, 
  Check, 
  Layers,
  Sparkles
} from "lucide-react";

export default function TechSkills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-cyan-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-teal-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-20 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400 mb-2">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span>CORE COMPETENCIES & TECHNICAL REPERTOIRE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Engineered Skills & Protocols
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            A comprehensive matrix of networking hardware configurations, encrypted traffic analysis, 
            cloud architecture, full-stack development, and embedded control logic.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-lg border border-blue-500/20 bg-[#080d1a]/90 p-5 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-800">
                  <div className="p-2 rounded bg-[#0b1429] border border-blue-900/50">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-sans">
                      {category.title}
                    </h3>
                    <p className="text-[11px] font-mono text-gray-400">
                      {category.tagline}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded bg-[#050811] border border-gray-800/80 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between font-mono text-xs mb-1">
                        <span className="font-semibold text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-950/60 text-cyan-300 border border-blue-900/50">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal footer tag */}
              <div className="mt-4 pt-2 border-t border-gray-800/60 font-mono text-[10px] text-gray-500 flex items-center justify-between">
                <span>MODULE // VERIFIED</span>
                <span className="text-cyan-400/80">READY_FOR_ENGAGEMENT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
