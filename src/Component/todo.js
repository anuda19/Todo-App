import React from 'react';


const Todo = ({todo, onDelete}) => {
    return (
        <div>
            <li>{todo.sno}</li>
            <h4>{todo.task}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={() => {onDelete(todo)}}>Delete</button>
        </div>
    );
}


export default Todo;