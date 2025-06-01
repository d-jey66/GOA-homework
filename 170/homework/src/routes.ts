import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  route("/login", "./pages/SignIn.tsx"),
  route("/register", "./pages/SignUp.tsx"),
  route("/", "App.tsx"),
] satisfies RouteConfig;
