import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Flyout } from './Flyout';
import { unselect } from './../../store/selectedItemsSlice';
import { vi } from 'vitest';

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

  test('renders correctly with selected items', () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    expect(screen.getByText(/2 objects are selected/i)).toBeInTheDocument();
    expect(screen.getByText(/Unselect All/i)).toBeInTheDocument();
    expect(screen.getByText(/Download/i)).toBeInTheDocument();
  });

  test('Unselect All button dispatches unselect action', () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    const unselectAllButton = screen.getByText(/Unselect All/i);
    fireEvent.click(unselectAllButton);

    expect(store.dispatch).toHaveBeenCalledWith(unselect());
  });

  test('Download button triggers the download process', () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    const downloadButton = screen.getByText(/Download/i);
    fireEvent.click(downloadButton);

    expect(global.URL.createObjectURL).toHaveBeenCalled();
  });
});
