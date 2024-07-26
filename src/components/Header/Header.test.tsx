import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
store;

describe('Header', () => {
  it('should submit correct form data', async () => {
    const user = userEvent.setup();
    const mockUpdateResults = vi.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header updateResults={mockUpdateResults} />
        </MemoryRouter>
      </Provider>,
    );

    await user.type(
      screen.getByPlaceholderText('Enter planet or star name'),
      'Mars',
    );
    await user.click(screen.getByText('Search'));
  });

  it('should toggle error state on Get Error button click', async () => {
    const mockUpdateResults = vi.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header updateResults={mockUpdateResults} />
        </MemoryRouter>
      </Provider>,
    );
  });
});
