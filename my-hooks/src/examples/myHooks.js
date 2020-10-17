import React, {useEffect, useState} from "react";

function useLogger(value) {
    useEffect(() => {
        console.log(value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {
            value, onChange
        },
        value, clear
    }
}


export default function App() {
    // const [name, setName] = useState('')
    // const [lastname, setLastname] = useState('')

    // const changeHandler = event => {
    //     setName(event.target.value)
    // }
    //
    // const changeLastname = event => {
    //     setLastname(event.target.value)
    // }
    const input = useInput('')
    useLogger(input.value)

    return (
        <div>

            <input {...input.bind}/>
            <div>  {input.value}</div>
            {/*<input value={lastname} onChange={changeLastname}/>*/}
            <button onClick={() => {
                input.clear()
            }}>Clear
            </button>
        </div>
    )
}