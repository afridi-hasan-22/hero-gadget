import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../App";

const Header = () => {
  const [cart,setCart] = useContext(CartContext)
  const [isMenuopen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 md:px-24 lg:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between">
        <Link to="/" className="inline-flex items-center space-x-4">
          <div className="w-12 h-12 bg-cyan-200 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-wide">
            HeroGadget
          </span>
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Shop
          </NavLink>
          <Link to='/cart'>
            <div className="relative py-3">
              <ShoppingCartIcon className="h-6 w-6 text-cyan-400"></ShoppingCartIcon>
              <p className="absolute bottom-5 left-6">{cart.length}</p>
            </div>
          </Link>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            About us
          </NavLink>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {isMenuopen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="px-9 py-6 bg-white border rounded shadow-sm">
                <div className="flex justify-between items-center mb-5">
                  <Link to="/" className="inline-flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-200 flex items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
                      >
                        <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-gray-800 tracking-wide">
                      HeroGadget
                    </span>
                  </Link>
                  <button onClick={()=> setIsMenuOpen(prev => !prev)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  </button>
                </div>
                <div className="flex flex-col p-5 space-y-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Shop
                  </NavLink>
                  <Link to='/cart'>
                    <div className="relative py-3">
                      <ShoppingCartIcon className="h-6 w-6 text-cyan-400"></ShoppingCartIcon>
                      <p className="absolute bottom-5 left-6">{cart.length}</p>
                    </div>
                  </Link>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    About us
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
