import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Pages/Login.jsx";
import { AuthContextProvider } from "./store/auth-context.jsx";
import "@mantine/core/styles.css";
import CartProvider from "./store/CartProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <MantineProvider defaultColorScheme="dark">
    <AuthContextProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthContextProvider>
  </MantineProvider>
);
