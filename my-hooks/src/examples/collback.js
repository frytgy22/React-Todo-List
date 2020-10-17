import React, {useCallback, useEffect, useMemo, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsList from "./itemList";


function App() {

    const [number, setNumber] = useState(1)
    const [color, setColor] = useState(false)

    const styles = {
        color: color ? 'red' : 'pink'
    }

    const generateItemFromApi = useCallback(() => {
        return new Array(number).fill('').map((_, i) => `El ${i+1}`)
    },[number])

    return (
        <div>
            <h1 style={styles}>Number: {number}</h1>

            <button onClick={() => setNumber(prevState => prevState + 1)}>Add</button>
            <button onClick={() => setColor(prevState => !prevState)}>Color</button>

            <ItemsList  getItems={generateItemFromApi}/>
        </div>
    );
}

export default App;
