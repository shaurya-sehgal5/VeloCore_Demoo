import { useEffect, useState } from "react";
import { Terminal, GitBranch } from "lucide-react";

const links = ["Features", "Pipeline", "Architecture", "Stack"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#3ecf8e]/10 border border-[#3ecf8e]/25 flex items-center justify-center">
            <Terminal size={16} className="text-[#3ecf8e]" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">
            VeloCore
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[14px] text-zinc-400">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-white transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 btn-secondary rounded-lg px-3.5 py-2 text-[13px]"
          >
            <GitBranch size={15} />
            GitHub
          </a>
          <a
            href="#"
            className="btn-primary rounded-lg px-4 py-2 text-[13px]"
          >
            Deploy Now
          </a>
        </div>
      </div>
    </header>
  );
}
