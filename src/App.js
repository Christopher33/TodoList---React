import React, { useState, useEffect } from 'react';
import './App.css';

//Impoting Components
import From from "./components/Form";
import TodoList from './components/TodoList';


function App() {

  //State Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //Functions
  const filterHandler = () => {
    switch(status){
      case "completed": 
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted": 
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //Get local data
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  //Use Effect, put at the end of all funtion
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Chris's Todo List</h1>
      </header>
        <From 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus}  
        />
        <TodoList 
          todos={todos} 
          setTodos={setTodos} 
          filteredTodos={filteredTodos}
        />
    </div>
  );

}

export default App;
