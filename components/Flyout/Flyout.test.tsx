import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Flyout } from './Flyout';
import { unselect } from '../../src/store/selectedItemsSlice';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import React from 'react';

const mockStore = configureStore([]);

global.URL.createObjectURL = vi.fn(() => 'blob:http://localhost:3000/abc123');
global.URL.revokeObjectURL = vi.fn();

describe('Flyout component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      selectedItems: {
        items: [
          { id: 1, name: 'Object 1' },
          { id: 2, name: 'Object 2' },
        ],
      },
    });

    store.dispatch = vi.fn();
  });

  it('renders correctly with selected items', () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    expect(screen.getByText(/2 objects are selected/i)).toBeInTheDocument();
    expect(screen.getByText(/Unselect All/i)).toBeInTheDocument();
    expect(screen.getByText(/Download/i)).toBeInTheDocument();
  });

  it('Unselect All button dispatches unselect action', () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    const unselectAllButton = screen.getByText(/Unselect All/i);
    fireEvent.click(unselectAllButton);

    expect(store.dispatch).toHaveBeenCalledWith(unselect());
  });

  it('Download button triggers the download process', () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    const downloadButton = screen.getByText(/Download/i);
    fireEvent.click(downloadButton);

    expect(global.URL.createObjectURL).toHaveBeenCalled();
  });

  //! to Delete
  it('placeholder test', () => {
    expect(true).toBeTruthy;
  });
});
