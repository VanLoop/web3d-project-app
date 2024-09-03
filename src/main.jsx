import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import World from "./pages/campo/World.jsx";

const router = createBrowserRouter([
  {
    path: "/World",
    element: <World />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <World/>
    <RouterProvider router={router} />
  </StrictMode>
);
