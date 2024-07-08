import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';

function ProblemSolving() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/problems/to/validate/');
        setProblems(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <table className="table-auto bg-gray-100">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Label</th>
            <th className="px-4 py-2">Voir</th>
          </tr>
        </thead>
        <tbody>
          {problems.map(problem => (
            <tr key={problem.id}>
              <td className="border px-4 py-2">{problem.id}</td>
              <td className="border px-4 py-2">{problem.label}</td>
              <td className="border px-4 py-2">
              <Link to="/tsumego">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Voir
                </button>
              </Link>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProblemSolving;
