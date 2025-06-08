import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import ErrorPage from "./Pages/error";
import Home from "./Pages/home";
import MyListPage from "./Pages/mylist";
import SeriesPage from "./Pages/series";
import FilmPage from "./Pages/film";
import UserProfile from "./Pages/userProfile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/mylist",
    element: <MyListPage />,
  },
  {
    path: "/series",
    element: <SeriesPage />,
  },
  {
    path: "/film",
    element: <FilmPage />,
  },
  {
    path: "/userprofile",
    element: <UserProfile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
