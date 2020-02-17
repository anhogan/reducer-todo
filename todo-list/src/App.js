import React, { useState, useReducer } from 'react';
import { reducer, initialList } from './reducers/Reducer';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialList);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event, task) => {
    event.preventDefault();
    dispatch({ type: 'ADD-TODO', payload: task });
    setNewTodo('');
  };

  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE-COMPLETED', payload: id });
  };

  const clearCompleted = (event) => {
    event.preventDefault();
    dispatch({ type: 'CLEAR-COMPLETED' });
  };

  return (
    <div className="App">
      <ToDoList 
        todoList={state.list}
        newTodo={newTodo}
        handleChange={handleChange}
        addTodo={addTodo}
        clearCompleted={clearCompleted}
        toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
