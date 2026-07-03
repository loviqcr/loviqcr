export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink py-10 px-6 text-center text-white/70">
      <p className="font-script text-xl text-white">Loviq &middot; JCS</p>
      <p className="mt-3 text-xs tracking-wide">
        &copy; {year} Loviq JCS &mdash; Costa Rica
      </p>
    </footer>
  );
}
