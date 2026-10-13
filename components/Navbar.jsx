"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Random slight jitter to simulate live network latency telemetry
    const interval = setInterval(() => {
      setLatency(Math.floor(11 + Math.random() * 6));
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "All Projects", href: "#all-projects" },
    { label: "Experience", href: "#experience" },
    { label: "Competencies", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050811]/90 backdrop-blur-md border-b border-blue-500/20 py-2.5 shadow-lg shadow-black/50"
          : "bg-transparent border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Terminal Prompt */}
          <Link 
            href="#overview" 
            className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-gray-200"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded border border-blue-500/30 bg-blue-950/40 text-cyan-400 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold flex items-center text-xs sm:text-sm">
                <span className="text-blue-400">wahyu</span>
                <span className="text-gray-400">@</span>
                <span className="text-cyan-400">sec</span>
                <span className="text-gray-400">:</span>
                <span className="text-emerald-400">~#</span>
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider">
                INFORMATICS ENGINEER
              </span>
            </div>
          </Link>

          {/* Desktop Live Telemetry Status */}
          <div className="hidden lg:flex items-center gap-3 px-3 py-1 rounded border border-blue-900/40 bg-[#080d1a]/80 font-mono text-xs">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold tracking-wider text-[11px]">
                SYS_STATUS: ONLINE
              </span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-1 text-[11px] text-gray-400">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span>RTT: {latency}ms</span>
            </div>
            <span className="text-gray-600">|</span>
            <span className="text-[11px] text-blue-300">NODE: ID-W-SUMATRA</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-2.5 lg:px-3 py-1.5 text-xs lg:text-sm font-mono text-gray-300 hover:text-cyan-300 hover:bg-blue-950/30 rounded border border-transparent hover:border-blue-500/20 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Quick Action Button */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded border border-cyan-500/40 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>TRANSMIT</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded border border-blue-500/30 bg-blue-950/30 text-gray-300 hover:text-cyan-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-blue-500/20 bg-[#080d1a]/95 backdrop-blur-xl px-4 pt-3 pb-5 transition-all">
          <div className="flex items-center justify-between py-2 mb-3 border-b border-gray-800 font-mono text-[11px]">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              SYS: ONLINE ({latency}ms)
            </div>
            <span className="text-gray-500">MTCNA • GCP • TALENTHUB</span>
          </div>

          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-sm font-mono text-gray-300 hover:text-cyan-300 hover:bg-blue-950/40 rounded border border-transparent hover:border-blue-500/20"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-mono font-medium rounded border border-cyan-500/40 bg-cyan-950/30 text-cyan-300"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>TRANSMIT TRANSMISSION</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
