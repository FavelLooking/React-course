import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../../pages/search/[page]';
import { switchPage } from '../../src/store/pageSlice';
import { ApiResponse } from '../../src/interfaces/interfaces';
import React from 'react';
import { ClickedProvider } from '../../src/context/context';
import { mockNewStore } from '../../__mocks__/next/store/mockStore';
import { mockServersideData } from '../../__mocks__/next/data/data';

vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
    prefetch: vi.fn(),
    query: {},
    pathname: '/mock-path',
    asPath: '/mock-path',
  }),
}));

vi.mock('next/font/local', () => ({
  __esModule: true,
  default: () => ({ fontFamily: 'MockedFont' }),
}));

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
      <Provider store={mockNewStore}>
        <ClickedProvider>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route
                path="/*"
                element={<App serversideData={mockServersideData} />}
              />
            </Routes>
          </MemoryRouter>
        </ClickedProvider>
      </Provider>,
    );

    expect(screen.getByTestId('app-wrapper')).toBeInTheDocument();
    waitFor(() => expect(store.dispatch).toHaveBeenCalledWith(switchPage(1)));
  });

  it('redirects to /not-found if page param is invalid', () => {
    render(
      <Provider store={mockNewStore}>
        <ClickedProvider>
          <MemoryRouter initialEntries={['/search/invalid']}>
            <Routes>
              <Route
                path="/*"
                element={<App serversideData={mockServersideData} />}
              />
            </Routes>
          </MemoryRouter>
        </ClickedProvider>
      </Provider>,
    );

    expect(screen.getByTestId('app-wrapper')).toBeInTheDocument();
    waitFor(() => expect(store.dispatch).toHaveBeenCalledWith(switchPage(1)));
  });
});
