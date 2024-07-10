import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Goban } from 'react-goban';
import axios from 'axios';

export default function GamePage() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/tournament/${id}`);
        setMatch(response.data.tournois_details);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchMatch();
  }, [id]);

  if (!match) {
    return <div>Loading...</div>;
  }

  const stones = match.positions.slice(0, currentIndex + 1).reduce((acc, pos) => {
    acc[pos.positions] = pos.player;
    return acc;
  }, {});

  const handleNext = () => {
    if (currentIndex < match.positions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShowAll = () => {
    setCurrentIndex(match.positions.length - 1);
  };

  const handleRemoveAll = () => {
    setCurrentIndex(-1);
  };

  return (
    <div className="tsumego">
      <div className="goban" style={{ width: '580px', paddingTop: '30px' }}>
        <Goban size={19} stones={stones} />
      </div>
      <div>
        <div className="text-white game">
          <h3 className="text-3xl text-wood">{match.event}</h3>
          <p><span className='text-wood'>Tour:</span> {match.round}</p>
          <p><span className='text-wood'>Info joueur noir:</span> {match.black_player} ({match.black_rank})</p>
          <p><span className='text-wood'>Info joueur blanc:</span> {match.white_player} ({match.white_rank})</p>
          <p><span className='text-wood'>Komi:</span> {match.komi}</p>
          <p><span className='text-wood'>Résultat:</span> {match.result}</p>
          <p><span className='text-wood'>Date:</span> {match.date}</p>
        </div>
        <div className="flex flex-col gap-2.5 justify-between mt-4">
          <div>
            <button
              className="min-w-40 bg-wood hover:bg-dark-wood text-white px-4 py-2 rounded mr-2"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              Précédent
            </button>
            <button
              className="min-w-40 bg-wood hover:bg-dark-wood text-white px-4 py-2 rounded"
              onClick={handleNext}
              disabled={currentIndex === match.positions.length - 1}
            >
              Suivant
            </button>
          </div>
          <div>
            <button
              className="min-w-40 bg-wood hover:bg-dark-wood text-white px-4 py-2 rounded mr-2"
              onClick={handleRemoveAll}
            >
              Tout retirer
            </button>
            <button
              className="min-w-40 bg-wood hover:bg-dark-wood text-white px-4 py-2 rounded"
              onClick={handleShowAll}
            >
              Tout afficher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
