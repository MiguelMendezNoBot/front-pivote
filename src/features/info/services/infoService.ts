const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/info';

export const fetchInfoData = async (): Promise<unknown> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
  }
  return response.json();
};
