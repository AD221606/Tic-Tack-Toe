import { useState } from "react";

export default function Player({name}){

    const [isEditing, setIsEditing] = useState(false);
    const editStatus = isEditing? "Save": "Edit";
    const [playerName, setPlayerName] = useState(name);

    const handlePlayerChange = (event) => {
        const newPlayer = event.target.value;
        setPlayerName(newPlayer);
    }

    const toggleEdit = ()=>{
        setIsEditing((prevStatus)=>!prevStatus);
    }

    return(
        <>
            {isEditing?<input className="playerInput" type="text" required value={playerName} onChange={handlePlayerChange}/>:<input readOnly className="playerInput" value={playerName}/>}
            <button onClick={toggleEdit}>{editStatus}</button>
        </>
    )
}