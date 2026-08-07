import {
  GitBranch,
  ScanSearch,
  Boxes,
  ShieldCheck,
  Cloud,
  Activity,
} from "lucide-react";
import Reveal from "./Reveal";

const pipeline = [
  { icon: GitBranch, title: "GitHub", desc: "Repository clone & auth" },
  { icon: ScanSearch, title: "Framework", desc: "Detection & dependency graph" },
  { icon: Boxes, title: "Docker", desc: "Multi-stage image build" },
  { icon: ShieldCheck, title: "Security", desc: "Gitleaks · Sonar · Trivy" },
  { icon: Cloud, title: "Kubernetes", desc: "Helm release & rollout" },
  { icon: Activity, title: "Monitoring", desc: "Prometheus · Grafana · Loki" },
];

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center">
          <span className="text-[#3ecf8e] font-mono text-[13px] font-medium">
            Deployment Pipeline
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            From GitHub to production
          </h2>
          <p className="text-zinc-400 mt-5">
            Every deployment follows the same automated, cloud-native pipeline.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#3ecf8e]/40 via-white/10 to-transparent" />

          <div className="flex flex-col gap-4">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 70}>
                  <div className="panel flex items-center gap-5 p-5 pl-6 relative">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#3ecf8e]/10 border border-[#3ecf8e]/20 flex items-center justify-center">
                      <Icon size={21} className="text-[#3ecf8e]" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-[15.5px] font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-zinc-500 text-[13.5px] mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                    <span className="font-mono text-[12px] text-zinc-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
