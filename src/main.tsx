import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { App } from './App.tsx';
import './index.css';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage.tsx';
import { ClickedProvider } from './context/context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'search/:page',
        element: <App />,
      },
    ],
  },
  {
    path: 'not-found',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to="not-found" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClickedProvider>
      <RouterProvider router={router} />
    </ClickedProvider>
  </React.StrictMode>,
);
