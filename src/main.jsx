import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import AuthRedirect from "./Components/AuthRedirect";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import ErrorPage from "./Pages/error";
import Home from "./Pages/home";
import MyListPage from "./Pages/mylist";
import SeriesPage from "./Pages/series";
import FilmPage from "./Pages/film";
import UserProfile from "./Pages/userProfile";
import useAuthStore from "./store/useAuthStore";

// ProtectedRoute component using Zustand
// eslint-disable-next-line react-refresh/only-export-components
function ProtectedRoute() {
  const token = useAuthStore.getState().token;
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRedirect><LoginPage /></AuthRedirect>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <AuthRedirect><LoginPage /></AuthRedirect>,
  },
  {
    path: "/register",
    element: <AuthRedirect><RegisterPage /></AuthRedirect>,
  },
  // Redirect to /home if already logged in
  function AuthRedirect({ children }) {
    const token = useAuthStore.getState().token;
    if (token) {
      return <Navigate to="/home" replace />;
    }
    return children;
  },
  // Protected routes
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/mylist", element: <MyListPage /> },
      { path: "/series", element: <SeriesPage /> },
      { path: "/film", element: <FilmPage /> },
      { path: "/userprofile", element: <UserProfile /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
