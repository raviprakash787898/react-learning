import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallange";
import { timerChallanges } from "./utils/constants";
import { useState } from "react";

function App() {
    const [playerName, setPlayername] = useState(null);

    function handleNameChange(name) {
        setPlayername(name);
    }

    return (
        <>
            <Player playerName={playerName}  updateName={handleNameChange} />
            <div id="challenges">
                {
                    timerChallanges.map(item => 
                        <TimerChallenge key={item.timeTarget} title={item.title} timeTarget={item.timeTarget} 
                            timerDisable={!playerName ? true : false} 
                            playerName={playerName} />
                    )
                }
            </div>
        </>
    );
}

export default App;
