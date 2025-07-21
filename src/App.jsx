import Player from "./components/Player";

function App() {
  return (
    <>
      <main>
        <div id="player-input-box">
          <Player name="Player 1" playerSymbol="X" />
          <Player name="Player 2" playerSymbol="O" />
        </div>

        <div id="game-area">
          <div className="game-box">Box 1</div>
          <div className="game-box">Box 2</div>
          <div className="game-box">Box 3</div>
          <div className="game-box">Box 4</div>
          <div className="game-box">Box 5</div>
          <div className="game-box">Box 6 </div>
          <div className="game-box">Box 7</div>
          <div className="game-box">Box 8</div>
          <div className="game-box">Box 9</div>
        </div>
      </main>
    </>
  );
}

export default App;
