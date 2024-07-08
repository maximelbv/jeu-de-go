import React, { useState } from "react";

export default function AdminPage() {
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
    <div className="m-auto mt-6 flex justify-center items-center">
    <div
        className="bg-opacity-80 p-8 rounded-lg shadow-md w-4/6 border border-dark-wood"
        style={{ background: "#403d39" }}
      >
    <div className="flex items-center justify-center pt-6">
      <table className="bg-gray-100 w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-20 px-4 py-2">Informations</th>
            <th className="px-4 py-2 w-80">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="px-4 py-auto flex flex-row justify-evenly text-center gap-3">
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                Accepter
              </button>
              <button className="bg-orange-500 text-white px-2 py-1 rounded">
                Rejeter
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                Supprimer
              </button>
            </td>
          </tr>

          <tr>
            <td className="border px-4 py-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border px-4 py-2 flex-row justify-evenly text-center gap-3">
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                Accepter
              </button>
              <button className="bg-orange-500 text-white px-2 py-1 rounded">
                Rejeter
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                Supprimer
              </button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border px-4 py-2">
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                Accepter
              </button>
              <button className="bg-orange-500 text-white px-2 py-1 rounded">
                Rejeter
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                Supprimer
              </button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border px-4 py-2">
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                Accepter
              </button>
              <button className="bg-orange-500 text-white px-2 py-1 rounded">
                Rejeter
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                Supprimer
              </button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border px-4 py-2">
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                Accepter
              </button>
              <button className="bg-orange-500 text-white px-2 py-1 rounded">
                Rejeter
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                Supprimer
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
    </div>
    </div>
  );
}
