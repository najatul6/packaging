import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import AuthProvider from "./provider/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import Router from "./routes/Router.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={Router} />
  </StrictMode>,
);
