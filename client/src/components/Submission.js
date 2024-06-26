import React, { useState } from "react";

function ProblemSubmission() {
  const [title, setTitle] = useState("");
  const [positionWhite, setPositionWhite] = useState("");
  const [positionBlack, setPositionBlack] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulaire soumis : ", {
      title,
      positionWhite,
      positionBlack,
      difficulty,
    });

    setTitle("");
    setPositionWhite("");
    setPositionBlack("");
    setDifficulty("");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-xl font-bold mb-4">Soumission de problèmes</h2>
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
            htmlFor="positionWhite"
          >
            Position des pierres blanches
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="positionWhite"
            type="text"
            placeholder="Position pierres blanches"
            value={positionWhite}
            onChange={(e) => setPositionWhite(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="positionBlack"
          >
            Position des pierres noires
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="positionBlack"
            type="text"
            placeholder="Position pierres noires"
            value={positionBlack}
            onChange={(e) => setPositionBlack(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="difficulty"
          >
            Difficulté
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="difficulty"
            type="text"
            placeholder="Difficulté du problème"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
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
    </div>
  );
}

export default ProblemSubmission;
