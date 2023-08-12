import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landingPage.jsx';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import TvPage from './pages/tvPage';
import DetailTvPage from './pages/DetailTvPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: '/detail/:id',
    element: <DetailPage />,
  },
  {
    path: '/tv',
    element: <TvPage />,
  },
  {
    path: '/tv/:id',
    element: <DetailTvPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
