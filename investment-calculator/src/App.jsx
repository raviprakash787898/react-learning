import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { initialUserInputs } from './util/constants';
import Results from "./components/Results";
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({...initialUserInputs});
    const isInValidInputs = Object.keys(userInput).filter(x => userInput[x] === 0).length > 0;

    function handleInputChangeTrigger(triggerInput, updatedValue) {
        setUserInput((preValue) => {
            return {
                ...preValue,
                [triggerInput]: updatedValue ? +updatedValue : 0
            }
        });
    }

    return (
        <>
            <Header />
            <UserInput userInput={userInput} inputChangeTrigger={handleInputChangeTrigger} />
            { isInValidInputs && <p className="center">Please enter valid Input data</p> }
            { !isInValidInputs && <Results userInput={userInput} /> }
        </>
    )
}

export default App
