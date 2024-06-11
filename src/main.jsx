import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { TestePage } from './pages/TestePage/TestePage';
import { ClientePage } from './pages/ClientePage/ClientePage.jsx';
import { HorariosPage } from './pages/HorariosPage/HorariosPage.jsx';
import { App } from './App.jsx';
// import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/teste',
    element: <TestePage />,
  },
  {
    path: '/cliente',
    element: <ClientePage />,
  },
  {
    path: '/horarios',
    element: <HorariosPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
