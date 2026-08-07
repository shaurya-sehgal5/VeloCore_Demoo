import { Terminal, GitBranch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#3ecf8e]/10 border border-[#3ecf8e]/25 flex items-center justify-center">
            <Terminal size={14} className="text-[#3ecf8e]" />
          </div>
          <span className="text-[14px] font-semibold">VeloCore</span>
          <span className="text-zinc-600 text-[13px] font-mono ml-2">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-4 text-zinc-500">
          <a href="#" className="hover:text-white transition-colors duration-200">
            <GitBranch size={18} />
          </a>
         
        </div>
      </div>
    </footer>
  );
}
