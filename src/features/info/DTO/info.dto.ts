export interface RepoItem {
  nombre: string;
  descripcion: string;
  lenguaje: string | null;
  estrellas: number;
  forks: number;
  url: string;
  ultimaActualizacion: string;
}

export interface InfoResponseDTO {
  data?: RepoItem[];
  items?: RepoItem[];
  [key: string]: unknown;
}
