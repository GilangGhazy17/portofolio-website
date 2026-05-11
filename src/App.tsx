/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Phone,
  Instagram,
  Mail,
  Download,
  ChevronRight,
  Code2,
} from "lucide-react";

// ── Design tokens ──────────────────────────────────────────────────
const BG        = "#1E2433";
const BG_NAV    = "rgba(30,36,51,0.88)";
const BG_CARD   = "rgba(255,255,255,0.04)";
const BG_CARD_H = "rgba(255,255,255,0.08)";
const ACCENT    = "#38BDF8";
const BORDER    = "rgba(255,255,255,0.08)";

// ── Types ──────────────────────────────────────────────────────────
interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

type FormFields = {
  name: string;
  email: string;
  message: string;
};

// ── Section component ──────────────────────────────────────────────
const Section = ({ title, children, id }: SectionProps) => (
  <section id={id} className="py-20 border-b" style={{ borderColor: BORDER }}>
    <div className="flex flex-col md:flex-row gap-12 md:gap-24">
      <div className="w-full md:w-32 flex-shrink-0">
        <h2
          className="text-xs font-semibold tracking-widest uppercase pt-1"
          style={{ color: ACCENT, opacity: 0.7 }}
        >
          {title}
        </h2>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  </section>
);

// ── App ────────────────────────────────────────────────────────────
export default function App() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async () => {
    setSending(true);
    setError(false);
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        "service_v3w4u6k",
        "template_butxtg7",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "d9-pjb1j9AxSlVmiK"
      );
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen font-sans" style={{ background: BG, color: "#fff" }}>

      {/* Grid texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          zIndex: 0,
        }}
      />

      {/* Glow blob */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "-120px",
          right: "-120px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
        style={{ background: BG_NAV, borderColor: BORDER }}
      >
        <div
          className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          style={{ position: "relative", zIndex: 1 }}
        >
          <span
            className="font-semibold tracking-tight"
            style={{ color: "#fff", letterSpacing: "-0.02em" }}
          >
            Muhammad Gilang Ghazy
          </span>
          <div className="hidden sm:flex gap-8 items-center">
            {["tentang", "pengalaman", "kontak"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main
        className="max-w-6xl mx-auto px-6 pt-32 pb-24"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ── Hero ── */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center gap-12 pb-24 border-b"
          style={{ borderColor: BORDER }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex-1 space-y-6">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                background: "rgba(56,189,248,0.12)",
                color: ACCENT,
                borderColor: "rgba(56,189,248,0.3)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: ACCENT }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: ACCENT }}
                />
              </span>
              Tersedia untuk proyek baru
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]"
              style={{ color: "#fff", letterSpacing: "-0.03em" }}
            >
              Fresh Graduate <br />
              <span style={{ color: ACCENT }}>&amp; Fullstack Dev</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-lg text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Fresh graduate SMK Telkom Purwokerto, jurusan Pengembangan Perangkat Lunak &amp; Gim (PPLG).
              Senang membangun antarmuka yang rapi dan mudah dipakai dari tugas sekolah sampai proyek pribadi.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:lankghzy@gmail.com"
                className="px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition-all"
                style={{
                  background: ACCENT,
                  color: BG,
                  boxShadow: "0 0 24px rgba(56,189,248,0.35)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 36px rgba(56,189,248,0.55)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 24px rgba(56,189,248,0.35)")
                }
              >
                Mulai Kolaborasi <ChevronRight size={16} />
              </a>
              <a
                href="/cvats-fullstack.pdf"
                download
                className="px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 transition-all border"
                style={{
                  borderColor: "rgba(56,189,248,0.3)",
                  color: ACCENT,
                  background: "rgba(56,189,248,0.06)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(56,189,248,0.14)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(56,189,248,0.06)")
                }
              >
                Unduh CV <Download size={16} />
              </a>
            </motion.div>
          </div>

          {/* Foto */}
          <motion.div variants={itemVariants} className="relative">
            <div
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative z-10"
              style={{
                border: "3px solid rgba(56,189,248,0.35)",
                boxShadow: "0 0 48px rgba(56,189,248,0.15)",
              }}
            >
              <img
                src="/Mee.jpeg"
                alt="Muhammad Gilang Ghazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -inset-4 blur-3xl rounded-full -z-10"
              style={{ background: "rgba(56,189,248,0.08)" }}
            />
          </motion.div>
        </motion.div>

        {/* ── Tentang ── */}
        <Section title="tentang" id="tentang">
          <div className="max-w-2xl space-y-6">
            <p
              className="text-xl leading-relaxed font-light"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Lulusan SMK Telkom Purwokerto jurusan Pengembangan Perangkat Lunak &amp; Gim (PPLG), pernah
              menjalani PKL di PT Cmlabs Indonesia Digital sebagai Backend Engineer. Sekarang fokus mengasah
              skill fullstack dari API sampai{" "}
              <span className="font-medium" style={{ color: "#fff" }}>
                tampilan yang enak dilihat.
              </span>
            </p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Di luar coding, saya sering mengeksplorasi desain UI, menonton film, dan mencari inspirasi
              untuk meningkatkan kualitas tampilan aplikasi.
            </p>
          </div>
        </Section>

        {/* ── Pengalaman ── */}
        <Section title="pengalaman" id="pengalaman">
          <div className="space-y-12">
            {[
              {
                title: "Backend Engineer Intern",
                company: "PT Cmlabs Indonesia Digital Malang",
                desc: "Berkontribusi dalam pengembangan dan pemeliharaan sistem backend. Belajar langsung di lingkungan profesional selama 4 bulan.",
                tag: "Internship · Juni - September 2025",
                year: "2025",
              },
            ].map((work, i) => (
              <div
                key={i}
                className="relative flex justify-between items-start pb-8 last:pb-0 transition-all hover:translate-x-1 border-b last:border-0"
                style={{ borderColor: BORDER }}
              >
                <div className="space-y-1">
                  <h3
                    className="text-lg font-medium flex items-center gap-2 flex-wrap"
                    style={{ color: "#fff" }}
                  >
                    {work.title}
                    <span
                      className="text-sm font-normal"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      — {work.company}
                    </span>
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.55)" }} className="max-w-lg">
                    {work.desc}
                  </p>
                  <div className="pt-2">
                    <span
                      className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm"
                      style={{
                        background: "rgba(56,189,248,0.1)",
                        color: ACCENT,
                        border: "1px solid rgba(56,189,248,0.2)",
                      }}
                    >
                      {work.tag}
                    </span>
                  </div>
                </div>
                <span
                  className="text-sm font-mono italic flex-shrink-0 ml-4"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {work.year}
                </span>
              </div>
            ))}
          </div>
        </Section>

{/* ── Proyek ── */}
<Section title="proyek">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        title: "Tumpang Sari",
        desc: "Aplikasi booking servis motor. Dibangun untuk mempermudah pelanggan jadwalkan servis kendaraan mereka.",
        icon: <img src="/tumpangsari.png" alt="Tumpang Sari" className="object-contain" />,
        source: "https://github.com/GilangGhazy17/MK-3C",
        website: "", // kosongkan kalau belum ada live URL
      },
      {
        title: "FINTRA",
        desc: "Aplikasi manajemen keuangan pribadi. Catat pemasukan, pengeluaran, dan pantau kondisi keuangan.",
        icon: <img src="/fintraaa.png" alt="FINTRA" className="object-contain" />,
        source: "https://github.com/GilangGhazy17/Fintra",
        website: "",
      },
      {
        title: "RagilTrans",
        desc: "Aplikasi booking mobil online. Memudahkan pengguna memesan kendaraan dengan mudah dan cepat.",
        icon: <img src="/newragiltrans.png" alt="RagilTrans" className="object-contain" />,
        source: "https://github.com/GilangGhazy17/RAGILTRANS",
        website: "",
      },
      {
        title: "Memflip-Game",
        desc: "Website permainan memory card. Latih daya ingat dengan mencocokkan pasangan kartu yang tersembunyi.",
        icon: <img src="/logosss.png" alt="Memflip-Game" className="object-contain" />,
        source: "https://github.com/GilangGhazy17/MemFlipGame",
        website: "https://mem-flip-game.vercel.app", // contoh, ganti sesuai URL asli
      },
    ].map((proj, i) => (
      <div
        key={i}
        className="p-8 rounded-2xl flex flex-col transition-all"
        style={{ background: BG_CARD, border: `1px solid ${BORDER}` }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = BG_CARD_H;
          e.currentTarget.style.borderColor = "rgba(56,189,248,0.25)";
          e.currentTarget.style.boxShadow = "0 4px 32px rgba(56,189,248,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = BG_CARD;
          e.currentTarget.style.borderColor = BORDER;
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
          style={{
            background: "rgba(56,189,248,0.1)",
            border: "1px solid rgba(56,189,248,0.2)",
          }}
        >
          {proj.icon}
        </div>

        {/* Title & desc */}
        <h3 className="font-semibold mb-2" style={{ color: "#fff" }}>
          {proj.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>
          {proj.desc}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <a
            href={proj.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
              background: "rgba(255,255,255,0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.6)";
            }}
          >
            <Github size={13} /> Source
          </a>

          {proj.website && (
            <a
              href={proj.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all"
              style={{
                borderColor: "rgba(56,189,248,0.3)",
                color: ACCENT,
                background: "rgba(56,189,248,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56,189,248,0.18)";
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56,189,248,0.08)";
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)";
              }}
            >
              <Code2 size={13} /> Website
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
</Section>

        {/* ── Stack ── */}
        <Section title="stack">
          <div className="flex flex-wrap gap-3">
            {(
              [
                { text: "React",        c: "rgba(56,189,248,0.15)",  tc: "#7DD3FC", bc: "rgba(56,189,248,0.3)"   },
                { text: "Next.js",      c: "rgba(255,255,255,0.07)", tc: "#e2e8f0", bc: "rgba(255,255,255,0.15)" },
                { text: "TypeScript",   c: "rgba(96,165,250,0.15)",  tc: "#93C5FD", bc: "rgba(96,165,250,0.3)"   },
                { text: "Tailwind CSS", c: "rgba(56,189,248,0.15)",  tc: "#38BDF8", bc: "rgba(56,189,248,0.3)"   },
                { text: "Golang",       c: "rgba(52,211,153,0.15)",  tc: "#6EE7B7", bc: "rgba(52,211,153,0.3)"   },
                { text: "Node.js",      c: "rgba(163,230,53,0.12)",  tc: "#BEF264", bc: "rgba(163,230,53,0.3)"   },
                { text: "Git",          c: "rgba(251,146,60,0.12)",  tc: "#FDB07E", bc: "rgba(251,146,60,0.3)"   },
                { text: "Supabase",     c: "rgba(52,211,153,0.12)",  tc: "#6EE7B7", bc: "rgba(52,211,153,0.25)"  },
                { text: "DBeaver",      c: "rgba(255,255,255,0.06)", tc: "#CBD5E1", bc: "rgba(255,255,255,0.12)" },
                { text: "PostgreSQL",   c: "rgba(96,165,250,0.12)",  tc: "#93C5FD", bc: "rgba(96,165,250,0.25)"  },
                { text: "mySQL",        c: "rgba(250,204,21,0.12)",  tc: "#FDE68A", bc: "rgba(250,204,21,0.3)"   },
              ] as { text: string; c: string; tc: string; bc: string }[]
            ).map(({ text, c, tc, bc }) => (
              <span
                key={text}
                className="px-4 py-1.5 rounded-full text-sm font-medium border"
                style={{ background: c, color: tc, borderColor: bc }}
              >
                {text}
              </span>
            ))}
          </div>
        </Section>

                {/* ── Kontak ── */}
        <Section title="kontak" id="kontak">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT */}
            <div className="space-y-6">
              <p className="text-2xl font-light" style={{ color: "rgba(255,255,255,0.75)" }}>
                Ada ide yang ingin dibicarakan? <br />
                <span className="font-semibold" style={{ color: "#fff" }}>
                  Ayo ngobrol bareng.
                </span>
              </p>

              {/* Sosmed pindah ke kiri */}
              <div className="flex flex-col gap-4 pt-4">
                {[
                  { href: "mailto:lankghzy@gmail.com", icon: <Mail size={18} />, label: "lankghzy@gmail.com" },
                  { href: "https://wa.me/6285755937382", icon: <Phone size={18} />, label: "0857-5593-7382" },
                  { href: "https://github.com/MuhammadGilangGhazy1722", icon: <Github size={18} />, label: "MuhammadGilangGhazy" },
                  { href: "https://www.instagram.com/lankghzy_", icon: <Instagram size={18} />, label: "@lankghzy_" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {icon}
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT (FORM) */}
            <div
              className="backdrop-blur-sm rounded-2xl p-8 space-y-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${BORDER}`,
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(["name", "email"] as (keyof FormFields)[]).map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Nama" : "Email"}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all placeholder-white/30"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(56,189,248,0.18)",
                      color: "#fff",
                    }}
                  />
                ))}
              </div>

              <textarea
                placeholder="Pesan"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none placeholder-white/30"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(56,189,248,0.18)",
                  color: "#fff",
                }}
              />

              <button
                onClick={sendEmail}
                disabled={sending}
                className="w-full px-6 py-4 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: ACCENT,
                  color: BG,
                  boxShadow: "0 0 24px rgba(56,189,248,0.4)",
                }}
              >
                {sending ? "Mengirim..." : sent ? "Terkirim ✓" : "Kirim Pesan"}
              </button>

              {sent && <p className="text-sm text-green-400">Pesan berhasil dikirim!</p>}
              {error && <p className="text-sm text-red-400">Gagal kirim.</p>}
            </div>
          </div>
        </Section>
      </main>

      <footer
        className="border-t"
        style={{ background: "rgba(0,0,0,0.3)", borderColor: BORDER }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-center md:justify-between items-center gap-4">
          <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.3)" }}>
            Built by Gilang — 2026 · Batam, Indonesia
          </p>
          <div className="flex gap-3 items-center">
            <span className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
            <span className="text-sm font-medium" style={{ color: ACCENT }}>
              GilangGhazy.dev
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}