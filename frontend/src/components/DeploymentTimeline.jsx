import { CheckCircle2 } from "lucide-react";

const steps = [
  "GitHub authentication",
  "Repository clone",
  "Framework detection",
  "Dependency graph",
  "Gitleaks scan",
  "SonarQube analysis",
  "Docker build",
  "Trivy scan",
  "Docker push",
  "Helm deployment",
  "Backend rollout",
  "Frontend rollout",
  "Runtime registration",
  "Monitoring hookup",
  "Deployment complete",
];

export default function DeploymentTimeline() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="max-w-xl">
          <span className="eyebrow">Under the hood</span>
          <h2 className="text-4xl font-bold mt-3 tracking-tight">
            15 stages, every run
          </h2>
        </div>
        <p className="text-[var(--text-dim)] text-sm mono">
          checked automatically · zero manual approval
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-14">
        {steps.map((step, i) => (
          <div
            key={step}
            className="flex items-center gap-3 py-2 border-b border-[var(--border)]"
          >
            <CheckCircle2
              size={17}
              className="text-[var(--accent)] flex-shrink-0"
            />
            <span className="text-[var(--text-faint)] mono text-xs w-5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[15px]">{step}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
