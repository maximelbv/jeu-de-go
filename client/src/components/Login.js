import React, { useState } from "react";
import "./css/login.css";
import { register as registerUser, login as logUser } from "../services/requests";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [register, setRegister] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleClick = () => {
    setRegister(!register);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password, confirmPassword);
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logUser(email, password);
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full border border-dark-wood"
        style={{ background: "#403d39" }}
      >
        <h1 className="text-center mb-10 text-white text-3xl font-semibold mb-6">
          {register ? "Inscription" : "Connexion"}
        </h1>

        <p className="text-center mb-10 text-wood text-1xl font-semibold mb-6">
          {register
            ? "Bienvenue sur GoGenius !"
            : "Content de vous revoir sur GoGenius !"}
        </p>

        <form
          className="flex flex-col"
          style={{ display: register ? "flex" : "none" }}
          onSubmit={handleRegister}
        >
          <input
            type="email"
            placeholder="Votre email"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Votre mot de passe"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {register && (
            <input
              type="password"
              placeholder="Confirmation de votre mot de passe"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          <button
            type="submit"
            className="mt-3 text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-300 bg-wood"
          >
            S'inscrire
          </button>
        </form>

        <form
          className="flex flex-col"
          style={{ display: !register ? "flex" : "none" }}
          onSubmit={handleLogin}
        >
          <input
            type="email"
            placeholder="Votre email"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Votre mot de passe"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-300 bg-wood"
          >            Se connecter
          </button>
        </form>

        <p
          className="text-center text-white cursor-pointer mt-6 hover:text-wood"
          onClick={handleClick}
        >
          {register
            ? "Vous avez déjà un compte ? Se connecter"
            : "Vous n'avez pas de compte ? S'inscrire"}
        </p>
      </div>
    </div>
  );
}
