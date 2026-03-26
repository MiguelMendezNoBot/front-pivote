import { RepoCard } from './RepoCard';
import type { RepoItem } from '../../features/info/DTO/info.dto';

interface RepoListProps {
  repos: RepoItem[];
}

export const RepoList = ({ repos }: RepoListProps) => (
  <div className="rounded-2xl border border-[#32416f] bg-[#081639]/80 p-4 shadow-lg backdrop-blur-sm">
    <h3 className="mb-3 text-lg font-semibold text-[#a8c4ff]">Resultados</h3>
    <div className="max-h-[55vh] overflow-y-auto pr-1 space-y-3 scrollbar-thin scrollbar-thumb-[#2b3e7e] scrollbar-track-transparent">
      {repos.length === 0 ? (
        <p className="text-sm text-[#8fabc8] py-4 text-center">
          No hay datos todavía. Presiona «Traer info» para cargar.
        </p>
      ) : (
        repos.map((repo, idx) => <RepoCard key={`${repo.nombre}-${idx}`} repo={repo} />)
      )}
    </div>
  </div>
);
