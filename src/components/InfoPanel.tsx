import { Button } from './UI/Button';
import { TextInput } from './UI/TextInput';

interface InfoPanelProps {
  userText: string;
  savedText: string;
  loading: boolean;
  error: string | null;
  onTextChange: (val: string) => void;
  onSave: () => void;
  onFetch: () => void;
}

export const InfoPanel = ({
  userText,
  savedText,
  loading,
  error,
  onTextChange,
  onSave,
  onFetch,
}: InfoPanelProps) => (
  <div className="mb-8 rounded-2xl border border-[#1f2c55] bg-[#081239]/70 p-6 shadow-[0_0_30px_rgba(5,7,28,0.45)] backdrop-blur-md">
    <h2 className="mb-4 text-2xl font-bold tracking-wide text-[#CCE1FF]">Información General</h2>

    <div className="mb-4 grid gap-4 md:grid-cols-[1fr_auto]">
      <TextInput
        label="Texto"
        value={userText}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Escribe algo..."
      />

      <div className="flex items-end gap-2">
        <Button variant="secondary" onClick={onSave}>
          Guardar
        </Button>
        <Button variant="primary" onClick={onFetch} disabled={loading}>
          {loading ? 'Cargando...' : 'Traer info'}
        </Button>
      </div>
    </div>

    <p className="text-sm text-[#9db4f6]">
      Texto guardado:{' '}
      <span className="font-medium text-[#dae8ff]">{savedText || '— vacío —'}</span>
    </p>
    {error && <p className="mt-2 text-xs text-[#ff7171]">{error}</p>}
  </div>
);
