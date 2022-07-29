
import './App.css';
import Header from "./myComponents/Header.js";
import Footer from "./myComponents/Footer.js";
import {AddTodo} from "./myComponents/AddTodo.js";
import {Todos} from "./myComponents/Todos.js";
import React, { useState, useEffect } from 'react';

function App() {
  let intTodo;
  if(localStorage.getItem("todos")===null){
    intTodo=[];
    console.log("hi");
  }
  else{
    intTodo = JSON.parse(localStorage.getItem("todos"));
    console.log("Hello");
  }
  const onDelete = (todo) => {
    console.log("I am deleted.", todo)
  setTodos(todos.filter((e) => {
    return e!==todo;
  }))
  localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  const addTodo = (title, desc) => {
    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
    sno : sno,
    title : title,
    desc : desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }
  
  const [todos, setTodos] = useState(intTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  
  return (
    <>
        <Header title = "Todos-list" searchBar = {false}/>
        <AddTodo addTodo = {addTodo}/>
        <Todos todos = {todos} onDelete ={onDelete}/>
        <Footer/>
    </>
  );
}

export default App;
