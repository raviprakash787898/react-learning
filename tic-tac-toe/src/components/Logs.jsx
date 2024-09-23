export default function Logs({ turns = [] }) {

    return (
        <ol id="logs">
            {
                turns.map(turn => {
                    return (
                        <li key={`${turn.square.row}-${turn.square.col}-${turn.selectedPlayer}`}>
                            { `${turn.selectedPlayer} Selected [${ turn.square.row }, ${ turn.square.col }] box ` }
                        </li>
                    )
                })
            }
        </ol>
    );
}