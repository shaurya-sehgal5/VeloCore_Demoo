import { CheckCircle2, Clock3, Layers3, Server } from "lucide-react";
import Reveal from "./Reveal";

const data = [
  { icon: CheckCircle2, title: "Status", value: "Running" },
  { icon: Layers3, title: "Framework", value: "React + Express" },
  { icon: Clock3, title: "Build Time", value: "48 Seconds" },
  { icon: Server, title: "Runtime", value: "Kubernetes (k3s)" },
];

export default function DeploymentInfo() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <span className="text-[#3ecf8e] font-mono text-[13px] font-medium">
            Deployment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Deployment information
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {data.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 60}>
                <div className="panel p-7 h-full">
                  <Icon size={24} className="text-[#3ecf8e]" />
                  <h3 className="font-mono text-xl font-semibold mt-6">
                    {item.value}
                  </h3>
                  <p className="text-zinc-500 text-[13.5px] mt-1.5">
                    {item.title}
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
