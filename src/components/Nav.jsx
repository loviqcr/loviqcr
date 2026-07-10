export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between bg-blush/95 px-6 py-3 backdrop-blur-md">
      <span className="font-script text-xl text-ink">Loviq JCS</span>

      <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:gap-x-6 sm:text-sm">
        <li>
          <a href="#inicio" className="text-ink-soft transition-colors hover:text-rose-deep">
            Inicio
          </a>
        </li>
        <li>
          <a href="#como-funciona" className="text-ink-soft transition-colors hover:text-rose-deep">
            Cómo funciona
          </a>
        </li>
        <li>
          <a href="#precios" className="text-ink-soft transition-colors hover:text-rose-deep">
            Precios
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/50687669338"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft transition-colors hover:text-rose-deep"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
