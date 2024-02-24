import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "./login/login";

const defaultRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>app</div>,
  },
];

export const createRouter = () => {
  const router = createBrowserRouter([...defaultRoutes, ...privateRoutes]);
  return { router };
};
