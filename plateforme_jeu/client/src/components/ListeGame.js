import React, { useState } from "react";

export default function ListeGame() {
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
            <th className="px-4 py-2">Partie</th>
            <th className="px-4 py-2">Voir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border px-4 py-2">Malcolm Lockyer</td>
            <td className="border px-4 py-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Voir
              </button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Witchy Woman</td>
            <td className="border px-4 py-2">The Eagles</td>
            <td className="border px-4 py-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Voir
              </button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Shining Star</td>
            <td className="border px-4 py-2">Earth, Wind, and Fire</td>
            <td className="border px-4 py-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Voir
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
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
        </tfoot>
      </table>
    </div>
  );
}
