import Player from "./components/Player";
import './App.css';
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Logs from "./components/Logs";
import GameOver from "./components/GameOver";
import  { checkWhoWins, getActivePlayer } from './utilities/utils';

function App() {
    const [gamePlayerTurns, setGamePlayerTurns] = useState([]);
    const [gamePlayerName, setGamePlayerName] = useState({ "X": "RAVI", "O": "PRAKASH" });
    var gameBoardCurrentActiveUser = getActivePlayer(gamePlayerTurns);

    // Check who wins the match
    var gameWinner = checkWhoWins(gamePlayerTurns, gamePlayerName);

    function handlePlayerAutomatically(rowIndex, columnIndex) {
        if (gamePlayerTurns.find(x => x.square.row === rowIndex && x.square.col === columnIndex) == undefined) {
            setGamePlayerTurns((prevTurns) => {
                gameBoardCurrentActiveUser = getActivePlayer(prevTurns);

                const updatedPlayerTurns = [
                    { square: { row: rowIndex, col: columnIndex }, selectedPlayer: gameBoardCurrentActiveUser },
                    ...prevTurns
                ];

                return updatedPlayerTurns;
            });
        }
        else {
            return undefined;
        }
    }

    function handleNameChange(changedName) {
        setGamePlayerName((preValue) => {
            delete preValue[Object.keys(changedName)[0]];
            const val = {
                [Object.keys(changedName)[0]]: changedName[Object.keys(changedName)[0]],
                ...preValue
            };

            return val;
        });
    }

    function rematch() {
        setGamePlayerTurns([]);
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name={ gamePlayerName.X } symbol="X" activePlayer={ gameBoardCurrentActiveUser === 'X' } setNameChanged={ handleNameChange } />
                    <Player name={ gamePlayerName.O } symbol="O" activePlayer={ gameBoardCurrentActiveUser === 'O' } setNameChanged={ handleNameChange } />
                </ol>
                { gameWinner && <GameOver winner={ gameWinner } rematch={ rematch } /> }
                <GameBoard onSelectBox={ handlePlayerAutomatically } turns={ gamePlayerTurns } disabled= { gameWinner?.length ? true : false } />
            </div>
            <Logs turns={ gamePlayerTurns } />
        </main>
    )
}

export default App;
