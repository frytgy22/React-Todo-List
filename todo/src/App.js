import React, {useEffect} from 'react';
import './App.css';
import TOdoList from "./todo/Todo";
import Context from "./todo/context";
import Loader from "./todo/Loader";

const AddTodo = React.lazy(() => import('./todo/AddTodo'))

function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
                setLoading(false)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        const arr = [{
            id: Date.now(),
            completed: false,
            title
        }]
        console.log(todos)
        setTodos(todos.concat(arr))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className={'wrapper'}>
                <h1>React tutorial</h1>

                <React.Suspense fallback={<Loader/>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>

                {loading && <Loader/>}

                {todos.length ? <TOdoList todos={todos} onToggle={toggleTodo}/>
                    : loading ? null : <p>There are no tasks</p>
                }

            </div>
        </Context.Provider>
    );


}


export default App;
