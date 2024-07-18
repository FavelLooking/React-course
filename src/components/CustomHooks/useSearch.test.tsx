import { act } from 'react';
import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { useSearchQuery } from './useSearch';

describe('useSearchQuery hook', () => {
  it('should initialize with initial value and save to localStorage', () => {
    let hookResult: RenderHookResult<undefined, [string]>;

    act(() => {
      hookResult = renderHook(() => {
        const [searchQuery] = useSearchQuery('initial');
        return [searchQuery];
      });
    });

    const [searchQuery] = hookResult!.result.current;

    expect(searchQuery).toBe('initial');
    expect(localStorage.getItem('lastSearch')).toBe('initial');
  });

  it('should update searchQuery and save to localStorage', () => {
    const { result } = renderHook(() => useSearchQuery('initial'));

    act(() => {
      result.current[1]('new search');
    });

    expect(result.current[0]).toBe('new search');

    expect(localStorage.getItem('lastSearch')).toBe('new search');
  });

  it('should use saved searchQuery from localStorage if available', () => {
    localStorage.setItem('lastSearch', 'saved search');
    const { result } = renderHook(() => useSearchQuery('initial'));

    expect(result.current[0]).toBe('saved search');
  });
});
