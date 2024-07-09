import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

    const blackPositionsArray = black_chip_positions.split(' ');
    const whitePositionsArray = white_chip_positions.split(' ');

    if (!checkUniquePositions(blackPositionsArray, whitePositionsArray, solution)) {
      setError("Chaque position doit être unique et ne peut pas être répétée dans les positions des pierres noires, blanches ou la solution.");
      return;
    }

    setError("");

    const problemData = {
      title,
      black_chip_positions: blackPositionsArray,
      white_chip_positions: whitePositionsArray,
      solution,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/problems/to/validate/", problemData);
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
    navigate("/home");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-xl font-bold mb-4">Soumission de problèmes</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Titre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Titre du problème"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="black_chip_positions"
          >
            Position des pierres noires
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="black_chip_positions"
            type="text"
            placeholder="Position pierres noires"
            value={black_chip_positions}
            onChange={(e) => setPositionBlack(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="white_chip_positions"
          >
            Position des pierres blanches
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="white_chip_positions"
            type="text"
            placeholder="Position pierres blanches"
            value={white_chip_positions}
            onChange={(e) => setPositionWhite(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="solution"
          >
            Solution
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="solution"
            type="text"
            placeholder="Solution du problème"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={navigateHome}>
                Accueil
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={closeModal}>
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
