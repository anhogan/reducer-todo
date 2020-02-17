import React, { useState, useReducer } from 'react';
import { reducer } from '../reducers/Reducer';
import ToDoItems from './ToDoItems';

function ToDoList(props) {
  const [state, dispatch] = useReducer(reducer, props.initialState);
  const [newTodo, setNewTodo] = useState('');
  const [todo, setTodo] = useState(state.task)

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      {props.initialState.map(todo => (
        <ToDoItems 
          key={todo.id}
          todo={todo}
          toggleComplete={() => dispatch({ type: 'TOGGLE-COMPLETE' })} />
      ))}
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="todo-item"
          placeholder="To-Do"
          value={newTodo} />
          <div className="buttons">
            <button onClick={() => dispatch({ type: 'ADD-TODO', payload: todo })}>Add To-Do</button>
            <button onClick={() => dispatch({ type: 'CLEAR-COMPLETED' })}>Clear Completed</button>
          </div>
      </form>
    </div>
  );
}

export default ToDoList;