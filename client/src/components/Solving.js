import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProblems } from "../services/requests";

function ProblemSolving() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    getAllProblems().then((res) => {
      setProblems(res.data);
    });
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
          {problems?.map(problem => (
            <tr key={problem.id}>
              <td className="border px-4 py-2">{problem.id}</td>
              <td className="border px-4 py-2">{problem.title}</td>
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
