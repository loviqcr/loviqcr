import { usePricing } from '../hooks/usePricing';
import { tiers } from '../pricingTiers';

const base = import.meta.env.BASE_URL;

function formatColones(amount) {
  return `₡${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}

export default function Pricing() {
  const prices = usePricing();

  return (
    <section id="precios" className="bg-blush py-24 px-6">
      <p className="text-center font-body text-xs tracking-[0.3em] uppercase text-rose-deep mb-3">
        Precios
      </p>
      <h2 className="text-center font-display text-3xl md:text-4xl text-ink text-balance mb-16">
        Elige la invitación perfecta
      </h2>

      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3 sm:items-center">
        {tiers.map((tier) => (
          <div
            key={tier.key}
            className={
              tier.featured
                ? 'rounded-2xl border-2 border-rose bg-white px-8 py-10 shadow-xl shadow-rose/20 sm:scale-105'
                : 'rounded-2xl border border-ink/10 bg-white/60 px-8 py-10'
            }
          >
            <div className="text-center">
              <span className={`inline-block rounded-full ${tier.badgeClass} px-5 py-1.5 text-sm font-semibold text-white`}>
                {tier.badge}
              </span>
              <p className="mt-6 font-display text-4xl font-bold text-gold-deep">
                {formatColones(prices[tier.key])}
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span className="text-rose">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/50687669338?text=${encodeURIComponent(`Hola, quiero la ${tier.badge.toLowerCase()}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={
                tier.featured
                  ? 'mt-10 block rounded-full bg-gradient-to-r from-rose to-plum px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-105'
                  : 'mt-10 block rounded-full border-2 border-rose-deep px-6 py-3.5 text-center font-semibold text-rose-deep transition-colors hover:bg-rose-deep hover:text-white'
              }
            >
              Quiero esta
            </a>

            {tier.example && (
              <a
                href={`${base}${tier.example}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center text-sm text-ink-soft underline hover:text-rose-deep"
              >
                Ver ejemplo de invitación
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
