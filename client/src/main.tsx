import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css'

import DashBoardPage from './pages/dashboard';
import RoomsPage from './pages/rooms';
import CheckInPage from './pages/checkInn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/dashboard"}/>,
  },

  {
    path: "/dashboard",
    element: <DashBoardPage />,
  },

  {
    path: "/rooms",
    element: <RoomsPage />,
  },

  {
    path: "/check-inn",
    element: <CheckInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
