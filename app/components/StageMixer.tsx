// Mini-mesa "ao vivo": cada canal tem um VU de LED que pulsa e um fader — a mesma
// linguagem visual do app. CSS puro (sem JS), então funciona no site estático.
const SEGMENTS = 14;

const CHANNELS = [
  { name: "Kick", accent: "fader" as const, fader: 72, dur: 1.15, delay: 0 },
  { name: "Voz", accent: "phone" as const, fader: 58, dur: 1.35, delay: 0.45 },
  { name: "Guita", accent: "fader" as const, fader: 48, dur: 0.95, delay: 0.15 },
  { name: "Teclas", accent: "phone" as const, fader: 66, dur: 1.25, delay: 0.6 },
  { name: "Click", accent: "fader" as const, fader: 40, dur: 1.05, delay: 0.3 },
];

// Cor do segmento por zona (i=0 é a base): verde, amarelo no alto, vermelho no topo.
function segClass(i: number) {
  if (i >= 12) return "bg-vu-hot";
  if (i >= 9) return "bg-vu-warn";
  return "bg-fader";
}

export function StageMixer() {
  return (
    <div className="rounded-2xl border border-border bg-surface/70 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-5">
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
          Fone · Baterista
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-fader">
          <span className="h-2 w-2 rounded-full bg-fader" /> ao vivo
        </span>
      </div>

      <div className="flex justify-between gap-3">
        {CHANNELS.map((ch) => (
          <div key={ch.name} className="flex flex-1 flex-col items-center">
            <div className="flex h-40 items-stretch gap-1.5 sm:h-52">
              {/* VU meter (LEDs de baixo p/ cima) */}
              <div className="flex w-2.5 flex-col-reverse gap-[3px]">
                {Array.from({ length: SEGMENTS }).map((_, i) => (
                  <span
                    key={i}
                    className={`vu-seg flex-1 rounded-[2px] ${segClass(i)}`}
                    style={{
                      animationDuration: `${ch.dur}s`,
                      animationDelay: `${-(ch.delay + i * 0.05)}s`,
                    }}
                  />
                ))}
              </div>

              {/* Fader */}
              <div className="relative w-8 rounded-full bg-surface-2">
                <div
                  className={`absolute inset-x-0 bottom-0 rounded-full ${
                    ch.accent === "fader"
                      ? "bg-gradient-to-t from-fader-dk to-fader"
                      : "bg-gradient-to-t from-phone-dk to-phone"
                  }`}
                  style={{ height: `${ch.fader}%` }}
                >
                  <span className="absolute inset-x-1 top-0 h-1.5 -translate-y-1/2 rounded-full bg-ink/90" />
                </div>
              </div>
            </div>
            <span className="mt-2 font-mono text-[10px] text-ink-dim">{ch.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
