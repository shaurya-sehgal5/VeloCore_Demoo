import { ArrowRight, GitBranch, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { value: "17", label: "Deployment Stages" },
  { value: "5+", label: "Frameworks Supported" },
  { value: "<60s", label: "Typical Deployment" },
];

const stack = [
  "Docker",
  "Kubernetes",
  "Helm",
  "Terraform",
  "Prometheus",
  "Grafana",
  "Loki",
];

export default function Hero() {
  return (
    <section className="relative px-6 pt-24 pb-28 overflow-hidden">
      <div className="glow-blob absolute left-1/2 top-[-120px] -translate-x-1/2 w-[640px] h-[640px] bg-[#3ecf8e]/[0.10] rounded-full" />

      <div className="relative max-w-6xl mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 chip rounded-full px-3.5 py-1.5 text-[12.5px] font-mono">
            <Sparkles size={13} className="text-[#3ecf8e]" />
            Self-Hosted Kubernetes Platform
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-[3.25rem] md:text-[4.5rem] font-bold leading-[1.05] tracking-tight mt-7">
            Deploy faster.
            <br />
            <span className="text-[#3ecf8e]">Ship confidently.</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="text-zinc-400 text-lg leading-8 mt-6 max-w-xl mx-auto">
            A production-ready deployment platform that automates builds,
            security scanning, Kubernetes rollouts, monitoring, and rollback.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex items-center justify-center gap-3 mt-10">
            <a
              href="#pipeline"
              className="btn-primary rounded-xl px-6 py-3 text-[14px] flex items-center gap-2"
            >
              View Demo
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="btn-secondary rounded-xl px-6 py-3 text-[14px] flex items-center gap-2"
            >
              <GitBranch size={16} />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="flex items-center justify-center gap-10 md:gap-16 mt-20">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-mono text-3xl font-semibold text-white">
                  {s.value}
                </div>
                <div className="text-zinc-500 text-[13px] mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-14">
            {stack.map((item) => (
              <span
                key={item}
                className="chip rounded-full px-4 py-1.5 text-[13px] font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
