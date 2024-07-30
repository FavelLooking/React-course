import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Pagination } from './Pagination';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { pageSlice } from '../../store/pageSlice';
import { MemoryRouter } from 'react-router-dom';
import { RootState } from 'src/store/store';
import { ClickedProvider } from '../../context/context';

const mockStore = (state: Partial<RootState>) => {
  return createStore(
    combineReducers({
      pageSlice: pageSlice.reducer,
    }),
    state,
  );
};

describe('Pagination Component', () => {
  it('renders correctly and displays current and total pages', () => {
    const store = mockStore({
      pageSlice: {
        page: 1,
        totalPages: 5,
      },
    });

    render(
      <Provider store={store}>
        <ClickedProvider>
          <MemoryRouter>
            <Pagination />
          </MemoryRouter>
        </ClickedProvider>
      </Provider>,
    );

    expect(screen.getByText('1 of 5')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('disables Previous button on the first page', () => {
    const store = mockStore({
      pageSlice: {
        page: 1,
        totalPages: 5,
      },
    });

    render(
      <Provider store={store}>
        <ClickedProvider>
          <MemoryRouter>
            <Pagination />
          </MemoryRouter>
        </ClickedProvider>
      </Provider>,
    );

    expect(screen.getByText('Previous')).toBeDisabled();
  });

  it('disables Next button on the last page', () => {
    const store = mockStore({
      pageSlice: {
        page: 5,
        totalPages: 5,
      },
    });

    render(
      <Provider store={store}>
        <ClickedProvider>
          <MemoryRouter>
            <Pagination />
          </MemoryRouter>
        </ClickedProvider>
      </Provider>,
    );

    expect(screen.getByText('Next')).toBeDisabled();
  });
});
