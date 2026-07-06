import Link from "next/link";
import { ROUTES } from "@/constants/site";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md px-4">
        <div className="text-8xl font-black gradient-text leading-none">404</div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Page not found</h1>
        <p className="text-[var(--text-muted)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            href={ROUTES.home}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#6C63FF] text-white text-sm font-semibold hover:bg-[#5046E5] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href={ROUTES.projects}
            className="inline-flex items-center h-11 px-6 rounded-xl border border-[var(--border-color)] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#6C63FF] transition-all"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
