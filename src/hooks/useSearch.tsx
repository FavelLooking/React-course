import { useState, useEffect } from 'react';

export const useSearchQuery = (initialSearch: string) => {
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedSearchQuery = localStorage.getItem('lastSearch');
      return savedSearchQuery ?? initialSearch;
    }
    return initialSearch;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lastSearch', searchQuery);
    }
  }, [searchQuery]);

  return [searchQuery, setSearchQuery] as const;
};
