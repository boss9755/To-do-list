import React, { useState, useEffect } from 'react';
import './App.css';

function TodoForm() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  
  const addTask = () => {
    if(task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 100),
        value: task
      }
      setTasklist([...tasklist, taskDetails]);
    }
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTasklist(tasklist.filter((task) => task.id !== id));
  };

  return (
    <div className = "todo">
      <input type = "text" name = "text" id = "text" onChange = {(e) => handleChange(e)} placeholder = "Enter task"></input>
      <button className = "add-btn" onClick = {addTask}>
        Add
      </button>
      <br/>
      {tasklist !== [] ?
      <ul>
        {tasklist.map(task =>
          <li className = "listitem">{task.value}
          <button className = "delete-btn" onClick = {(e) => deleteTask(e, task.id)}>Delete</button>
          </li>
        )}
      </ul>
      :null}
    </div>
  );
}

function App() {
  const titleName = useEffect(() => {
    document.title = "To do list"
 }, []);
  return (
    <header>
    {titleName}
    <div className="App">
      <div className="header">
        To Do List
      </div>
      <TodoForm/>
    </div>
    </header>
  );
}

export default App;