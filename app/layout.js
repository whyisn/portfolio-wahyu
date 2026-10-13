import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wahyu Isnan, S.Kom. | Network & Cyber Security Specialist",
  description:
    "Engineering portfolio of Wahyu Isnan, S.Kom. Informatics Engineer specializing in Network Infrastructure, Encrypted Traffic Analysis, Cyber Security, Cloud Computing (GCP), and Software Engineering.",
  keywords: [
    "Wahyu Isnan",
    "Informatics Engineer",
    "Network Security",
    "Cyber Security",
    "MikroTik MTCNA",
    "Google Cloud Platform",
    "Bangkit Academy",
    "Encrypted Traffic Classification",
    "NetClassify",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Wahyu Isnan, S.Kom." }],
  creator: "Wahyu Isnan, S.Kom.",
  openGraph: {
    title: "Wahyu Isnan, S.Kom. | Network & Cyber Security Specialist",
    description:
      "Informatics Engineer with expertise in Network Infrastructure, Encrypted Traffic Classification, Cybersecurity, and Cloud Systems.",
    url: "https://github.com/whyisn",
    siteName: "Wahyu Isnan Engineering Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050811] text-gray-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
