export default function Hero() {
  return (
    <section className="h-screen relative">
      <img
        src="/loviq-roses.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <img src="/logo.png" alt="Loviq JCS" className="w-40 md:w-48 drop-shadow-lg" />

        <h1 className="font-display text-4xl md:text-6xl mt-10 max-w-3xl text-balance">
          Convierte tus recuerdos en una experiencia inolvidable
        </h1>

        <p className="mt-8 text-lg md:text-xl tracking-wide text-white/90 flex flex-wrap justify-center items-center gap-3">
          <span>Fotos</span>
          <span className="text-gold">&middot;</span>
          <span>Videos</span>
          <span className="text-gold">&middot;</span>
          <span>M&uacute;sica</span>
          <span className="text-gold">&middot;</span>
          <span>Mensajes</span>
        </p>

        <a
          href="#cta"
          className="mt-10 inline-block rounded-full bg-gradient-to-r from-rose to-plum px-9 py-3.5 font-semibold tracking-wide text-white shadow-lg shadow-black/30 transition-transform hover:scale-105"
        >
          Pide el tuyo
        </a>
      </div>
    </section>
  );
}
