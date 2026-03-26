import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/info';

export const Input = () => {
  const [userText, setUserText] = useState('');
  const [savedText, setSavedText] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    setSavedText(userText.trim());
  };

  const presentPayload = (data: unknown): string[] => {
    if (Array.isArray(data)) {
      return data.map((item) => {
        if (typeof item === 'string') return item;
        if (typeof item === 'number') return String(item);
        if (item && typeof item === 'object') return JSON.stringify(item);
        return String(item);
      });
    }

    if (typeof data === 'string') {
      return [data];
    }

    if (data && typeof data === 'object') {
      const anyData = data as Record<string, unknown>;
      if ('data' in anyData && Array.isArray(anyData.data)) {
        return presentPayload(anyData.data);
      }
      if ('items' in anyData && Array.isArray(anyData.items)) {
        return presentPayload(anyData.items);
      }
      return [JSON.stringify(anyData)];
    }

    return [String(data)];
  };

  const fetchInfo = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const newItems = presentPayload(data);
      setItems((prev) => [...prev, ...newItems]);
    } catch (err) {
      setError((err as Error).message || 'Error al cargar la info');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#06122b] via-[#0b1741] to-[#081639] text-white flex items-start justify-center py-12 px-4">
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        <div className="mb-8 rounded-2xl border border-[#1f2c55] bg-[#081239]/70 p-6 shadow-[0_0_30px_rgba(5,7,28,0.45)] backdrop-blur-md">
          <h2 className="mb-4 text-2xl font-bold tracking-wide text-[#CCE1FF]">Información General</h2>

          <div className="mb-4 grid gap-4 md:grid-cols-[1fr_auto]">
            <label className="flex flex-col gap-2 text-sm text-[#9db4f6]">
              <span>Texto</span>
              <input
                type="text"
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                placeholder="Escribe algo..."
                className="rounded-lg border border-[#2f3f74] bg-[#081239] px-3 py-2 text-white outline-none ring-2 ring-transparent transition focus:border-[#60a5fa] focus:ring-[#60a5fa]"
              />
            </label>

            <div className="flex items-end gap-2">
              <button
                onClick={handleSave}
                className="h-10 rounded-lg bg-[#1f3b8e] px-4 text-sm font-semibold text-[#ebf4ff] transition hover:bg-[#3f66c5]"
              >
                Guardar
              </button>
              <button
                onClick={fetchInfo}
                disabled={loading}
                className="h-10 rounded-lg bg-[#0f57ba] px-4 text-sm font-semibold text-white transition hover:bg-[#49a2ff] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading ? 'Cargando...' : 'Traer info'}
              </button>
            </div>
          </div>

          <p className="text-sm text-[#9db4f6]">Texto guardado: <span className="font-medium text-[#dae8ff]">{savedText || '— vacío —'}</span></p>
          {error && <p className="mt-2 text-xs text-[#ff7171]">{error}</p>}
        </div>

        <div className="mx-auto w-[70vw] max-w-[900px] rounded-2xl border border-[#32416f] bg-[#081639]/80 p-4 shadow-lg backdrop-blur-sm">
          <h3 className="mb-3 text-lg font-semibold text-[#a8c4ff]">Resultados</h3>
          <div className="max-h-[60vh] overflow-y-auto rounded-lg border border-[#2e427a] bg-[#0a1b42]/70 p-3">
            {items.length === 0 ? (
              <p className="text-sm text-[#8fabc8]">No hay datos todavía. Presiona «Traer info» para cargar.</p>
            ) : (
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={`${item}-${idx}`} className="rounded-lg border border-[#2b3e7e] bg-[#0f2361]/70 px-3 py-2 text-sm text-[#eef5ff]">
                    - {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
