import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTodo from './Component/AddTodo';
import Todos from './Component/Todos';
import Header from './Component/header';
import React, {useState} from 'react';
import Footer from './Component/Footer';




function App() {
  const onDelete = (todo) =>{
    setTodos(todos.filter((e) =>{
      return e!==todo;
    }))
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno = todos[todos.length-1].sno + 1;
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]) 
  }

  let [todos, setTodos] = useState([
    {
      sno: 1,
      task: "Go to the market",
      desc: "Go to the market as soon as possible to get this job done"
    },
    {
      sno: 2,
      task: "Go to the mall",
      desc: "Go to the market as soon as possible to get this job done2"
    },
    {
      sno: 3,
      task: "Go to the movie",
      desc: "Go to the market as soon as possible to get this job done3"
    },
  ]);
  return (
    <div className='App'>
      <Header name="My TodoList"  />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </div>
  )
}



export default App;

