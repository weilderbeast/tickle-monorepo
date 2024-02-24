import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./pages/router";

import "./index.css";
import { AuthProvider } from "./providers/auth-provider";
import { AppContextProvider } from "./providers/app-provider";

const { router } = createRouter();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppContextProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </AppContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
