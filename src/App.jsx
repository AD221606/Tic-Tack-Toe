import { useState } from "react";
import Player from "./components/Player";

function App() {


  return (
    <>
      <main>
        <div id="player-input">
          <Player name="Player 1" />
          <Player name="Player 2" />
        </div>
      </main>
    </>
  );
}

export default App;
