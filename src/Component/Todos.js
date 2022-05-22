import React from 'react';
import Todo from './todo';

const Todos = (props) => {
    return (
        <div className='container'>
            <h3>Todos List</h3>
            {props.todos.length===0? <h2><span className="badge rounded-pill bg-warning text-dark">No todos to display</span></h2> :
           props.todos.map((todo) => {
            return  <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
               
           })
                }
        
        
        </div>
    ); 
}

 
export default Todos;