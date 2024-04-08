import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import { productsandCartData } from "./loaders/getCart&ProductData.js";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: productsandCartData,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: () => fetch("/prodcuts.json"),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: productsandCartData,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster></Toaster>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
