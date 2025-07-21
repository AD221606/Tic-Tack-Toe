import { useState } from "react";

export default function Player({name}){

    const [playerName, setPlayerName] = useState(name);

    const handlePlayerChange = (event) => {
        const newPlayer = event.target.value;
        setPlayerName((oldPlayer)=> newPlayer);
    }
    return(
        <>
            <input type="text" required value={playerName} onChange={handlePlayerChange}/>
        </>
    )
}