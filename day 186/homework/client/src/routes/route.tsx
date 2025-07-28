import Projects from "@/app/Projects";
import ProjectsCreate from "@/app/ProjectsCreate";
import { SignedIn, SignedOut, SignIn, SignUp } from "@clerk/clerk-react";
import { createBrowserRouter, Navigate, Outlet } from "react-router";

export const router = createBrowserRouter([
  {
    // protected route
    element: (
      <>
        <SignedIn>
          <Navigate to="/projects" />
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
        element: <Navigate to={"/projects"} replace />
      },
      {
        path: "/projects",
        Component:Projects
      },
      {
        path: "/projects/create",
        Component: ProjectsCreate
      }
    ]
  },
  {
    path: "*",
    element: <div>Page Not found</div>
  }
]);
