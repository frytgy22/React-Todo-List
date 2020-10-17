import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function computeInitialCounter() {
    return 10;
}

function App() {
    const [counterState, setCounter] = useState(() => {
        return computeInitialCounter
    })

    function increment() {
        setCounter(counterState + 1)

        // setCounter((prevCounter) => {
        //     return prevCounter + 1
        // })
        // setCounter(prevState => prevState + 1) add+2
    }

    function decrement() {
        setCounter(counterState - 1)
    }

    const [state, setState] = useState({
        title: 'hello',
        date: Date.now()
    })

    function updateTitle() {
        setState(prevState => {
            return {
                ...prevState, title: "123"
            }
        })
    }

    return (
        <div>
            <h1>Counter: {counterState}</h1>
            <button onClick={increment} className={"btn btn-primary"}>Add</button>
            <button onClick={decrement} className={"btn btn-primary"}>Remove</button>
            <button onClick={updateTitle} className={"btn btn-primary"}>Change name
            </button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
