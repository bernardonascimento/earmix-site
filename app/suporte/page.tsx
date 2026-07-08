import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Suporte",
  description:
    "Ajuda com o EarMix: como conectar na mesa Behringer X32 / Midas M32, dúvidas frequentes e contato.",
};

const EMAIL = "bernardonasciimento@gmail.com";

const FAQ = [
  {
    q: "Preciso de internet para usar o EarMix?",
    a: "Não. O app fala direto com a mesa pela rede Wi-Fi local (protocolo OSC, porta 10023). Basta o celular estar no mesmo Wi-Fi da mesa — nem precisa de acesso à internet.",
  },
  {
    q: "Quais mesas são compatíveis?",
    a: "As linhas Behringer X32 e Midas M32, incluindo as variantes (X32 Compact, Producer, Rack, Core e M32R / M32C). Todas falam o mesmo protocolo de controle.",
  },
  {
    q: "O app não encontra a minha mesa. O que faço?",
    a: "Confirme que o celular está na mesma rede Wi-Fi da mesa. Se a busca automática não achar (algumas redes bloqueiam descoberta), toque em conectar manualmente e digite o IP da mesa — você encontra o IP no próprio painel da X32/M32, em Setup › Network.",
  },
  {
    q: "Se eu mudar o meu mix, atrapalho os outros músicos?",
    a: "Não. Você mexe apenas no seu bus de retorno (o seu fone). O som da casa (PA) e o mix dos outros músicos não são tocados. O controle do Main LR é reservado ao modo administrador.",
  },
  {
    q: "Funciona no iPhone e no Android?",
    a: "Sim, o EarMix está disponível para iOS e Android.",
  },
  {
    q: "O EarMix coleta os meus dados?",
    a: "Não. O app não cria conta nem coleta dados pessoais; suas preferências ficam apenas no aparelho. Veja a Política de Privacidade para os detalhes.",
  },
];

export default function Suporte() {
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

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-fader">
          Estamos por perto
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Suporte</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-dim">
          Travou em algo, achou um bug ou tem uma ideia? Fala com a gente — respondemos
          o mais rápido possível.
        </p>

        {/* Contato */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-surface p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Fale por e-mail</h2>
            <p className="mt-1 text-ink-dim">
              O canal oficial de suporte do EarMix.
            </p>
          </div>
          <a
            href={`mailto:${EMAIL}?subject=Suporte%20EarMix`}
            className="inline-flex items-center justify-center rounded-full bg-phone px-5 py-3 font-mono text-sm font-medium text-white transition hover:bg-phone-dk"
          >
            {EMAIL}
          </a>
        </div>

        {/* FAQ */}
        <h2 className="mt-14 text-sm font-mono uppercase tracking-[0.2em] text-ink-faint">
          Perguntas frequentes
        </h2>
        <div className="mt-6 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {FAQ.map((item) => (
            <details key={item.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium tracking-tight [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="font-mono text-ink-faint transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 leading-relaxed text-ink-dim">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-10 max-w-2xl font-mono text-sm leading-relaxed text-ink-faint">
          Ainda com dúvida? Escreva para{" "}
          <a href={`mailto:${EMAIL}`} className="text-ink-dim underline transition hover:text-ink">
            {EMAIL}
          </a>{" "}
          e descreva o modelo da sua mesa e o que aconteceu.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
