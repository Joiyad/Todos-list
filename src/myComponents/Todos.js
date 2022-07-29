import React from 'react'
import TodoItem from "./TodoItem.js";

export const Todos = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Todos List</h1>
            {props.todos.length === 0? "No todos to display.":
                props.todos.map((todo) => {
                    return <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
                })
            }
        </div>
    )
}
