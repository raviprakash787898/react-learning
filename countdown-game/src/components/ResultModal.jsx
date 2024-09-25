import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

// Here we are using useRef to get the DOM instance/access (i.e dialog/modal) of a element and play with it.
const ResultModal = forwardRef(function ResultModal({ timeTarget, remainingTime, onReset, formattedRemainingTime, playerName }, ref) {
    const innerDialogRef = useRef();

    const userLost = remainingTime <= 0;
    const score = Math.round((1 - (remainingTime / (timeTarget * 1000))) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                innerDialogRef.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog ref={innerDialogRef} className="result-modal">
            { userLost && <h2>You lost { playerName } </h2> }
            { !userLost && <h2>Your Score: {score}</h2> }
            <p>
                The target time was <strong>{timeTarget} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default ResultModal;