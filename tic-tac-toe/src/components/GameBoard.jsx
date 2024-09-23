import { initialGameBoard } from '../utilities/constant';

export default function GameBoard({ onSelectBox, turns = [], disabled }) {
    let gameBoardValue = [...initialGameBoard.map(innerArr => [...innerArr])];

    for (var i = 0; i < turns.length; i++) {
        const { square, selectedPlayer } = turns[i];
        const { row, col } = square;
        gameBoardValue[row][col] = selectedPlayer;
    }

    return (
        <ol id="game-board">
            {
                gameBoardValue.map((row, rowIndex) => {
                    return <li key={rowIndex}>
                        <ol>
                            {
                                row.map((playerSymbol, columnIndex) => {
                                    return <li key={columnIndex}>
                                        <button disabled={ disabled } onClick={() => onSelectBox(rowIndex, columnIndex)}>{ playerSymbol }</button>
                                    </li>
                                })
                            }
                        </ol>
                    </li>
                })
            }

        </ol>
    );
}