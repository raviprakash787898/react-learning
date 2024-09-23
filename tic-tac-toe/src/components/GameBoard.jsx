const initialGameBoard = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
];

export default function GameBoard({ onSelectBox, turns = [], disabled }) {
    let gameBoardValue = [...initialGameBoard.map(innerArr => [...innerArr])];

    turns.forEach((item, i) => {
        const { square, selectedPlayer } = item;
        const { row, col } = square;
        gameBoardValue[row][col] = selectedPlayer;
    });

    // // function updateUserGameBoard (rowIndex, columnIndex) {
    // //     if (gameBoardValue[rowIndex][columnIndex] == undefined) {
    // //         setGameBoardValue((preValue) => {
    // //             const changedBoardVal = [...preValue.map((preRow) => [...preRow])];
    // //             changedBoardVal[rowIndex][columnIndex] = currentActiveUser;
    // //             return changedBoardVal;
    // //         });
    
    // //         onSelectBox();
    // //     }
    // //     else {
    // //         return undefined;
    // //     }
    // // }

    // function checkWhoWins() {
    //     const XPlayersMark = turns.filter(x => x.selectedPlayer === 'X');
    //     const OPlayersMark = turns.filter(x => x.selectedPlayer === 'O');
        
    //     var wonPlayer = undefined;

    //     if (XPlayersMark.length >= 3 && wonPlayer === undefined) {
    //         const XRowSelected = XPlayersMark.filter(x => x.square.row === 0).length == 3 
    //             || XPlayersMark.filter(x => x.square.row === 1).length == 3 
    //             || XPlayersMark.filter(x => x.square.row === 2).length == 3;
    //         const YRowSelected = XPlayersMark.filter(x => x.square.col === 0).length == 3
    //             || XPlayersMark.filter(x => x.square.col === 1).length == 3
    //             || XPlayersMark.filter(x => x.square.col === 2).length == 3;
    //         const DiagnoalRowSelected = XPlayersMark.filter(x => x.square.row === 0 && x.square.col === 0).length == 1
    //             && XPlayersMark.filter(x => x.square.row === 1 && x.square.col === 1).length == 1
    //             && XPlayersMark.filter(x => x.square.row === 2 && x.square.col === 2).length == 1;

    //         wonPlayer = XRowSelected || YRowSelected || DiagnoalRowSelected ? { selectedPlayer: 'X' } : undefined;
    //     }
        
    //     if (OPlayersMark.length >= 3 && wonPlayer === undefined) {
    //         const XRowSelected = OPlayersMark.filter(x => x.square.row === 0).length == 3 
    //             || OPlayersMark.filter(x => x.square.row === 1).length == 3 
    //             || OPlayersMark.filter(x => x.square.row === 2).length == 3;
    //         const YRowSelected = OPlayersMark.filter(x => x.square.col === 0).length == 3
    //             || OPlayersMark.filter(x => x.square.col === 1).length == 3
    //             || OPlayersMark.filter(x => x.square.col === 2).length == 3;
    //         const DiagnoalRowSelected = OPlayersMark.filter(x => x.square.row === 0 && x.square.col === 0).length == 1
    //             && OPlayersMark.filter(x => x.square.row === 1 && x.square.col === 1).length == 1
    //             && OPlayersMark.filter(x => x.square.row === 2 && x.square.col === 2).length == 1;

    //         wonPlayer = XRowSelected || YRowSelected || DiagnoalRowSelected ? { selectedPlayer: 'O' } : undefined;
    //     }

    //     return wonPlayer;
    // }

    // if (checkWhoWins() != undefined) {
    //     winnerWon(checkWhoWins());
    // }

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