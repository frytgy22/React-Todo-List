import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    const [type, setType] = useState("users")
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })

    useEffect(() => {//after rendering component
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log("clean type")
        }
    }, [type])

    const mouseMoveHandler = ev => {
        setPos({
            x: ev.clientX,
            y: ev.clientY
        })
    }

    useEffect(() => {//componentDidMount work 1 time
        window.addEventListener('mousemove', ev => {
            mouseMoveHandler(ev)
        })

        return () => {
            window.removeEventListener('mousemove', ev => {
                mouseMoveHandler(ev)
            })
        }
    }, [])

    return (
        <div>
            <h1>Resource: {type}</h1>

            <button onClick={() => setType("users")}>Users</button>
            <button onClick={() => setType("todos")}>Todo</button>
            <button onClick={() => setType("posts")}>Posts</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;
