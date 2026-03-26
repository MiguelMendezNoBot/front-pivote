import { RepoField } from './RepoField';
import type { RepoItem } from '../../features/info/DTO/info.dto';

interface RepoCardProps {
  repo: RepoItem;
}

export const RepoCard = ({ repo }: RepoCardProps) => (
  <div className="rounded-xl border border-[#2b3e7e] bg-[#0f2361]/60 px-4 py-4 flex flex-col gap-3">
    {/* Header: repo name + URL */}
    <div className="flex items-start justify-between gap-2">
      <p className="text-base font-bold text-[#a8c4ff] truncate">{repo.nombre}</p>
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 text-[#5a78b8] hover:text-[#7c9ef0] transition"
        title="Abrir repositorio"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </div>

    {/* Description */}
    {repo.descripcion && (
      <p className="text-xs text-[#8fabc8] leading-relaxed line-clamp-2">{repo.descripcion}</p>
    )}

    {/* Stats grid */}
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[#1e3060] pt-3">
      <RepoField
        label="Lenguaje"
        value={repo.lenguaje ?? 'N/A'}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
        }
      />
      <RepoField
        label="Estrellas"
        value={repo.estrellas}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        }
      />
      <RepoField
        label="Forks"
        value={repo.forks}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" />
            <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" /><line x1="12" y1="12" x2="12" y2="15" />
          </svg>
        }
      />
      <RepoField
        label="Última actualización"
        value={repo.ultimaActualizacion}
      />
    </div>
  </div>
);
