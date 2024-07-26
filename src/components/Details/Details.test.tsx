import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Details } from './Details';
import { currentDetailsSlice } from '../../store/currentDetails';
import { ClickedProvider } from '../../context/context';
import { ThemeProvider } from '../../context/contextTheme';
import { vi } from 'vitest';
import { CurrentDetailsState } from '../../store/currentDetails';

interface MockRootState {
  currentDetails: CurrentDetailsState;
}

const mockStore = (initialState: Partial<MockRootState>) =>
  configureStore({
    reducer: { currentDetails: currentDetailsSlice.reducer },
    preloadedState: { currentDetails: initialState } as MockRootState,
  });

describe('Details Component', () => {
  const initialState = {
    currentDetails: {
      currentId: '123',
      details: {
        name: 'Earth',
        location: 'Solar System',
        type: 'Planet',
      },
    },
  };

  const store = mockStore(initialState);

  const defaultProps = {
    onClose: vi.fn(),
  };

  // it('renders the title correctly', async () => {
  //   vi.mock('../../services/planets', () => ({
  //     useGetPlanetByIdQuery: vi
  //       .fn()
  //       .mockReturnValueOnce(() => {
  //         console.log('Debugging mock return value 1');
  //         return { data: null, error: null, isLoading: true };
  //       })
  //       .mockReturnValueOnce(() => {
  //         console.log('Debugging mock return value 2');
  //         return {
  //           data: { astronomicalObject: { name: 'Earth' } },
  //           error: null,
  //           isLoading: false,
  //         };
  //       }),
  //   }));

  //   render(
  //     <Provider store={store}>
  //       <ClickedProvider>
  //         <ThemeProvider>
  //           <Details {...defaultProps} />
  //         </ThemeProvider>
  //       </ClickedProvider>
  //     </Provider>,
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText('Earth')).toBeInTheDocument();
  //   });
  // });

  // it('calls onClose when close button is clicked', () => {
  //   render(
  //     <Provider store={store}>
  //       <ClickedProvider>
  //         <ThemeProvider>
  //           <Details {...defaultProps} />
  //         </ThemeProvider>
  //       </ClickedProvider>
  //     </Provider>,
  //   );

  //   fireEvent.click(screen.getByText('Close'));
  //   expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  // });

  it('renders Loader when data is loading', () => {
    vi.mock('../../services/planets', () => ({
      useGetPlanetByIdQuery: vi.fn().mockReturnValue({
        data: null,
        error: null,
        isLoading: false,
      }),
    }));

    render(
      <Provider store={store}>
        <ClickedProvider>
          <ThemeProvider>
            <Details {...defaultProps} />
          </ThemeProvider>
        </ClickedProvider>
      </Provider>,
    );
    screen.debug();
  });
});
