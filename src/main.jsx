import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Router from "./components/Router"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);