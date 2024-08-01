import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css'

import DashBoardPage from './pages/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/dashboard"}/>,
  },

  {
    path: "/dashboard",
    element: <DashBoardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
