"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Terminal, 
  ShieldCheck, 
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";

export default function ContactSection() {
  const [copiedType, setCopiedType] = useState(null);

  const contactData = {
    email: "wahyuisnan002@gmail.com",
    phone: "+62 822-8848-5638",
    whatsappLink: "https://wa.me/6282288485638",
    linkedin: "https://www.linkedin.com/in/wahyuisnan",
    github: "https://github.com/whyisn",
    location: "Padang, West Sumatra, Indonesia",
  };

  const copyToClipboard = (type, value) => {
    navigator.clipboard.writeText(value);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 border-t border-blue-900/30">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 px-3 py-1 rounded bg-blue-950/40 border border-blue-800/40">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>DIRECT ENCRYPTED TRANSMISSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
              Initiate Transmission & Contact
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
              Available for Network Infrastructure & Cyber Security engineering positions, 
              cloud architecture consulting, and enterprise software contracts.
            </p>
          </div>

          {/* Terminal Transmission Card */}
          <div className="rounded-xl border border-blue-500/30 bg-[#080d1a]/95 backdrop-blur-xl shadow-2xl overflow-hidden mb-8">
            <div className="px-4 py-2.5 border-b border-gray-800 bg-[#050811] flex items-center justify-between font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                <span className="ml-2 text-gray-300">dispatch_message.sh --recipient "wahyu"</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-semibold">
                PORT: 443 // TLS 1.3
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Primary Contact Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Box */}
                <div className="p-4 rounded-lg border border-blue-500/30 bg-[#050811] hover:border-cyan-400/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Mail className="w-4 h-4" />
                        <span>PRIMARY EMAIL</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">DIRECT INBOX</span>
                    </div>
                    <div className="text-base font-bold text-white font-mono truncate mb-1">
                      {contactData.email}
                    </div>
                    <div className="text-xs text-gray-400 font-sans">
                      Standard transmission for job inquiries & proposals.
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-gray-800/80 flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard("email", contactData.email)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-[#0b1429] hover:bg-blue-900/40 text-xs font-mono text-gray-300 hover:text-white transition-all border border-blue-900/40"
                    >
                      {copiedType === "email" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>COPY EMAIL</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="p-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white transition-all"
                      title="Open Mail Client"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp / Phone Box */}
                <div className="p-4 rounded-lg border border-blue-500/30 bg-[#050811] hover:border-emerald-400/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Phone className="w-4 h-4" />
                        <span>PHONE / WHATSAPP</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">RAPID RESPONSE</span>
                    </div>
                    <div className="text-base font-bold text-white font-mono truncate mb-1">
                      {contactData.phone}
                    </div>
                    <div className="text-xs text-gray-400 font-sans">
                      Direct WhatsApp messaging for urgent communication.
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-gray-800/80 flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard("phone", contactData.phone)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-[#0b1429] hover:bg-blue-900/40 text-xs font-mono text-gray-300 hover:text-white transition-all border border-blue-900/40"
                    >
                      {copiedType === "phone" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>COPY PHONE</span>
                        </>
                      )}
                    </button>
                    <a
                      href={contactData.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-all"
                      title="Open WhatsApp"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* External Network Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-gray-800 bg-[#050811] hover:border-blue-500/50 hover:bg-[#0b1429] flex items-center justify-between text-xs font-mono text-gray-300 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LINKEDIN PROFILE</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-gray-800 bg-[#050811] hover:border-cyan-500/50 hover:bg-[#0b1429] flex items-center justify-between text-xs font-mono text-gray-300 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GITHUB REPOSITORIES</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                <div className="p-3 rounded-lg border border-gray-800 bg-[#050811] flex items-center justify-between text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>PADANG, WEST SUMATRA</span>
                  </div>
                  <span className="text-[10px] text-gray-500">IDN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
