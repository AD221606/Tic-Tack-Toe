export default function LogMoves({ playLog }) {
  return (
    <ol id="logs">
        <h2>Plays History</h2>
      {playLog.map((play, playIndex) => {
        const response = `${play.player} made a move on ${play.row}${play.col}`;
        return <li key={playIndex}>{response}</li>;
      })}
    </ol>
  );
}
