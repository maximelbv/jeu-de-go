import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Board from './Board';
import axios from 'axios';

export default function TsumegoPage() {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/problem/${id}`);
        setProblem(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchProblem();
  }, [id]);

  if (!problem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tsumego"> 
      <Board
        solution={problem.solution}
        blackStones={problem.black_chip_positions}
        whiteStones={problem.white_chip_positions}
      />
      <div className="text-white">
        <h3 className="text-2xl text-wood">Résoudre le problème n°{problem.id}</h3>
        <p>C'est au tour du joueur <span className="text-wood text-xl">noir</span>, ou doit-il poser sa pierre afin d'effectuer le meilleur coup ?</p>
        <p>(veuillez cliquer directement sur le plateau)</p>
      </div>
    </div>
  );
}
