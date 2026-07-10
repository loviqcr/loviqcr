import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { usePricing } from '../../hooks/usePricing';
import { tiers } from '../../pricingTiers';

export default function AdminPricing() {
  const prices = usePricing();
  const [draft, setDraft] = useState(null);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);

  const values = draft ?? prices;

  function handleChange(key, value) {
    setDraft({ ...values, [key]: Number(value) || 0 });
  }

  async function handleSave() {
    setSaving(true);
    setSavedAt(null);
    try {
      await setDoc(doc(db, 'config', 'pricing'), values, { merge: true });
      setSavedAt(new Date());
      setDraft(null);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-blush px-6 py-16">
      <div className="mx-auto max-w-lg rounded-2xl border border-ink/10 bg-white/70 p-8 shadow-lg">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-display text-2xl text-ink">Precios</h1>
          <button
            onClick={() => signOut(auth)}
            className="text-sm text-ink-soft underline hover:text-rose-deep"
          >
            Salir
          </button>
        </div>

        {tiers.map((tier) => (
          <div key={tier.key} className="mb-6">
            <label className="block text-xs uppercase tracking-wide text-ink-soft mb-1">
              {tier.badge}
            </label>
            <div className="flex items-center gap-2">
              <span className="text-ink-soft">₡</span>
              <input
                type="number"
                min="0"
                step="500"
                value={values[tier.key]}
                onChange={(e) => handleChange(tier.key, e.target.value)}
                className="w-full rounded-lg border border-ink/15 px-3 py-2 text-sm text-ink outline-none focus:border-rose-deep"
              />
            </div>
          </div>
        ))}

        <button
          onClick={handleSave}
          disabled={saving}
          className="mt-2 w-full rounded-full bg-gradient-to-r from-rose to-plum px-6 py-3 font-semibold text-white transition-transform hover:scale-105 disabled:opacity-60"
        >
          {saving ? 'Guardando…' : 'Guardar cambios'}
        </button>

        {savedAt && (
          <p className="mt-4 text-center text-sm text-ink-soft">
            Guardado a las {savedAt.toLocaleTimeString('es-CR')}
          </p>
        )}
      </div>
    </div>
  );
}
