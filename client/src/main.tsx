import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from "./routes/HomePage.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Login from "./routes/LoginPage.tsx";
import RegisterPage from "./routes/RegisterPage.tsx";
import SinglePostPage from "./routes/SinglePostPage.tsx";
import WritePage from "./routes/WritePage.js";
import PostListPage from "./routes/PostListPage.tsx";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PopularPost from "./components/PopularPost.tsx";
import About from "./components/About.tsx";
import SavedPosts from "./routes/SavedPosts.tsx";
import MyPost from "./routes/MyPosts.tsx";

const queryClient = new QueryClient();
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // todo: add error page
    errorElement: "<ErrorPage />",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <WritePage />,
      },
      {
        path: "/post",
        element: <PostListPage />,
      },
      {
        path: "/popular",
        element: <PopularPost />,
      },
      {
        path: "/trending",
        element: <PopularPost />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/saved",
        element: <SavedPosts />,
      },
      {
        path: "/my-post",
        element: <MyPost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right" />
      </QueryClientProvider>
    </ClerkProvider>
  </React.StrictMode>
);
