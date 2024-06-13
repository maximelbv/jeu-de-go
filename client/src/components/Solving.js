import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function ProblemSolving() {
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(5);
  const totalItems = 32;

  const handlePrevClick = () => {
    const newStartIndex = Math.max(1, startIndex - 5);
    const newEndIndex = Math.min(endIndex - 5, totalItems);
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };

  const handleNextClick = () => {
    const newStartIndex = Math.min(startIndex + 5, totalItems);
    const newEndIndex = Math.min(endIndex + 5, totalItems);
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };


  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <table className="table-auto bg-gray-100">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Informations</th>
            <th className="px-4 py-2">Difficulté</th>
            <th className="px-4 py-2">Voir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Problème n°1</td>
            <td className="border px-4 py-2">Facile</td>
            <td className="border px-4 py-2">
              <Link to="/tsumego">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Voir
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Problème n°2</td>
            <td className="border px-4 py-2">Moyen</td>
            <td className="border px-4 py-2">
              <Link to="/tsumego">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Voir
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Problème n°3</td>
            <td className="border px-4 py-2">Difficile</td>
            <td className="border px-4 py-2">
              <Link to="/tsumego">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Voir
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
        {/* <tfoot>
          <tr>
            <td className="border px-4 py-2" colSpan="4">
              <div className="flex items-center justify-end">
                <span className="text-gray-700">
                  {startIndex}-{endIndex} sur {totalItems}
                </span>
                <div>
                  <button
                    onClick={handlePrevClick}
                    className="mx-2 px-3 py-1 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={handleNextClick}
                    className="mx-2 px-3 py-1 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
}

export default ProblemSolving;
