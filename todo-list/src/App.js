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

  const addTodo = (task) => {
    dispatch({ type: 'ADD-TODO', payload: task })
  };

  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE-COMPLETED', payload: id })
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR-COMPLETED' })
  };

  return (
    <div className="App">
      <ToDoList 
        todoList={state.list}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleChange={handleChange}
        addTodo={addTodo}
        clearCompleted={clearCompleted}
        toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
