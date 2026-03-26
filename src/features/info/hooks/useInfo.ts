import { useState } from 'react';
import { fetchInfoData } from '../services/infoService';
import type { RepoItem } from '../DTO/info.dto';

const parsePayload = (data: unknown): RepoItem[] => {
  if (Array.isArray(data)) return data as RepoItem[];
  if (data && typeof data === 'object') {
    const d = data as Record<string, unknown>;
    if ('data' in d && Array.isArray(d.data)) return d.data as RepoItem[];
    if ('items' in d && Array.isArray(d.items)) return d.items as RepoItem[];
  }
  return [];
};

export const useInfo = () => {
  const [userText, setUserText] = useState('');
  const [savedText, setSavedText] = useState('');
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => setSavedText(userText.trim());

  const handleFetch = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await fetchInfoData();
      const newRepos = parsePayload(data);
      setRepos((prev) => [...prev, ...newRepos]);
    } catch (err) {
      setError((err as Error).message || 'Error al cargar la info');
    } finally {
      setLoading(false);
    }
  };

  return {
    userText,
    setUserText,
    savedText,
    repos,
    loading,
    error,
    handleSave,
    handleFetch,
  };
};
