import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTournaments } from "../services/requests";

export default function ListeGame() {
  const [matchs, setTournaments] = useState([]);

  useEffect(() => {
    getAllTournaments().then((res) => {
      setTournaments(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <table className="table-auto bg-gray-100">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Tournois</th>
            <th className="px-4 py-2">Tour</th>
            <th className="px-4 py-2">Info joueur noir</th>
            <th className="px-4 py-2">Info joueur blanc</th>
            <th className="px-4 py-2">Komi</th>
            <th className="px-4 py-2">Résultat</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Voir</th>
          </tr>
        </thead>
        <tbody>
          {matchs?.map(match => (
            <tr key={match.id}>
              <td className="border px-4 py-2">{match.event}</td>
              <td className="border px-4 py-2">{match.round}</td>
              <td className="border px-4 py-2">{match.black_player} - {match.black_rank}</td>
              <td className="border px-4 py-2">{match.white_player} - {match.white_rank}</td>
              <td className="border px-4 py-2">{match.komi}</td>
              <td className="border px-4 py-2">{match.result}</td>
              <td className="border px-4 py-2">{match.date}</td>
              <td className="border px-4 py-2">
              <Link to={`/games/${match.id}`}>
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Voir
                </button>
              </Link>
            </td>
            </tr>
          ))}
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
