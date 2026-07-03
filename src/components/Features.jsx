const steps = [
  { n: 1, text: "Escaneas el código QR o ingresas al enlace." },
  { n: 2, text: "Descubres un mundo de recuerdos creado para ti." },
  { n: 3, text: "Revives momentos únicos cuando y donde quieras." },
];

const occasions = [
  "Aniversarios",
  "Cumpleaños",
  "San Valentín",
  "Navidad",
  "Graduaciones",
  "Bodas",
  "Despedidas",
  "Y cualquier ocasión especial",
];

export default function Features() {
  return (
    <section className="bg-blush py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display italic text-2xl md:text-3xl text-ink text-balance">
          Más que un regalo,{" "}
          <span className="bg-gradient-to-r from-rose-deep to-plum bg-clip-text text-transparent">
            es una experiencia
          </span>{" "}
          que queda para siempre.
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-4xl gap-10 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="flex flex-col items-center text-center gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center">
              <svg viewBox="0 0 100 90" className="absolute inset-0 h-full w-full text-rose" fill="none" stroke="currentColor" strokeWidth="6">
                <path d="M50 88 C20 65,0 42,0 25 C0 8,15 0,30 0 C42 0,50 8,50 20 C50 8,58 0,70 0 C85 0,100 8,100 25 C100 42,80 65,50 88 Z" />
              </svg>
              <span className="relative font-body font-bold text-rose-deep">{s.n}</span>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed max-w-[22ch]">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-24 max-w-4xl">
        <p className="text-center font-body text-xs tracking-[0.3em] uppercase text-rose-deep mb-8">
          Perfecto para
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 text-center">
          {occasions.map((o) => (
            <div key={o} className="text-sm text-ink-soft">{o}</div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-lg rounded-2xl border border-rose/30 bg-white/60 px-6 py-5 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-rose-deep font-semibold mb-2">
          Seguro y privado
        </p>
        <p className="text-sm text-ink-soft leading-relaxed">
          Tu historia es única y por eso es 100% privada. Solo las personas que tú elijas podrán acceder.
        </p>
      </div>
    </section>
  );
}
