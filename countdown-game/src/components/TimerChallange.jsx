import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, timeTarget, timerDisable, playerName }) {
    const timerRef = useRef();
    const dialogRef = useRef();

    const [timeRemaining, setTimeRemaining] = useState(timeTarget * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < timeTarget * 1000;
    const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
    const isTimerLess = ((timeTarget * 1000) / 2) > timeRemaining;

    if (timeRemaining <= 0) {
        clearInterval(timerRef.current);
        dialogRef.current.open();
    }

    function handleReset() {
        setTimeRemaining(timeTarget * 1000);
    }

    function handleStart() {
        timerRef.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        dialogRef.current.open();
        clearInterval(timerRef.current);
    }

    return (
        <>
            <ResultModal ref={dialogRef} timeTarget={timeTarget} 
                remainingTime={timeRemaining} onReset={handleReset} 
                formattedRemainingTime={formattedRemainingTime}
                playerName={playerName}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {timeTarget} second{timeTarget > 1 ? 's' : ''}
                </p>
                <p className={ isTimerLess ? 'timerToEnd' : undefined  }>
                    Time remaining { formattedRemainingTime }
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}
                        disabled={timerDisable} 
                        title={ timerDisable ? 'Please set name to start timer challange' : undefined } >
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}