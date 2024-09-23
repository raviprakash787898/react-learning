function checkWhoWins(gamePlayerTurns, gamePlayerName) {
    const XPlayersMark = gamePlayerTurns.filter(x => x.selectedPlayer === 'X');
    const OPlayersMark = gamePlayerTurns.filter(x => x.selectedPlayer === 'O');
    
    var wonPlayer = undefined, gameWinner = undefined;

    if (XPlayersMark.length >= 3 && wonPlayer === undefined) {
        const XRowSelected = XPlayersMark.filter(x => x.square.row === 0).length == 3 
            || XPlayersMark.filter(x => x.square.row === 1).length == 3 
            || XPlayersMark.filter(x => x.square.row === 2).length == 3;
        const YRowSelected = XPlayersMark.filter(x => x.square.col === 0).length == 3
            || XPlayersMark.filter(x => x.square.col === 1).length == 3
            || XPlayersMark.filter(x => x.square.col === 2).length == 3;
        const DiagnoalRowSelected = XPlayersMark.filter(x => x.square.row === 0 && x.square.col === 0).length == 1
            && XPlayersMark.filter(x => x.square.row === 1 && x.square.col === 1).length == 1
            && XPlayersMark.filter(x => x.square.row === 2 && x.square.col === 2).length == 1;

        wonPlayer = XRowSelected || YRowSelected || DiagnoalRowSelected ? { selectedPlayer: 'X' } : undefined;
    }
    
    if (OPlayersMark.length >= 3 && wonPlayer === undefined) {
        const XRowSelected = OPlayersMark.filter(x => x.square.row === 0).length == 3 
            || OPlayersMark.filter(x => x.square.row === 1).length == 3 
            || OPlayersMark.filter(x => x.square.row === 2).length == 3;
        const YRowSelected = OPlayersMark.filter(x => x.square.col === 0).length == 3
            || OPlayersMark.filter(x => x.square.col === 1).length == 3
            || OPlayersMark.filter(x => x.square.col === 2).length == 3;
        const DiagnoalRowSelected = OPlayersMark.filter(x => x.square.row === 0 && x.square.col === 0).length == 1
            && OPlayersMark.filter(x => x.square.row === 1 && x.square.col === 1).length == 1
            && OPlayersMark.filter(x => x.square.row === 2 && x.square.col === 2).length == 1;

        wonPlayer = XRowSelected || YRowSelected || DiagnoalRowSelected ? { selectedPlayer: 'O' } : undefined;
    }

    if (wonPlayer) {
        gameWinner = gamePlayerName[wonPlayer.selectedPlayer];
    }
    else {
        if (gamePlayerTurns.filter(x => x != undefined).length == 9) {
            gameWinner = "Tie";
        }
    }

    return gameWinner;
}

function getActivePlayer(turns = []) {
    return turns.length > 0 && turns[0].selectedPlayer === 'X' ? 'O' : 'X';
}

export { checkWhoWins, getActivePlayer };