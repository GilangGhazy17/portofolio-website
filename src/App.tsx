/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Phone,
  Instagram,
  Mail, 
  ExternalLink, 
  Download, 
  ChevronRight,
  Code2,
  Palette,
  Briefcase
} from "lucide-react";

const Section = ({ title, children, id }: { title: string, children: React.ReactNode, id?: string }) => (
  <section id={id} className="py-20 border-b border-gray-100 dark:border-zinc-800">
    <div className="flex flex-col md:flex-row gap-12 md:gap-24">
      <div className="w-full md:w-32 flex-shrink-0">
        <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase pt-1">
          {title}
        </h2>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  </section>
);

const Chip = ({ text, colorClass }: { text: string, colorClass?: string }) => (
  <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${colorClass || "bg-zinc-50 text-zinc-600 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800"}`}>
    {text}
  </span>
);

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-medium tracking-tight text-zinc-900 dark:text-white">Muhammad Gilang Ghazy</span>
          <div className="hidden sm:flex gap-8 items-center">
            {['tentang', 'pengalaman', 'kontak'].map((link) => (
              <a 
                key={link} 
                href={`#${link}`} 
                className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-start md:items-center gap-12 pb-24 border-b border-gray-100 dark:border-zinc-800"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex-1 space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-100 dark:border-emerald-800/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Tersedia untuk proyek baru
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Fresh Graduate <br />
              <span className="text-indigo-600 dark:text-indigo-400">& Fullstack Dev</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Fresh graduate SMK Telkom Purwokerto, jurusan Pengembangan Perangkat Lunak & Gim ( PPLG ). 
              Senang membangun antarmuka yang rapi dan mudah dipakai 
              dari tugas sekolah sampai proyek pribadi.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a 
                href="mailto:lankghzy@gmail.com"
                className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium text-sm flex items-center gap-2 hover:opacity-90 transition-all">
                Mulai Kolaborasi <ChevronRight size={16} />
              </a>
              <a 
                href="/cvats-fullstack.pdf" 
                download 
                className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-full font-medium text-sm flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
                Unduh CV <Download size={16} />
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative group">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <img 
                src="/Mee.jpeg" 
                alt="Muhammad Gilang Ghazy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full -z-10 group-hover:bg-indigo-500/20 transition-all"></div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <Section title="tentang" id="tentang">
          <div className="max-w-2xl space-y-6">
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
              Lulusan SMK Telkom Purwokerto jurusan Pengembangan Perangkat Lunak & Gim (PPLG), pernah menjalani PKL di 
              PT Cmlabs Indonesia Digital sebagai Backend Engineer. 
              Sekarang fokus mengasah skill fullstack dari API sampai 
              <span className="font-medium text-zinc-900 dark:text-white"> tampilan yang enak dilihat.</span>
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-chill">
              Di luar coding, saya sering mengeksplorasi desain UI, menonton film, dan mencari inspirasi untuk meningkatkan kualitas tampilan aplikasi. 
            </p>
          </div>
        </Section>

        {/* Work Section */}
        <Section title="pengalaman" id="pengalaman">
          <div className="space-y-12">
           {[
              {
                title: "Backend Engineer Intern",
                company: "PT Cmlabs Indonesia Digital Malang",
                desc: "Berkontribusi dalam pengembangan dan pemeliharaan sistem backend. Belajar langsung di lingkungan profesional selama 4 bulan.",
                tag: "Internship · Juni - September 2025",
                year: "2025"
              }
             
            ].map((work, i) => (
              <div key={i} className="group relative flex justify-between items-start border-b border-gray-50 dark:border-zinc-900 pb-8 last:border-0 last:pb-0 transition-all hover:translate-x-1">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-white flex items-center gap-2">
                    {work.title} <span className="text-sm font-normal text-zinc-400">— {work.company}</span>
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 max-w-lg">{work.desc}</p>
                  <div className="pt-2">
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-sm">
                      {work.tag}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-zinc-300 dark:text-zinc-700 font-mono italic">{work.year}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="proyek">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Tumpang Sari",
              desc: "Aplikasi booking servis motor. Dibangun untuk mempermudah pelanggan jadwalkan servis kendaraan mereka.",
              icon: <img src="/tumpangsari.png" alt="Tumpang Sari" />,
              style: "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30",
              link: "https://github.com/MuhammadGilangGhazy1722/MK-3C"
            },
            {
              title: "FINTRA",
              desc: "Aplikasi manajemen keuangan pribadi. Catat pemasukan, pengeluaran, dan pantau kondisi keuangan.",
              icon: <img src="/fintranew.png" alt="FINTRA" />,
              style: "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30",
              link: "https://github.com/MuhammadGilangGhazy1722/Fintra"
            },
            {
              title: "RagilTrans",
              desc: "Aplikasi booking mobil online. Memudahkan pengguna memesan kendaraan dengan mudah dan cepat.",
              icon: <img src="/newragiltrans.png" alt="RagilTrans" />,
              style: "bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-900/30",
              link: "https://github.com/MuhammadGilangGhazy1722/RAGILTRANS"
            },
            {
              title: "Slide Card",
              desc: "Eksperimen web interaktif dengan animasi kartu. Proyek iseng yang jadi latihan CSS dan JavaScript.",
              icon: <Code2 className="text-blue-500" />,
              style: "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30",
              link: "https://github.com/MuhammadGilangGhazy1722/Project-Hosting"
            }
          ].map((proj, i) => (
            <a key={i} href={proj.link} target="_blank" rel="noopener noreferrer" className={`p-8 rounded-2xl border transition-all hover:shadow-lg dark:hover:shadow-zinc-900/50 cursor-pointer block ${proj.style}`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white dark:bg-zinc-900 shadow-sm mb-6">
                {proj.icon}
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{proj.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{proj.desc}</p>
            </a>
          ))}
          </div>
        </Section>

        {/* Stack & Skills */}
        <Section title="stack">
          <div className="flex flex-wrap gap-3">
            <Chip text="React" colorClass="bg-blue-50 text-blue-600 border-blue-100" />
            <Chip text="Next.js" colorClass="bg-indigo-50 text-indigo-600 border-indigo-100" />
            <Chip text="TypeScript" colorClass="bg-sky-50 text-sky-600 border-sky-100" />
            <Chip text="Tailwind CSS" colorClass="bg-cyan-50 text-cyan-600 border-cyan-100" />
            <Chip text="Golang" colorClass="bg-emerald-50 text-emerald-600 border-emerald-100" />
            <Chip text="Node.js" colorClass="bg-lime-50 text-lime-700 border-lime-100" />
            <Chip text="Git" colorClass="bg-blue-50 text-blue-600 border-blue-100" />
            <Chip text="Supabase" colorClass="bg-green-50 text-green-600 border-green-100" />
            <Chip text="Dbeaver" colorClass="bg-zinc-50 text-zinc-600 border-zinc-100" />
            <Chip text="PostgreSQL" colorClass="bg-blue-50 text-blue-600 border-blue-100" />
            <Chip text="mySQL" colorClass="bg-yellow-50 text-yellow-600 border-yellow-100" />
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="kontak" id="kontak">
          <div className="space-y-8">
            <p className="text-2xl font-light text-zinc-800 dark:text-zinc-200">
              Ada ide yang ingin dibicarakan? <br />
              <span className="font-medium text-zinc-950 dark:text-white">Ayo ngobrol bareng.</span>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="mailto:lankghzy@gmail.com" className="flex items-center gap-3 p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-zinc-400 font-semibold tracking-tighter">Email</div>
                  <div className="text-sm font-medium">lankghzy@gmail.com</div>
                </div>
              </a>
              <a href="tel:+628755937382" className="flex items-center gap-3 p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-zinc-400 font-semibold tracking-tighter">WhatsApp</div>
                  <div className="text-sm font-medium">0857-5593-7382</div>
                </div>
              </a>
              <a 
                href="https://github.com/MuhammadGilangGhazy1722"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center">
                  <Github size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-zinc-400 font-semibold tracking-tighter">GitHub</div>
                  <div className="text-sm font-medium">MuhammadGilangGhazy</div>
                </div>
              </a>
              <a 
                href="https://www.instagram.com/lankghzy_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-50 dark:bg-pink-900/20 text-pink-500 flex items-center justify-center">
                  <Instagram size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-zinc-400 font-semibold tracking-tighter">Instagram</div>
                  <div className="text-sm font-medium">@lankghzy_</div>
                </div>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-50 dark:border-zinc-900">
        <p className="text-sm text-zinc-400 italic">
          Built by Gilang — 2026 · Batam, Indonesia
        </p>
        <div className="flex gap-4 items-center">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span className="text-sm font-medium text-indigo-500">GilangGhazy.dev</span>
        </div>
      </footer>
    </div>
  );
}