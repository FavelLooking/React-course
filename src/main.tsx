import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactHookForm } from './components/ReactHookForm/ReactHookForm.tsx';
import { UncontrolledForm } from './components/UncontrolledForm/UncontrolledForm.tsx';

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
    <RouterProvider router={router} />
  </StrictMode>,
);
