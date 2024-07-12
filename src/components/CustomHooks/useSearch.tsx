import { useState, useEffect } from 'react';

const useSearchQuery = (initialSearch: string) => {
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    const savedSearchQuery = localStorage.getItem('lastSearch');
    return savedSearchQuery ?? initialSearch;
  });

  useEffect(() => {
    localStorage.setItem('lastSearch', searchQuery);
  }, [searchQuery]);

  return [searchQuery, setSearchQuery] as const;
};

export default useSearchQuery;
