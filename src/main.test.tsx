import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';
import { ThemeProvider } from './context/contextTheme.tsx';
import { ClickedProvider } from './context/context';
import { App } from './App.tsx';

describe('renders App component', () => {
  it('new test', () => {
    const routes = [
      {
        path: '/',
        element: <App />,
        errorElement: <div>Not Found</div>,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <ClickedProvider>
            <RouterProvider router={router} />
          </ClickedProvider>
        </ThemeProvider>
      </Provider>,
    );

    waitFor(async () => {
      await expect(screen.getByText(/1 Centauri/i)).toBeInTheDocument();
    });
  });
});
