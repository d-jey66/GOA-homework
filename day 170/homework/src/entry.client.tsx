// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router'
// import App from './App'
// import SignIn from './pages/SignIn'
// import './index.css'

// const router = createBrowserRouter([
//     {
//     path: '/',
//     element: /register' ? <App /> : <SignIn />,
//   },
//   {
//     path: '/register',
//     element: <App />,
//   },
//   {
//     path: '/login',
//     element: <SignIn />,
//   },
//   // {
//   //   path: '/dashboard',
//   //   element: <Dashboard />,
//   // },
// ])

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import "./index.css";

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <HydratedRouter />
  </React.StrictMode>
);
