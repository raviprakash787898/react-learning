import { useRef } from "react";

// Here we are using useRef to get the DOM instance/access of a element and play with it.
export default function Player({ playerName, updateName }) {
    const playerInput = useRef();

    function handleSetName() {
        if (playerInput.current.value) {
            updateName(playerInput.current.value);
            playerInput.current.value = "";
        }
    }

    return (
        <section id="player">
            <h2>Welcome  { playerName ?? 'unknown entity' } </h2>
            <p>
                <input type="text" ref={playerInput} />
                <button onClick={ handleSetName }>Set Name</button>
            </p>
        </section>
    );
}
