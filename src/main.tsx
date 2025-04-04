import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from "./routes/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // todo: add error page
    errorElement: "<ErrorPage />",
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
