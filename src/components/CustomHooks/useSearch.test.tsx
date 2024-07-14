import { renderHook, act } from '@testing-library/react-hooks';
import useSearch from './useSearch';

describe('useSearchQuery hook', () => {
  it('should initialize with initial value and save to localStorage', () => {
    const { result } = renderHook(() => useSearch('initial'));

    expect(result.current[0]).toBe('initial');

    expect(localStorage.getItem('lastSearch')).toBe('initial');
  });

  it('should update searchQuery and save to localStorage', () => {
    const { result } = renderHook(() => useSearch('initial'));

    act(() => {
      result.current[1]('new search');
    });

    expect(result.current[0]).toBe('new search');

    expect(localStorage.getItem('lastSearch')).toBe('new search');
  });

  it('should use saved searchQuery from localStorage if available', () => {
    localStorage.setItem('lastSearch', 'saved search');
    const { result } = renderHook(() => useSearch('initial'));

    expect(result.current[0]).toBe('saved search');
  });
});
