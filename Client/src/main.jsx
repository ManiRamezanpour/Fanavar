import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./configs/i18next";
import OurEmploy from "./Pages/Employ";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutUs",
    element: <OurEmploy />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={<BigSpinner />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);
