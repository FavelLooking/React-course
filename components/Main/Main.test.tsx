import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Main, MainProps } from './Main';
import { RootState } from '../../src/store/store';
import { PageState } from '../../src/store/pageSlice';
import { SelectedItemsState } from '../../src/store/selectedItemsSlice';
import { CurrentDetailsState } from '../../src/store/currentDetails';
import configureStore from 'redux-mock-store';
import React from 'react';
import { ClickedProvider } from '../../src/context/context';
import { mockServersideData } from '../../__mocks__/next/data/data';

vi.mock('../../context/useClicked', () => ({
  useClicked: () => ({
    clicked: false,
    setClicked: vi.fn(),
  }),
}));

vi.mock('../../context/useTheme', () => ({
  useTheme: () => ({
    isStandartTheme: true,
  }),
}));

vi.mock('../Loader/Loader', () => ({
  Loader: () => <div>Loader Component</div>,
}));

vi.mock('../CardItem/CardItem', () => ({
  CardItem: ({ onClick }: { onClick: () => void }) => (
    <div data-testid="card-item" onClick={onClick}>
      Card Item
    </div>
  ),
}));

vi.mock('../Pagination/Pagination', () => ({
  Pagination: () => <div>Pagination Component</div>,
}));

vi.mock('../Flyout/Flyout', () => ({
  Flyout: () => <div>Flyout Component</div>,
}));

const mockStore = configureStore([]);

vi.mock('react-redux', async () => {
  const actual = await vi.importActual('react-redux');
  return {
    ...actual,
    useSelector: (selector) =>
      selector({
        example: { value: 5 },
        isLoading: { isLoading: false },
      }),
  };
});

describe('Main Component', () => {
  beforeEach(() => {
    mockStore({
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
    });
  });

  const defaultProps: MainProps = {
    onItemClick: vi.fn(),
    hideDetails: vi.fn(),
    serversideData: mockServersideData,
  };

  vi.mock('react-redux', () => ({
    useSelector: (selector: (state: RootState) => unknown) =>
      selector({
        selectedItems: {} as SelectedItemsState,
        isLoading: { isLoading: true } as RootState['isLoading'],
        pageSlice: {} as PageState,
        currentDetails: {} as CurrentDetailsState,
        searchResults: {},
      } as RootState),
  }));

  it('renders Loader when isLoading is true', () => {
    render(
      <ClickedProvider>
        {' '}
        <Main {...defaultProps} />
      </ClickedProvider>,
    );
    waitFor(async () =>
      expect(screen.getByText('Loader Component')).toBeInTheDocument(),
    );
  });

  it('renders no results message when searchResults is empty', () => {
    render(
      <ClickedProvider>
        <Main
          {...{
            ...defaultProps,
            searchResults: {
              astronomicalObject: {
                uid: '1',
                name: 'Object 1',
                location: { name: 'Location 1' },
                astronomicalObjectType: 'Type 1',
              },
              astronomicalObjects: [],
              page: { totalPages: 1 },
            },
          }}
        />
        ,
      </ClickedProvider>,
    );
    waitFor(
      async () =>
        await expect(
          screen.getByText('No search results found'),
        ).toBeInTheDocument(),
    );
  });

  it('renders CardItem components', () => {
    render(
      <ClickedProvider>
        {' '}
        <Main {...defaultProps} />
      </ClickedProvider>,
    );
    waitFor(
      async () =>
        await expect(screen.getByTestId('card-item')).toBeInTheDocument(),
    );
  });

  it('renders Pagination and Flyout components', () => {
    render(
      <ClickedProvider>
        {' '}
        <Main {...defaultProps} />
      </ClickedProvider>,
    );
    waitFor(
      async () =>
        await expect(
          screen.getByText('Pagination Component'),
        ).toBeInTheDocument(),
    );
    waitFor(
      async () =>
        await expect(screen.getByText('Flyout Component')).toBeInTheDocument(),
    );
  });
});
