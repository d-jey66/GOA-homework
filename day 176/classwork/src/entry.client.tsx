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
// src/main.tsx
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { RouterProvider } from "react-router";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

// Define your router using react-router's new Data API
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} />
  )
);

const PUBLISHABLE_KEY = "your-clerk-publishable-key";

hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="flex justify-end items-center p-4 gap-4 h-16 border-b">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <RouterProvider router={router} />  
    </ClerkProvider>
  </React.StrictMode>
);
