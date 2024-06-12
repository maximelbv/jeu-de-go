import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './css/header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isLoginPage = location.pathname === "/";

  if (isLoginPage) {
    return null;
  }

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/home" className="text-white">
                Logo
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/home"
                  className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
                >
                  Accueil
                </Link>
                <Link
                  to="/games"
                  className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
                >
                  Jeu
                </Link>
                <Link
                  to="/tsumego"
                  className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tsumego
                </Link>
                <Link
                  to="/listGame"
                  className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
                >
                  Liste des jeux
                </Link>
                <Link
                  to="/admin"
                  className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
                >
                  Administration
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:text-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/home"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-dark hover:text-white"
          >
            Accueil
          </Link>
          <Link
            to="/games"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-dark hover:text-white"
          >
            Jeu
          </Link>
          <Link
            to="/tsumego"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-dark hover:text-white"
          >
            Tsumego
          </Link>
          <Link
            to="/listGame"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-dark hover:text-white"
          >
            Liste des jeux
          </Link>
        </div>
      </div>
    </nav>
  );
}
