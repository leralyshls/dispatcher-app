export const NAME = 'searchHistory';
export const MAX = 10;

export const shouldRemoveLast = (arr: string[]): void => {
  if (arr.length > MAX) arr.pop();
};

export const getSearchHistory = () => {
  const recentSearches = localStorage.getItem(NAME);
  return recentSearches ? JSON.parse(recentSearches) : [];
};

export const addToSearchHistory = (searchStr: string) => {
  const recentSearches = getSearchHistory();
  if (searchStr === '') return;
  else if (!recentSearches.includes(searchStr)) {
    shouldRemoveLast(recentSearches);
    localStorage.setItem(NAME, JSON.stringify([searchStr, ...recentSearches]));
  }
};

export const clearSearchHistory = (): void => {
  localStorage.clear();
};

export const deleteFromSearchHistory = (itemToRemove: string) => {
  const recentSearches = getSearchHistory();
  if (!recentSearches.length) return;
  const filteredSearches = recentSearches.filter(
    (item: string) => item !== itemToRemove
  );
  localStorage.setItem(NAME, JSON.stringify(filteredSearches));
};
