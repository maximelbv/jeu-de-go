import { Goban } from 'react-goban';

export default function Board() {

  return (
    <div style={{ maxWidth: '800px', paddingTop: '30px', marginLeft: '30px' }}>
      <Goban
        size={13}
        theme = "classic"
        noMargin={false}
        hideBorder={false}
        zoom={null}
        coordSystem = "A1"
        nextToPlay = "black"
        stones = {{"P16":"black"}}
        markers={{"P16":"circle"}}
        onIntersectionClick ={() => console.log('ok')}
      />
    </div>

  );
}
