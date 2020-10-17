import React, {useEffect, useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    const [value, setValue] = useState("initial")
    const renderCount = useRef(1)//as variable
    const inputRef = useRef(null)
    const prevValue = useRef("")

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>Render count: {renderCount.current}</h1>
            <h2>Previous state: {prevValue.current}</h2>
            <input ref={inputRef} onChange={e => setValue(e.target.value)} value={value}/>
            <button onClick={focus}>Focus</button>
        </div>
    );
}

export default App;
