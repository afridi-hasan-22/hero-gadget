import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import { productsandCartData } from './loaders/getCart&ProductData.js';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: productsandCartData,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <PrivateRoutes><About></About></PrivateRoutes>,
      },
      {
        path: '/shop',
        element: (
          <PrivateRoutes>
            <Shop></Shop>
          </PrivateRoutes>
        ),
        loader: () => fetch('/prodcuts.json'),
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: productsandCartData,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
