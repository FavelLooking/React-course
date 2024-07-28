import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Details } from './Details';
import { ClickedProvider } from '../../context/context';
import { ThemeProvider } from '../../context/contextTheme';
import { vi } from 'vitest';
import { useGetPlanetByIdQuery } from '../../services/planets';

const mockStore = configureStore([]);

const defaultProps = {
  onClose: vi.fn(),
};

vi.mock('../../services/planets', () => ({
  useGetPlanetByIdQuery: vi.fn(),
}));

describe('Details', () => {
  let store: ReturnType<typeof mockStore>;
  beforeEach(() => {
    store = mockStore({
      currentDetails: {
        details: [
          { name: '1892 III Holmes', location: 'Earth', type: 'COMET' },
        ],
      },
    });
    (
      useGetPlanetByIdQuery as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({
      data: {
        astronomicalObject: {
          name: '1892 III Holmes',
          location: 'Earth',
          type: 'COMET',
        },
      },
      error: null,
      isLoading: false,
    });
  });

  it('show details title', () => {
    render(
      <Provider store={store}>
        <ClickedProvider>
          <ThemeProvider>
            <Details {...defaultProps} />
          </ThemeProvider>
        </ClickedProvider>
      </Provider>,
    );
    waitFor(
      async () =>
        await expect(screen.getByText('1892 III Holmes')).toBeInTheDocument(),
    );
  });
  it('renders Loader when data is loading', () => {
    (
      useGetPlanetByIdQuery as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    render(
      <Provider store={store}>
        <ClickedProvider>
          <ThemeProvider>
            <Details {...defaultProps} />
          </ThemeProvider>
        </ClickedProvider>
      </Provider>,
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('calls onClose when appropriate', () => {
    render(
      <Provider store={store}>
        <ClickedProvider>
          <ThemeProvider>
            <Details {...defaultProps} />
          </ThemeProvider>
        </ClickedProvider>
      </Provider>,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    closeButton.click();

    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('handles error state', async () => {
    (
      useGetPlanetByIdQuery as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({
      data: null,
      error: 'Error fetching data',
      isLoading: false,
    });

    render(
      <Provider store={store}>
        <ClickedProvider>
          <ThemeProvider>
            <Details {...defaultProps} />
          </ThemeProvider>
        </ClickedProvider>
      </Provider>,
    );

    await waitFor(() => expect(screen.getByText('Error')).toBeInTheDocument());
  });
});
