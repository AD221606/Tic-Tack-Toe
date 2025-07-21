import { useState } from "react";

export default function Player({ name, playerSymbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const editStatus = isEditing ? "Save" : "Edit";
  const [playerName, setPlayerName] = useState(name);

  const handlePlayerChange = (event) => {
    const newPlayer = event.target.value;
    setPlayerName(newPlayer);
  };

  const toggleEdit = () => {
    setIsEditing((prevStatus) => !prevStatus);
  };

  return (
    <div className="player-box">
      {isEditing ? (
        <input
          className="playerInput"
          type="text"
          required
          value={playerName}
          onChange={handlePlayerChange}
        />
      ) : (
        <input readOnly className="playerInput" value={playerName} />
      )}
      <button onClick={toggleEdit}>{editStatus}</button>
      <span>{playerSymbol}</span>
    </div>
  );
}
