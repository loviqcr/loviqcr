const base = import.meta.env.BASE_URL;

export default function Gallery() {
  return (
    <section className="bg-blush-deep py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-body text-xs tracking-[0.3em] uppercase text-rose-deep mb-3">
          Así se ve
        </p>
        <h2 className="text-center font-display text-3xl md:text-4xl text-ink text-balance">
          Tu tarjeta, tu página de recuerdos
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <img
            src={`${base}loviq-scan.jpg`}
            alt="Escaneando la tarjeta Loviq JCS para abrir la página de recuerdos"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl shadow-ink/10"
          />
          <img
            src={`${base}loviq-giftbox.jpg`}
            alt="Caja de regalo Loviq JCS con la libreta Nuestra Historia, la tarjeta QR y polaroids"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl shadow-ink/10"
          />
          <img
            src={`${base}loviq-roses.jpg`}
            alt="Tarjeta Loviq JCS junto a rosas y velas, con la página de recuerdos en el celular"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl shadow-ink/10"
          />
        </div>
      </div>
    </section>
  );
}
