import React, { useState } from "react";

export default function Login() {
  const [register, setRegister] = useState(true);

  const handleClick = () => {
    setRegister(!register);
  };

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div
        className="bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full"
        style={{ background: "#403d39" }}
      >
        <h1 className="text-center text-xl font-semibold mb-6">
          {register ? "Inscription" : "Connexion"}
        </h1>

        <form
          className="flex flex-col"
          style={{ display: register ? "flex" : "none" }}
        >
          <input
            type="email"
            placeholder="Votre email"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
          />

          <input
            type="password"
            placeholder="Votre mot de passe"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
          />

          {register && (
            <input
              type="password"
              placeholder="Confirmation de votre mot de passe"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
          )}

          <button
            className="text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-300"
            style={{ background: "#BA926C" }}
          >
            S'inscrire
          </button>
        </form>

        <form
          className="flex flex-col"
          style={{ display: !register ? "flex" : "none" }}
        >
          <input
            type="email"
            placeholder="Votre email"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
          />

          <input
            type="password"
            placeholder="Votre mot de passe"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
          />

          <button
            className="text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-300"
            style={{ background: "#BA926C" }}
          >
            Se connecter
          </button>
        </form>

        <p className="text-center cursor-pointer mt-3" onClick={handleClick}>
          {register
            ? "Vous avez déjà un compte ? Se connecter"
            : "Vous n'avez pas de compte ? S'inscrire"}
        </p>
      </div>
    </div>
  );
}
