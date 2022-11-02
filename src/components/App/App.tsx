import { useState, FC } from 'react';
import Chessboard from '@components/Chessboard/Chessboard';
import { ChessInstance } from 'chess.js';
import { MOVE_TIME } from '@utils/constants';

const Chess = require( 'chess.js' );

const App:FC<{}> = () => {
  const [ game, setGame ] = useState<ChessInstance>(
    new Chess(),
  );
  
  const safeGameMutate = ( modify: any ) => {
    setGame( ( g ) => {
      const update = { ...g };
      modify( update );
      return update;
    } );
  };

  const makeRandomMove = () => {
    const possibleMove = game.moves();

    if ( game.game_over() || game.in_draw() || possibleMove.length === 0 ) return;

    const randomIndex = Math.floor( Math.random() * possibleMove.length );

    safeGameMutate( ( gameMutate: any ) => {
      gameMutate.move( possibleMove[ randomIndex ] );
    } );
  };

  const onDrop = ( source: any, target: any ) => {
    let move = null;

    safeGameMutate( ( gameMutate: any ) => {
      move = gameMutate.move( {
        from:      source,
        to:        target,
        promotion: 'q',
      } );
    } );

    if ( move === null ) return false;

    setTimeout( makeRandomMove, MOVE_TIME );
    return true;
  };

  return (
    <div className='App' ><Chessboard
      position={ game.fen() }
      onPieceDrop={ onDrop }
    />
    </div>
  );
};

export default App;
