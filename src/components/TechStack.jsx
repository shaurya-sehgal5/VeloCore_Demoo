import Reveal from "./Reveal";

const tech = [
  "React",
  "Express",
  "Docker",
  "Kubernetes",
  "Helm",
  "Terraform",
  "BullMQ",
  "Redis",
  "PostgreSQL",
  "Prometheus",
  "Grafana",
  "Loki",
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="text-[#3ecf8e] font-mono text-[13px] font-medium">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Built on proven infrastructure
          </h2>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="chip rounded-full px-5 py-2.5 text-[13.5px] font-mono"
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
