import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Main, MainPropsExtended } from './Main';
import { RootState } from '../../store/store';
import { PageState } from '../../store/pageSlice';
import { SelectedItemsState } from '../../store/selectedItemsSlice';
import { CurrentDetailsState } from '../../store/currentDetails';

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

describe('Main Component', () => {
  const defaultProps: MainPropsExtended = {
    searchResults: {
      astronomicalObject: {
        uid: '1',
        name: 'Object 1',
        location: { name: 'Location 1' },
        astronomicalObjectType: 'Type 1',
      },
      page: {
        totalPages: 1,
      },
    },
    onItemClick: vi.fn(),
    hideDetails: vi.fn(),
  };

  vi.mock('react-redux', () => ({
    useSelector: (selector: (state: RootState) => unknown) =>
      selector({
        selectedItems: {} as SelectedItemsState,
        isLoading: { isLoading: true } as RootState['isLoading'],
        pageSlice: {} as PageState,
        currentDetails: {} as CurrentDetailsState,
      } as RootState),
  }));

  it('renders Loader when isLoading is true', () => {
    render(<Main {...defaultProps} />);
    expect(screen.getByText('Loader Component')).toBeInTheDocument();
  });

  it('renders no results message when searchResults is empty', () => {
    render(
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
      />,
    );
    waitFor(
      async () =>
        await expect(
          screen.getByText('No search results found'),
        ).toBeInTheDocument(),
    );
  });

  it('renders CardItem components', () => {
    render(<Main {...defaultProps} />);
    waitFor(
      async () =>
        await expect(screen.getByTestId('card-item')).toBeInTheDocument(),
    );
  });

  it('renders Pagination and Flyout components', () => {
    render(<Main {...defaultProps} />);
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
