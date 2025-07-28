import { SignedIn, SignedOut, SignIn, SignUp } from "@clerk/clerk-react";
import { createBrowserRouter, Navigate, Outlet } from "react-router";

export const router = createBrowserRouter([
  {
    // protected route
    element: (
      <>
        <SignedIn>
          <Navigate to="/dashboard" />
        </SignedIn>
        <SignedOut>
          <Outlet/>
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
        element: <div> THIS IS WHY U SHOULD NOT PICK UP 7-8 yers old kids... as a student</div>
      }
    ]
  },
  {
    path: "*",
    element: <div>Page Not found</div>
  }
]);
