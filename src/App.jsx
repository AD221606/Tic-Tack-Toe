import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import { useState } from "react";
// import LogMoves from "./components/LogMoves";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [play, setPlay] = useState([]);

  const handlePlay = (rowIndex, colIndex) => {
    const newPlay = [
      { player: activePlayer, row: rowIndex, col: colIndex },
      ...play,
    ];
    setPlay(newPlay);
    const newActivePlayer = activePlayer === "X" ? "0" : "X";
    setActivePlayer(newActivePlayer);
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
        {/* <LogMoves playLog={play} /> */}
      </main>
    </>
  );
}

export default App;
