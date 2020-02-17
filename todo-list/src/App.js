import React, { useReducer } from 'react';
import { initialList } from './reducers/Reducer';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const initialState = initialList;
  const newToDo = "";

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <div className="App">
      <ToDoList 
        initialState={initialState}
        newToDo={newToDo}
        handleChange={handleChange} />
    </div>
  );
}

export default App;
