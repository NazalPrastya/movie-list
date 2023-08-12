import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landingPage.jsx';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
