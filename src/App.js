import './App.css';
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import Footer from "./components/Footer";
import {AddTodo} from "./components/AddTodo";
import React, { useState, useEffect } from 'react';


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo)=>{
    console.log("I'm ondelete of todo ", todo)

    // deleting this way doesnot work in react
    // let index = todos.indexOf(todo)
    // todos.splice(index , 1);

    setTodos( todos.filter((e)=> {
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc)=> {
    console.log("I am adding this todo" , title,desc)
    let id;
    if( todos.length===0){
      id = 0;
    }
    else{
      id = todos[todos.length-1].id + 1;     
    }
    const myTodo = {
      id: id,
      title: title,
      desc: desc
    }
    
    setTodos([...todos, myTodo]);
    console.log(myTodo)

    
  }

  const [todos, setTodos] = useState(initTodo);
  

  return (
    <>
    <Header title="My Todos List" searchBar={false } />
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete} />
    <Footer />
    </>
    
  );
}

export default App;


// {
//   id: 1,
//   title: "Abc",
//   desc: "Writing alphabets1"
// },
// {
//   id: 2,
//   title: "Bcd",
//   desc: "Writing alphabets2"
// },
// {
//   id: 3,
//   title: "Cde",
//   desc: "Writing alphabets3"
// }