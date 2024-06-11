import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ClientePage } from './pages/ClientePage/ClientePage.jsx';
import { HorariosPage } from './pages/HorariosPage/HorariosPage.jsx';
import { App } from './App.jsx';
import { AdminPage } from './pages/AdminPage/AdminPage.jsx';
// import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/cliente',
    element: <ClientePage />,
  },
  {
    path: '/horarios',
    element: <HorariosPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
