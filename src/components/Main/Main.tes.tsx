import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Main, MainPropsExtended } from './Main';
import { jest } from '@jest/globals';

const mockProps: MainPropsExtended = {
  searchResults: {
    astronomicalObjects: [
      {
        uid: '1',
        name: 'Galaxy NGC 1300',
        location: { name: 'Orion Arm' },
        astronomicalObjectType: 'Barred Spiral Galaxy',
      },
      {
        uid: '2',
        name: 'Star Cluster M13',
        location: { name: 'Milky Way Galaxy' },
        astronomicalObjectType: 'Globular Cluster',
      },
    ],
    page: {
      totalPages: 3,
    },
    sort: 'asc',
  },
  isLoading: false,
  currentPage: 1,
  setCurrentPage: jest.fn(),
  onItemClick: jest.fn(),
  hideDetails: jest.fn(),
};

describe('Main Component', () => {
  it('renders correct number of cards', () => {
    render(<Main {...mockProps} />);

    const cardElements = screen.getAllByTestId('card-item');
    expect(cardElements.length).toBe(
      mockProps.searchResults!.astronomicalObjects.length,
    );
  });

  it('displays no search results message when no cards are present', () => {
    const noResultsProps: MainPropsExtended = {
      ...mockProps,
      searchResults: {
        astronomicalObjects: [],
        page: {
          totalPages: 0,
        },
        sort: 'asc',
      },
    };

    render(<Main {...noResultsProps} />);

    const noResultsMessage = screen.getByText(/No search results found/i);
    expect(noResultsMessage).toBeTruthy();
  });

  it('calls onItemClick when a card item is clicked', () => {
    render(<Main {...mockProps} />);

    const cardElement = screen.getByText(/Galaxy NGC 1300/i);
    userEvent.click(cardElement);

    expect(mockProps.onItemClick).toHaveBeenCalledWith('1');
  });
});
