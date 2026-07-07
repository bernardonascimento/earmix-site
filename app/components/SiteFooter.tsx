import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={28} height={28} className="h-7 w-auto" />
          <span className="text-lg font-semibold tracking-tight">EarMix</span>
        </Link>

        <nav className="flex items-center gap-6 font-mono text-sm text-ink-dim">
          <Link href="/suporte" className="transition hover:text-ink">
            Suporte
          </Link>
          <Link href="/privacidade" className="transition hover:text-ink">
            Privacidade
          </Link>
          <Link href="/termos" className="transition hover:text-ink">
            Termos
          </Link>
        </nav>

        <p className="font-mono text-xs text-ink-faint">© 2026 EarMix</p>
      </div>
    </footer>
  );
}
