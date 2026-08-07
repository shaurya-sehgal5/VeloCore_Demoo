const stats = [
  { value: "99.9%", label: "Uptime target" },
  { value: "48s", label: "Avg. build time" },
  { value: "12s", label: "Avg. rollback time" },
  { value: "0", label: "Manual steps" },
];

export default function Stats() {
  return (
    <section className="border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="text-3xl font-bold mono text-[var(--accent)]">
              {s.value}
            </div>
            <p className="text-[var(--text-dim)] text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
