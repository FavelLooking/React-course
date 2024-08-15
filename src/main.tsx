import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactHookFormPage } from './components/ReactHookFormPage/ReactHookFormPage.tsx';
import { UncontrolledFormPage } from './components/UncontrolledFormPage/UncontrolledFormPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/controlled',
    element: <ReactHookFormPage />,
  },
  {
    path: '/uncontrolled',
    element: <UncontrolledFormPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
