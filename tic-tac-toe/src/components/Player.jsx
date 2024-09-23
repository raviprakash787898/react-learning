import { useState } from "react"

export default function Player({ name, symbol, activePlayer, setNameChanged }) {
    const [isEditing, setIsEditing] = useState(false);
    const [changedName, setChangedName] = useState(name);

    function editPlayerName() {
        if (isEditing) {
            var nameChange = { [symbol]: changedName };
            setNameChanged(nameChange);
        }
        setIsEditing((prevState) => !prevState);
    }

    function nameChange(event) {
        setChangedName(event.target.value);
    }

    return (
        <li className={ activePlayer ? 'active' : '' }>
            <span className="player">
                {
                    !isEditing ? <span className="player-name">{ changedName }</span> 
                        : <input type="text" value={changedName} required onChange={nameChange} />
                }
                <span className="player-symbol">{ symbol }</span>
            </span>
            <button onClick={editPlayerName}> { !isEditing ? 'Edit' : 'Save' } </button>
        </li>
    )
}