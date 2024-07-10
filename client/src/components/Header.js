import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isAdmin = localStorage.getItem("is_admin");
    if (isAdmin !== null) {
      setIsUserLoggedIn(true);
      setIsAdminLoggedIn(isAdmin === "true");
      console.log(isAdminLoggedIn)
    };

  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("is_admin");
    setIsUserLoggedIn(false);
    setIsAdminLoggedIn(false)
  };

  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    return null;
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/home" className="text-white flex items-center">
                <img
                  src={logo}
                  alt="Home"
                  className="mb-6"
                  style={{ height: "150px", width: "auto" }}
                />
              </Link>
            </div>
            <div className="hidden md:flex ml-4 space-x-4">
              <Link
                to="/"
                className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
              >
                Résolution de problèmes
              </Link>
              <Link
                to="/submission"
                className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
              >
                Soumission de problèmes
              </Link>
              <Link
                to="/listGame"
                className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
              >
                Liste des parties
              </Link>
              { isAdminLoggedIn ? (
                <Link
                  to="/admin"
                  className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
                >
                  Administration
                </Link>
                )
                :
                (null)
              }
            </div>
          </div>
          {/* Bouton de menu pour les écrans mobiles */}
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
          {/* Affichage du bouton Se déconnecter ou Se connecter */}
          <div className="hidden md:flex items-center">
            {isUserLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
              >
                Se déconnecter
              </button>
            ) : (
              <Link
                to="/login"
                className="text-white hover:bg-dark px-3 py-2 rounded-md text-sm font-medium"
              >
                Se connecter
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Menu déroulant pour les écrans mobiles */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-dark hover:text-white"
          >
            Résolution de problèmes
          </Link>
          <Link
            to="/soumission"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-dark hover:text-white"
          >
            Soumission de problèmes
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
            Liste des parties
          </Link>
          { isAdminLoggedIn ?(
            <Link
              to="/admin"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-dark hover:text-white"
            >
              Administration
            </Link>
            )
            :
              (null)
          }
          {/* Menu mobile - Bouton Se déconnecter ou Se connecter */}
          <div className="pt-4 pb-3 border-t border-gray-700">
            {isUserLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-white block w-full px-3 py-2 rounded-md text-base font-medium text-left hover:bg-dark hover:text-white"
              >
                Se déconnecter
              </button>
            ) : (
              <Link
                to="/login"
                className="text-white block w-full px-3 py-2 rounded-md text-base font-medium text-left hover:bg-dark hover:text-white"
              >
                Se connecter
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
