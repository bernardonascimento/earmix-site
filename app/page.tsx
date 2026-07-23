import Image from "next/image";
import Link from "next/link";
import { StageMixer } from "./components/StageMixer";
import { SiteFooter } from "./components/SiteFooter";

const FEATURES = [
  {
    title: "VU em tempo real",
    body: "Veja o nível de cada instrumento como na mesa — verde, amarelo e o pico no vermelho. Sobe e desce junto com o palco.",
  },
  {
    title: "Mute do seu jeito",
    body: "Tirar um instrumento do seu fone corta só o seu retorno. A PA e o mix dos outros músicos não são tocados.",
  },
  {
    title: "Presets",
    body: "Salve o seu mix e recupere em segundos no próximo ensaio ou culto. Cada músico com o seu.",
  },
  {
    title: "Sem cabo, sem PC",
    body: "Conecte o celular no Wi-Fi da mesa e pronto. O app acha a X32/M32 na rede — ou você digita o IP.",
  },
];

const STEPS = [
  {
    k: "Wi-Fi",
    title: "Entre na rede da mesa",
    body: "Conecte o celular no mesmo Wi-Fi da Behringer X32 ou Midas M32.",
  },
  {
    k: "Abrir",
    title: "Escolha o seu retorno",
    body: "Abra o EarMix, encontre a mesa e selecione o bus do seu fone.",
  },
  {
    k: "Mixar",
    title: "Faça o seu mix",
    body: "Ajuste o volume de cada canal, mute o que atrapalha e toque tranquilo.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-stage/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="text-xl font-semibold tracking-tight">EarMix</span>
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-ink-faint sm:block">
            Behringer X32 · Midas M32
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pt-10 pb-20 lg:grid-cols-2 lg:gap-8 lg:pt-16">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-fader">
            Seu retorno, no seu controle
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Seu mix de fone,
            <br />
            <span className="text-phone">na palma da mão</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-dim">
            Controle o volume de cada instrumento no seu fone direto do celular
            — numa mesa Behringer X32 ou Midas M32, sem depender do técnico de
            som a cada ajuste.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://apps.apple.com/br/app/earmix/id6789297321"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-b from-phone to-phone-dk px-6 py-3 text-white shadow-[0_12px_32px_-8px_rgba(59,130,246,0.6)] ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-8px_rgba(59,130,246,0.85)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 384 512"
                className="h-7 w-7 shrink-0"
                fill="currentColor"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <span className="flex flex-col leading-none">
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/80">
                  Baixar na
                </span>
                <span className="mt-1 text-lg font-semibold tracking-tight">
                  App Store
                </span>
              </span>
            </a>
            <span
              aria-disabled="true"
              title="Em breve no Google Play"
              className="inline-flex cursor-not-allowed items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-3 text-ink-dim opacity-60 ring-1 ring-white/5"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 512 512"
                className="h-6 w-6 shrink-0"
                fill="currentColor"
              >
                <path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <span className="flex flex-col leading-none">
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                  Em breve no
                </span>
                <span className="mt-1 text-lg font-semibold tracking-tight">
                  Google Play
                </span>
              </span>
            </span>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <StageMixer />
        </div>
      </section>

      {/* O que é */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <p className="max-w-6xl text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          Quem toca sabe: o mix de fone certo muda tudo. O EarMix tira esse
          controle da mesa e coloca{" "}
          <span className="text-fader">na mão de cada músico</span> — sem mexer
          no som da casa.
        </p>
      </section>

      {/* Destaques */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-surface p-7">
              <h3 className="text-lg font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-dim">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-ink-faint">
          Como funciona
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.k} className="border-t-2 border-fader/60 pt-4">
              <span className="font-mono text-xs uppercase tracking-widest text-fader">
                {s.k}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-dim">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 font-mono text-sm leading-relaxed text-ink-faint">
          Comunicação por OSC sobre a rede local (porta 10023). O celular fala
          direto com a mesa — nada passa por servidores, nada sai da sua rede.
          O EarMix não grava áudio nem armazena os seus mixes fora do aparelho:
          o que você ajusta vai direto para a X32/M32 e fica só entre vocês dois,
          na mesma Wi-Fi.
        </p>
      </section>

      <SiteFooter />
    </>
  );
}
