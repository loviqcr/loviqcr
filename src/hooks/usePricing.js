import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase';
import { defaultPrices } from '../pricingTiers';

export function usePricing() {
  const [prices, setPrices] = useState(defaultPrices);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    const ref = doc(db, 'config', 'pricing');
    const unsubscribe = onSnapshot(
      ref,
      (snap) => {
        if (snap.exists()) {
          setPrices({ ...defaultPrices, ...snap.data() });
        }
      },
      () => setPrices(defaultPrices)
    );
    return unsubscribe;
  }, []);

  return prices;
}
