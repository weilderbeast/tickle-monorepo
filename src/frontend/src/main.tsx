import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { useCreateRouter } from "./pages/router";

import "@radix-ui/themes/styles.css";
import "./index.css";
import { AuthProvider } from "./providers/auth-provider";
import { AppContextProvider } from "./providers/app-provider";
import { ThemeProvider } from "./providers/theme-provider";

const { router } = useCreateRouter();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppContextProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </AppContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
