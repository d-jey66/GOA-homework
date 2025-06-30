import { SignedIn, SignedOut, SignIn, SignUp } from "@clerk/clerk-react";
import { createBrowserRouter, Navigate, Outlet } from "react-router";
import App from "../App";

export const router = createBrowserRouter([
  {
    // protected route
    element: (
      <>
        <SignedIn>
          <Navigate to="/dashboard" />
        </SignedIn>
        <SignedOut>
          <Navigate to="/dashboard" />
        </SignedOut>
      </>
    ),
    children: [
      {
        path: "/signin",
        element: <SignIn path="/signin" />,
      },
      {
        path: "/signup",
        element: <SignUp path="/signup" />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <SignedIn>
          <header>
            {/* element */}
          </header>
          <main>
            <Outlet />
          </main>
        </SignedIn>
        <SignedOut>
          <Navigate to={"/signin"} replace />
        </SignedOut>
      </>
    ),
    children:[
      {
        index: true,
        element: <Navigate to={"/dashboard"} replace />
      },
      {
        path: "/dashboard",
        element: <App />
      }
    ]
  },
  {
    path: "*",
    element: <div>Page Not found</div>
  }
]);
