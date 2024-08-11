import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Details } from './Details';
import { ClickedProvider } from '../../src/context/context';
import { ThemeProvider } from '../../src/context/contextTheme';
import { vi, describe, it, expect } from 'vitest';
import React from 'react';
import { mockNewStore } from '../../__mocks__/next/store/mockStore';
import { ApiResponse } from '../../src/interfaces/interfaces';

vi.mock('react-redux', () => ({
  useSelector: (selector) =>
    selector({
      currentDetails: {
        currentId: 'ASMA0000025892',
        details: {
          name: 'Test Object',
          type: 'Star',
          location: 'Test Location',
        },
      },
    }),
  useDispatch: () => vi.fn(),
  Provider: ({ children }) => <>{children}</>,
}));

const mockOnClose = vi.fn();

const defaultProps = {
  onClose: mockOnClose,
  serversideData: {
    astronomicalObjects: [
      {
        uid: 'ASMA0000025892',
        name: 'Test Object',
        location: { name: 'Test Location' },
        astronomicalObjectType: 'Star',
      },
    ],
  } as ApiResponse,
};

describe('Details', () => {
  it('show details title', () => {
    render(
      <Provider store={mockNewStore}>
        <ClickedProvider>
          <ThemeProvider>
            <Details {...defaultProps} />
          </ThemeProvider>
        </ClickedProvider>
      </Provider>,
    );
    waitFor(
      async () =>
        await expect(screen.getByText('aucdet IX')).toBeInTheDocument(),
    );
  });

  it('calls onClose when appropriate', async () => {
    render(
      <ClickedProvider>
        <ThemeProvider>
          <Details {...defaultProps} />
        </ThemeProvider>
      </ClickedProvider>,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    closeButton.click();

    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
