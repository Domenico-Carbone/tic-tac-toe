import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){

   console.log({isActive})
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick(){
      setIsEditing((editing) => !editing);
      if(isEditing){
        onChangeName(symbol, playerName);
      }
    }

    function handleChange(event){
      setPlayerName(event.target.value);
    }


    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing) {
      editablePlayerName = <input type="text" required onChange={handleChange} value={playerName}  />
    }

    return(
      <li className={isActive && "active"}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button className="button" onClick={handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </li>
    );
}