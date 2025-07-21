import { useState } from "react";
import Player from "./components/Player";

function App() {
  return (
    <>
      <main>
        <div id="player-input-box">
          <Player name="Player 1" playerSymbol="X" />
          <Player name="Player 2" playerSymbol="O" />
        </div>
      </main>
    </>
  );
}

export default App;
