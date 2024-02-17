import React, { useState } from 'react';
import '../App.css'

const User_Profile_Section = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') {
      alert("Please Enter Todo");
      return;
    }

    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const editTodo = (index) => {
    const newValue = prompt("Enter Updated Value", todos[index]);
    if (newValue !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index] = newValue;
      setTodos(updatedTodos);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Todo App</h1>
        <div className="todo-container">
          <input
            className="input-field"
            placeholder="Enter What Todo?"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn add-btn" onClick={addTodo}>ADD TODO</button>
          <button className="btn delete-all-btn" onClick={deleteAll}>DELETE ALL</button>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                {todo}
                <button className="btn edit-btn" onClick={() => editTodo(index)}>EDIT</button>
                <button className="btn delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export { User_Profile_Section };
