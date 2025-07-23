import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import { useState } from "react";
import LogMoves from "./components/LogMoves";
import { WINNING_COMBINATIONS } from "./assets/winning-combination";



function deriveActivePlayer(play) {
  let derivedPlayer = "X";

  if (play.length > 0 && play[0].player === "X") {
    derivedPlayer = "O";
  }

  return derivedPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [play, setPlay] = useState([]);
  const activePlayer = deriveActivePlayer(play);

  const handlePlay = (rowIndex, colIndex) => {
    setPlay((prevPlay) => {
      const newPlay = [
        { player: activePlayer, row: rowIndex, col: colIndex },
        ...play,
      ];

      deriveActivePlayer(prevPlay);

      return newPlay;
    });
  };

  return (
    <>
      <main>
        <div id="player-input-box">
          <Player name="Player 1" playerSymbol="X" />
          <Player name="Player 2" playerSymbol="O" />
        </div>
        <Gameboard
          plays={play}
          currentActivePlayer={activePlayer}
          playMade={handlePlay}
        />
        <LogMoves playLog={play} />
      </main>
    </>
  );
}

export default App;
