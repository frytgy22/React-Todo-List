import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TOdoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem key={todo.id}
                                 todo={todo}
                                 onChange={props.onToggle}
                                 index={index}/>
            })
            }
        </ul>
    )
}

TOdoList.propTypes = {
    todos: PropTypes.array
}

export default TOdoList