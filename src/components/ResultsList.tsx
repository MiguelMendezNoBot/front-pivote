import { InfoCard } from './InfoCard';

interface ResultsListProps {
  items: string[];
}

export const ResultsList = ({ items }: ResultsListProps) => (
  <div className="mx-auto w-[70vw] max-w-[900px] rounded-2xl border border-[#32416f] bg-[#081639]/80 p-4 shadow-lg backdrop-blur-sm">
    <h3 className="mb-3 text-lg font-semibold text-[#a8c4ff]">Resultados</h3>
    <div className="max-h-[60vh] overflow-y-auto rounded-lg border border-[#2e427a] bg-[#0a1b42]/70 p-3">
      {items.length === 0 ? (
        <p className="text-sm text-[#8fabc8]">No hay datos todavía. Presiona «Traer info» para cargar.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <InfoCard key={`${item}-${idx}`} text={item} />
          ))}
        </ul>
      )}
    </div>
  </div>
);
