import React, { useState, useEffect } from 'react';
import { Goban } from 'react-goban';
import { useNavigate } from 'react-router-dom';

const convertToAAFormat = (coord) => {
  const columns = 'ABCDEFGHJKLMNOPQRST';
  const col = coord[0];
  const row = parseInt(coord.slice(1), 10);
  const newCol = columns.indexOf(col) + 1;
  const newRow = 20 - row;
  return `${String.fromCharCode(96 + newCol)}${String.fromCharCode(96 + newRow)}`;
};

export default function Board({ solution, blackStones, whiteStones }) {
  const [stones, setStones] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const newStones = {};
    
    blackStones.forEach(pos => {
      newStones[pos] = 'black';
    });
    
    whiteStones.forEach(pos => {
      newStones[pos] = 'white';
    });

    setStones(newStones);
  }, [blackStones, whiteStones]);

  const handleIntersectionClick = (x) => {
    const convertedCoord = convertToAAFormat(x);
    if (convertedCoord === solution) {
      setModalContent('success');
    } else {
      setModalContent('failure');
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const navigateToSolving = () => {
    navigate('/solving');
  };

  return (
    <div className="relative">
      <div className="goban" style={{ width: '800px', paddingTop: '30px', marginLeft: '30px' }}>
        <Goban
          size={19}
          theme="classic"
          noMargin={false}
          hideBorder={false}
          zoom={null}
          coordSystem="A1"
          nextToPlay="black"
          markers={{ "P16": "circle" }}
          stones={stones}
          onIntersectionClick={handleIntersectionClick}
        />
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 bg-opacity-75 fixed inset-0"></div>
          <div className="bg-white rounded-lg shadow-lg p-8 z-10">
            {modalContent === 'success' ? (
              <div>
                <h2 className="text-2xl font-bold mb-4">Félicitations ! Vous avez réussi le problème.</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={refreshPage}>Recommencer</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={navigateToSolving}>Quitter</button>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">Désolé, la réponse n'est pas correcte.</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={refreshPage}>Recommencer</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
