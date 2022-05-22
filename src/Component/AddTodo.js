import React, { useState } from 'react';
let AddTodo = ({addTodo}) => {
    let [title, setTitle] = useState("")
    let [desc, setDesc] = useState("")

    let submit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            alert('Title and Description cannot be empty');           
        } 
            addTodo(title, desc);
    }
    return (
        <div className='container my-3'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text"  className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Decription</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => { setDesc(e.target.value) }}/>
                </div>
                <button type="submit" className="btn btn-success btn-sm" >Add Todo</button>
            </form>
        </div>);
}


export default AddTodo;