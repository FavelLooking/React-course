import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './[page]';
import { switchPage } from '../../src/store/pageSlice';
import { changeItemId } from '../../src/store/currentDetails';
import { ApiResponse } from '../../src/interfaces/interfaces';
import React from 'react';

vi.mock('./components/Header/Header', () => ({
  Header: () => <div>Header Component</div>,
}));

vi.mock('./components/Main/Main', () => ({
  Main: ({
    onItemClick,
  }: {
    searchResults: ApiResponse | null;
    onItemClick: (itemId: string) => void;
    hideDetails: () => void;
  }) => (
    <div>
      Main Component
      <button data-testid="card-item" onClick={() => onItemClick('1')}>
        Card Item
      </button>
    </div>
  ),
}));

vi.mock('./components/Details/Details', () => ({
  Details: ({ onClose }: { onClose: () => void }) => (
    <div>
      Details Component
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

vi.mock('./components/ErrorBoundary/ErrorBoundary', () => ({
  ErrorBoundary: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

const mockStore = configureStore([]);

describe('App Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      searchResults: {
        results: [
          {
            astronomicalObjects: [
              {
                uid: '1',
                name: 'Object 1',
                location: { name: 'Location 1' },
                astronomicalObjectType: 'Type 1',
              },
            ],
            page: {
              totalPages: 1,
            },
          },
        ],
      },
      pageSlice: { totalPages: 5, page: 1 },
      currentDetails: { currentId: '' },
    });

    store.dispatch = vi.fn();
  });

  it('redirects to /search/1 if page param is missing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('app-wrapper')).toBeInTheDocument();
    waitFor(() => expect(store.dispatch).toHaveBeenCalledWith(switchPage(1)));
  });

  it('redirects to /not-found if page param is invalid', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/search/invalid']}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('app-wrapper')).toBeInTheDocument();
    waitFor(() => expect(store.dispatch).toHaveBeenCalledWith(switchPage(1)));
  });

  it('updates search results', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/search/1']}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const header = screen.getByText('Header Component');
    expect(header).toBeInTheDocument();
  });

  it('handles item click', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/search/1']}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId('card-item'));

    await waitFor(() =>
      expect(store.dispatch).toHaveBeenCalledWith(changeItemId('1')),
    );
  });
});
