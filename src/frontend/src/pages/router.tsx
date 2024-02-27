import { RouteObject, createBrowserRouter } from "react-router-dom";
import { TestComponent } from "./testing/testing";
import { Login } from "./login/login";
import { Register } from "./register/register";

const defaultRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: <TestComponent />,
  },
];

export const useCreateRouter = () => {
  const routes = [...privateRoutes, ...defaultRoutes];

  const router = createBrowserRouter(routes);
  return { router };
};
