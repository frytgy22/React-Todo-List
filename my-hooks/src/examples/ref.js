import React, {useEffect, useMemo, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function complexCompute(num) {

    let i = 0
    while (i < 1000000000) i++ //long compute

    return num * 2
}


function App() {

    const [number, setNumber] = useState(44)
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    const [color, setColor] = useState(false)

    const styles = useMemo(() => {
        return {
            color: color ? 'red' : 'pink'
        }
    }, [color])

    useEffect(() => {
        console.log("styles changed")
    }, [styles])



    return (
        <div>
            <h1 style={styles}>Number: {computed}</h1>

            <button onClick={() => setNumber(prevState => prevState + 1)}>Add</button>
            <button onClick={() => setNumber(prevState => prevState - 1)}>Remove</button>
            <button onClick={() => setColor(prevState => !prevState)}>Color</button>
        </div>
    );
}

export default App;
