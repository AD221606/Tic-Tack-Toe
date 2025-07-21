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
          className="player-input"
          type="text"
          required
          value={playerName}
          onChange={handlePlayerChange}
        />
      ) : (
        <input readOnly className="player-input" value={playerName} />
      )}
      <button className="btn" onClick={toggleEdit}>{editStatus}</button>
      <span className="player-symbol">{playerSymbol}</span>
    </div>
  );
}
