import {
  Boxes,
  ShieldCheck,
  Rocket,
  Activity,
  Workflow,
  RefreshCcw,
} from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: Workflow,
    title: "Framework Detection",
    description:
      "Automatically detects React, Next.js, Express and Flask, then generates an optimized deployment plan.",
  },
  {
    icon: Boxes,
    title: "Container Builds",
    description:
      "BuildKit-powered multi-stage Docker builds with layer caching for faster, repeatable deployments.",
  },
  {
    icon: ShieldCheck,
    title: "Security Scanning",
    description:
      "Integrated Gitleaks, SonarQube and Trivy scanning gate every deployment before it ships.",
  },
  {
    icon: Rocket,
    title: "Kubernetes Deployments",
    description:
      "Automatic Helm releases, namespace isolation, and production-ready rollout strategies.",
  },
  {
    icon: Activity,
    title: "Observability",
    description:
      "Built-in Prometheus metrics, Grafana dashboards and centralized Loki log aggregation.",
  },
  {
    icon: RefreshCcw,
    title: "Automatic Rollback",
    description:
      "Rolls back to the last healthy release automatically when health checks fail.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <span className="text-[#3ecf8e] font-mono text-[13px] font-medium">
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Everything required for
            <br />
            modern deployments
          </h2>
          <p className="text-zinc-400 mt-5 max-w-xl mx-auto leading-7">
            VeloCore automates the complete software delivery lifecycle — from
            repository clone to production, with security and monitoring built
            in.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 60}>
                <div className="panel p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#3ecf8e]/10 border border-[#3ecf8e]/20 flex items-center justify-center">
                    <Icon size={22} className="text-[#3ecf8e]" />
                  </div>
                  <h3 className="text-lg font-semibold mt-6">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-[14.5px] mt-2.5 leading-6.5">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
