"use client";

import { Terminal, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-blue-900/40 bg-[#040711] py-8 sm:py-12 font-mono text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-800/80">
          <div className="flex items-center gap-2 text-gray-400">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-200 font-semibold font-sans">Wahyu Isnan, S.Kom.</span>
            <span className="text-gray-600">//</span>
            <span className="text-[11px] text-gray-400">NETWORK & CYBER SECURITY SPECIALIST</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              ALL SYSTEMS NOMINAL
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">BUILD: v2.4-STABLE</span>
            <span className="text-gray-600">|</span>
            <a
              href="#overview"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-600">
          <div>
            © 2026 Wahyu Isnan. Engineered with Next.js, Tailwind CSS & Lucide Icons.
          </div>
          <div className="flex items-center gap-3">
            <span>MTCNA #2407NA7141</span>
            <span>•</span>
            <span>BANGKIT GCP #C282B4KY4456</span>
            <span>•</span>
            <span>UNP INFORMATIKA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
