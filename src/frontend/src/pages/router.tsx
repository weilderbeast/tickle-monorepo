import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "./login/login";
import { initializeFirebase } from "../firebase/firebase-init";

export const createRouter = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <></>,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  const router = createBrowserRouter(routes);
  initializeFirebase();
  return router;
};
