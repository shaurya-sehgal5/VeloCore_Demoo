import {
  GitBranch,
  Boxes,
  Shield,
  Database,
  Server,
  Activity,
  Globe,
} from "lucide-react";
import Reveal from "./Reveal";

const nodes = [
  { icon: GitBranch, title: "GitHub", desc: "Repository" },
  { icon: Boxes, title: "Build Engine", desc: "Docker BuildKit" },
  { icon: Shield, title: "Security", desc: "Gitleaks · Sonar · Trivy" },
  { icon: Database, title: "Registry", desc: "Docker Hub" },
  { icon: Server, title: "Kubernetes", desc: "Helm + k3s" },
  { icon: Activity, title: "Monitoring", desc: "Prometheus · Grafana · Loki" },
  { icon: Globe, title: "Live URL", desc: "Application" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <span className="text-[#3ecf8e] font-mono text-[13px] font-medium">
            Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Deployment architecture
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <Reveal key={node.title} delay={index * 50}>
                <div className="panel p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#3ecf8e]/10 border border-[#3ecf8e]/20 flex items-center justify-center">
                    <Icon size={21} className="text-[#3ecf8e]" />
                  </div>
                  <h3 className="text-[15px] font-semibold mt-5">
                    {node.title}
                  </h3>
                  <p className="text-zinc-500 text-[13px] mt-1">{node.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
