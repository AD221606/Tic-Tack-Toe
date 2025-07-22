export default function LogMoves({ playLog }) {
  return (
    <ol>
      {playLog.map((play, playIndex) => {
        return <li key={playIndex}>{play}</li>;
      })}
    </ol>
  );
}
