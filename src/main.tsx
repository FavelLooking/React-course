import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactHookForm } from './components/ReactHookForm/ReactHookForm.tsx';
import { UncontrolledForm } from './components/UncontrolledForm/UncontrolledForm.tsx';
import { store } from './store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/controlled',
    element: <ReactHookForm />,
  },
  {
    path: '/uncontrolled',
    element: <UncontrolledForm />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
