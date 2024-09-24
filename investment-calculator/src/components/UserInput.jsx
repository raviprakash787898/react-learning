export default function UserInput({ userInput, inputChangeTrigger }) {
    
    function handleKeyAndWheelScroll(e, eventType = undefined) {
        if(eventType === "wheelScroll" || e?.keyCode === 38 || e?.keyCode === 40) {
            e.preventDefault();

            // disable up or down arrow key to increase or decrease the number amount
            if (eventType === "wheelScroll") {
                e.target.blur();
            
                // Prevent the page/container scrolling
                e.stopPropagation();
    
                // Refocus immediately, on the next tick (after the current function is done)
                setTimeout(() => {
                    e.target.focus();
                }, 0);
            }
            return false; 
        }
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required onChange={ (event) => inputChangeTrigger('initialInvestment', event.target.value) } 
                        value={userInput.initialInvestment}
                        onKeyUp={ (event) => handleKeyAndWheelScroll(event) } onKeyDown={ (event) => handleKeyAndWheelScroll(event) } 
                        onWheel={ (event) => handleKeyAndWheelScroll(event, "wheelScroll") }/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required onChange={ (event) => inputChangeTrigger('annualInvestment', event.target.value) } 
                        value={userInput.annualInvestment}
                        onKeyUp={ (event) => handleKeyAndWheelScroll(event) } onKeyDown={ (event) => handleKeyAndWheelScroll(event) } 
                        onWheel={ (event) => handleKeyAndWheelScroll(event, "wheelScroll") }/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required onChange={ (event) => inputChangeTrigger('expectedReturn', event.target.value) } 
                        value={userInput.expectedReturn}
                        onKeyUp={ (event) => handleKeyAndWheelScroll(event) } onKeyDown={ (event) => handleKeyAndWheelScroll(event) } 
                        onWheel={ (event) => handleKeyAndWheelScroll(event, "wheelScroll") }/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required onChange={ (event) => inputChangeTrigger('duration', event.target.value) } 
                        value={userInput.duration}
                        onKeyUp={ (event) => handleKeyAndWheelScroll(event) } onKeyDown={ (event) => handleKeyAndWheelScroll(event) } 
                        onWheel={ (event) => handleKeyAndWheelScroll(event, "wheelScroll") }/>
                </p>
            </div>
        </section>
    );
}