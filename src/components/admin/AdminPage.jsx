import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, isFirebaseConfigured } from '../../firebase';
import AdminLogin from './AdminLogin';
import AdminPricing from './AdminPricing';

function NotConfigured() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blush px-6 text-center">
      <p className="max-w-sm text-ink-soft">
        Firebase todavía no está configurado. Agrega las variables{' '}
        <code className="text-ink">VITE_FIREBASE_*</code> en el archivo <code className="text-ink">.env</code>{' '}
        para activar el panel de administración.
      </p>
    </div>
  );
}

export default function AdminPage() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    return onAuthStateChanged(auth, setUser);
  }, []);

  if (!isFirebaseConfigured) return <NotConfigured />;
  if (user === undefined) return null;
  return user ? <AdminPricing /> : <AdminLogin />;
}
