import React, { useState, useEffect } from 'react';
import { Goban } from 'react-goban';
import { useNavigate } from 'react-router-dom';

export default function Board() {
  const [stones, setStones] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const solution = "R2";
  const navigate = useNavigate();

  useEffect(() => {
    const blackStones = ["O5", "P5", "Q5", "Q7", "M3", "P3", "O3"];
    const whiteStones = ["Q3", "Q4", "P2"];
    
    const newStones = {};
    
    blackStones.forEach(pos => {
      newStones[pos] = 'black';
    });
    
    whiteStones.forEach(pos => {
      newStones[pos] = 'white';
    });

    setStones(newStones);
  }, []);

  const handleIntersectionClick = (x) => {
    if (x === solution) {
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
