export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-rose-deep via-rose to-plum py-24 px-6 text-center text-white">
      <div className="mx-auto max-w-xl">
        <p className="font-script text-3xl md:text-4xl">Loviq</p>
        <p className="text-xs tracking-[0.4em] uppercase text-white/80 mt-1">&middot; J C S &middot;</p>

        <h2 className="mt-8 font-display text-2xl md:text-3xl text-balance">
          Porque los mejores regalos no se envuelven, se sienten.
        </h2>

        <a
          href="https://wa.me/50687669338"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-white px-9 py-3.5 font-semibold tracking-wide text-rose-deep shadow-lg shadow-black/20 transition-transform hover:scale-105"
        >
          Pide el tuyo ahora
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/90">
          <a href="https://instagram.com/Loviq_cr" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram @Loviq_cr
          </a>
          <span className="text-white/50">&middot;</span>
          <a href="https://wa.me/50687669338" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            WhatsApp +506 8766 9338
          </a>
          <span className="text-white/50">&middot;</span>
          <span>Facebook Loviq cr</span>
        </div>
      </div>
    </section>
  );
}
