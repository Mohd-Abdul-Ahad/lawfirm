import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TeamPage from "./pages/Team.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <AboutUs/>,
  },
  {
    path: "/services",
    element: <TeamPage />,
  },
  {
    path: "/testimonials",
    element: <App />,
  },
  {
    path: "/ourteam",
    element: <TeamPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
