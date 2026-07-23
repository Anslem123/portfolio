import { personal } from "@/data/personal";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-base)]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] animate-pulse" />
          <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">{personal.preferredName.charAt(0)}</span>
          </div>
          <div className="absolute -inset-2 rounded-3xl border border-[var(--brand-a20)] animate-[spin_3s_linear_infinite]" />
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
