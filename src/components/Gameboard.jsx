import { useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ playMade, plays }) {

  let gameBoard = initialGameboard.map((row)=>[...row]);
  for (const play of plays) {
    gameBoard[play.row][play.col] = play.player;
  }

  return (
    <ol id="game-container">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button
                  className="play-box"
                  onClick={() => {
                    playMade(rowIndex, colIndex);
                  }}
                >
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
