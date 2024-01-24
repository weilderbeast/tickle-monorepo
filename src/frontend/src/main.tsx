import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./pages/router";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={createRouter()} />
    </ChakraProvider>
  </React.StrictMode>
);
