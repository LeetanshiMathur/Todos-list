
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete of todo" , todo);
    const updatedTodos = todos.filter((e) => e.sno===todo.sno);
    console.log(updatedTodos);
    // setTodos(
      
     
    // );
  }
  const [todos , setTodos] = useState([
    {
      sno : 1,
      title : "Go to the market",
      desc  : "you need to go to the market to buy vegetables"
    },
    {
      sno : 2,
      title : "Go to the mall",
      desc  : "you need to go to the mall to buy clothes"
    },
    {
      sno : 3,
      title : "Go to the zoo",
      desc  : "you need to go to the zoo see elephants"
    },
  ]);
  return (
   <>
       <Header title = "My Todo List" searchBar = {true}/>
       <Todos todos = {todos} onDelete = {onDelete}/>
       <Footer/>
   </>
  );
}

export default App;
