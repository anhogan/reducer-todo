import React, { useReducer } from 'react';
import { initialList } from './reducers/Reducer';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const initialState = initialList;

  return (
    <div className="App">
      <ToDoList 
        initialState={initialState} />
    </div>
  );
}

export default App;
