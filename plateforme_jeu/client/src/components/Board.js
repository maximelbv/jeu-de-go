import React, { useState } from 'react';
import { Goban } from 'react-goban';

export default function Board() {

  const [stones, setStones] = useState({});

    const handleIntersectionClick = (x) => {
        console.log(`Intersection cliquée: ${x}`);
    };

  return (
    <div class="goban" style={{ Width: '600px', paddingTop: '30px', marginLeft: '30px' }}>
      <Goban
        size={13}
        theme = "classic"
        noMargin={false}
        hideBorder={false}
        zoom={null}
        coordSystem = "A1"
        nextToPlay = "black"
        markers={{"P16":"circle"}}
        stones={stones}
        onIntersectionClick={handleIntersectionClick}
      />
    </div>

  );
}
