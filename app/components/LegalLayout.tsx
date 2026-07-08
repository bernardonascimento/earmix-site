import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./SiteFooter";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-stage/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-auto" />
            <span className="text-xl font-semibold tracking-tight">EarMix</span>
          </Link>
          <Link href="/" className="font-mono text-sm text-ink-dim transition hover:text-ink">
            ← Voltar
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
          Atualizado em {updated}
        </p>
        <div className="legal mt-8">{children}</div>
      </main>

      <SiteFooter />
    </>
  );
}
