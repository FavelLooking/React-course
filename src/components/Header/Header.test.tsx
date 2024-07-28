import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { ThemeContext } from '../../context/contextTheme';

const mockChangeTheme = vi.fn();
const mockThemeContextValue = {
  isStandartTheme: true,
  changeTheme: mockChangeTheme,
};

interface MockThemeProviderProps {
  children: ReactNode;
}

const MockThemeProvider: React.FC<MockThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={mockThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

describe('Header', () => {
  it('should switch theme on Next Theme button click', async () => {
    const user = userEvent.setup();
    const mockUpdateResults = vi.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MockThemeProvider>
            <Header updateResults={mockUpdateResults} />
          </MockThemeProvider>
        </MemoryRouter>
      </Provider>,
    );

    await user.click(screen.getByText('Next Theme'));

    expect(mockChangeTheme).toHaveBeenCalled();
  });

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

  it('should toggle error state on Get Error button click', async () => {
    const user = userEvent.setup();
    const mockUpdateResults = vi.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header updateResults={mockUpdateResults} />
        </MemoryRouter>
      </Provider>,
    );

    await user.click(screen.getByText('Get Error'));

    expect(
      screen.getByText('An error occurred. Please try again later.'),
    ).toBeInTheDocument();
  });
});
