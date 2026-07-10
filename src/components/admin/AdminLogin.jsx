import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setError('Correo o contraseña incorrectos.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-blush px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-ink/10 bg-white/70 p-8 shadow-lg"
      >
        <h1 className="text-center font-display text-2xl text-ink mb-6">Loviq · Admin</h1>

        <label className="block text-xs uppercase tracking-wide text-ink-soft mb-1">Correo</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm text-ink outline-none focus:border-rose-deep"
        />

        <label className="block text-xs uppercase tracking-wide text-ink-soft mb-1">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-6 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm text-ink outline-none focus:border-rose-deep"
        />

        {error && <p className="mb-4 text-sm text-rose-deep">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-gradient-to-r from-rose to-plum px-6 py-3 font-semibold text-white transition-transform hover:scale-105 disabled:opacity-60"
        >
          {loading ? 'Entrando…' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
