import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("/login", "./pages/SignIn.tsx"),
  route("/register", "./pages/SignUp.tsx"),
  route("/", "App.tsx"),
] satisfies RouteConfig;
