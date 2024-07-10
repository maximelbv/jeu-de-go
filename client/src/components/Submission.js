import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitProblemsToValidate } from "../services/requests";

const convertLetter = (letter) => {
  const charCode = letter.charCodeAt(0);
  if (charCode >= 106 && charCode <= 122) {
    return String.fromCharCode(charCode - 1);
  }
  return letter;
};

const convertPositions = (positions) => {
  return positions.split(' ').map(pos => {
    return convertLetter(pos[0]) + convertLetter(pos[1]);
  });
};

function ProblemSubmission() {
  const [title, setTitle] = useState("");
  const [black_chip_positions, setPositionBlack] = useState("");
  const [white_chip_positions, setPositionWhite] = useState("");
  const [solution, setSolution] = useState("");
  const [error, setError] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const validatePositions = (positions) => {
    const regex = /^[a-hj-t]{2}( [a-hj-t]{2})*$/i;
    return regex.test(positions.trim());
  };

  const validateSolution = (solution) => {
    const regex = /^[a-hj-t]{2}$/i;
    return regex.test(solution.trim());
  };

  const checkUniquePositions = (blackPositions, whitePositions, solution) => {
    const allPositions = [...blackPositions, ...whitePositions, solution];
    const uniquePositions = new Set(allPositions);
    return allPositions.length === uniquePositions.size;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePositions(black_chip_positions) || !validatePositions(white_chip_positions)) {
      setError("Les positions doivent être au format de deux lettres (sans 'i' et sans lettres après 't') suivies d'un espace (ex: 'ab aa th ah').");
      return;
    }

    if (!validateSolution(solution)) {
      setError("La solution doit être au format de deux lettres (sans 'i' et sans lettres après 't') (ex: 'aa').");
      return;
    }

    const convertedBlackPositions = convertPositions(black_chip_positions);
    const convertedWhitePositions = convertPositions(white_chip_positions);
    const convertedSolution = convertPositions(solution).join(""); 

    if (!checkUniquePositions(convertedBlackPositions, convertedWhitePositions, convertedSolution)) {
      setError("Chaque position doit être unique et ne peut pas être répétée dans les positions des pierres noires, blanches ou la solution.");
      return;
    }

    setError("");

    const problemData = {
      title,
      black_chip_positions: convertedBlackPositions,
      white_chip_positions: convertedWhitePositions,
      solution: convertedSolution,
    };

    try {
      const response = await submitProblemsToValidate(problemData);
      console.log("Réponse du serveur : ", response.data);
      setTitle("");
      setPositionBlack("");
      setPositionWhite("");
      setSolution("");
      setModalIsOpen(true);
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire : ", error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full border border-dark-wood"
        style={{ background: "#403d39" }}
      >
        <h2 className="text-center mb-10 text-white text-2xl font-semibold mb-6">Soumission de problèmes</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label
            className="block text-wood text-sm font-bold mb-2"
            htmlFor="title"
          >
            Titre du problème
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label
            className="block text-wood text-sm font-bold mb-2"
            htmlFor="black_chip_positions"
          >
            Position des pierres noires
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="black_chip_positions"
            type="text"
            value={black_chip_positions}
            onChange={(e) => setPositionBlack(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-wood text-sm font-bold mb-2"
            htmlFor="white_chip_positions"
          >
            Position des pierres blanches
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="white_chip_positions"
            type="text"
            value={white_chip_positions}
            onChange={(e) => setPositionWhite(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-wood text-sm font-bold mb-2"
            htmlFor="solution"
          >
            Solution
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="solution"
            type="text"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-wood hover:bg-dark-wood text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Soumettre
          </button>
        </div>
      </form>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 bg-opacity-75 fixed inset-0"></div>
          <div className="bg-white rounded-lg shadow-lg p-8 z-10">
            <h2 className="text-2xl font-bold mb-4">
              Votre problème à bien été soumis, il devra passer sous le contrôle de nos administrateurs avant d'être publié.
            </h2>
            <div className="flex justify-end">
              <button className="bg-dark hover:bg-gray-700 text-white px-4 py-2 rounded mr-2" onClick={navigateHome}>
                Accueil
              </button>
              <button className="bg-wood hover:bg-dark-wood text-white px-4 py-2 rounded" onClick={closeModal}>
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProblemSubmission;
