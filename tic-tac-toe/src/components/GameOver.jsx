export default function GameOver({ winner, rematch }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            { winner === "Tie" && <p>It's a Draw!</p> }
            { winner != "Tie" && <p>{ winner } won!</p> }
            <p>
                <button onClick={ rematch }>Rematch!</button>
            </p>
        </div>
    );
}