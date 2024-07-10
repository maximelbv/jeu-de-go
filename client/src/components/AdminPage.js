import React, { useState, useEffect } from "react";
import { getAllProblemsToValidate, deleteProblemToValidate, addProblem } from "../services/requests";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const itemsPerPage = 5;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("is_admin");
    if(isAdmin !== "true" || isAdmin === null){
      navigate('/');
    };
    
    getAllProblemsToValidate().then((res) => {
      setProblems(res.data);
    });
  }, []);

  const handlePrevClick = () => {
    const newStartIndex = Math.max(0, startIndex - itemsPerPage);
    const newEndIndex = Math.max(itemsPerPage, endIndex - itemsPerPage);
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };

  const handleNextClick = () => {
    const newStartIndex = Math.min(startIndex + itemsPerPage, problems.length);
    const newEndIndex = Math.min(endIndex + itemsPerPage, problems.length);
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProblemToValidate(id);
      setProblems(problems.filter(problem => problem.id !== id));
    } catch (error) {
      console.error(`Failed to delete problem with id: ${id}`, error);
    }
  };

  const handleAccept = async (problem) => {
    try {
      await addProblem(problem);
      
      await deleteProblemToValidate(problem.id);
      setProblems(problems.filter(p => p.id !== problem.id));
    } catch (error) {
      console.error(`Failed to accept problem with id: ${problem.id}`, error);
    }
  };

  const visibleProblems = problems.slice(startIndex, endIndex);

  return (
    <div className="m-auto mt-6 flex justify-center items-center">
      <div className="bg-opacity-80 p-8 rounded-lg shadow-md w-4/6 border border-dark-wood" style={{ background: "#403d39" }}>
        <div className="flex items-center justify-center pt-6">
          <table className="bg-gray-100 w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="w-20 px-4 py-2">Label</th>
                <th className="w-20 px-4 py-2">Positions des jetons noirs</th>
                <th className="w-20 px-4 py-2">Positions des jetons blancs</th>
                <th className="w-20 px-4 py-2">Solution</th>
                <th className="px-4 py-2 w-80">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleProblems.map(problem => (
                <tr key={problem.id}>
                  <td className="border px-4 py-2">{problem.title}</td>
                  <td className="border px-4 py-2">[{problem.black_chip_positions.join(', ')}]</td>
                  <td className="border px-4 py-2">[{problem.white_chip_positions.join(', ')}]</td>
                  <td className="border px-4 py-2">{problem.solution}</td>
                  <td className="px-4 py-auto flex flex-row justify-evenly text-center gap-3">
                    <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => handleAccept(problem)}>Accepter</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(problem.id)}>Rejeter</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="border px-4 py-2" colSpan="5">
                  <div className="flex items-center justify-end">
                    <span className="text-gray-700">
                      Affichage {startIndex + 1} - {Math.min(endIndex, problems.length)} sur {problems.length}
                    </span>
                    <div>
                      <button
                        onClick={handlePrevClick}
                        className="mx-2 px-3 py-1 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100"
                        disabled={startIndex === 0}
                      >
                        {'<'}
                      </button>
                      <button
                        onClick={handleNextClick}
                        className="mx-2 px-3 py-1 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100"
                        disabled={endIndex >= problems.length}
                      >
                        {'>'}
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
