import React, { useReducer } from 'react';
import { reducer } from '../reducers/Reducer';
import ToDoItems from './ToDoItems';

function ToDoList(props) {
  const [state, dispatch] = useReducer(reducer, props.initialState);

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
          onChange={props.handleChange}
          type="text"
          name="todo-item"
          placeholder="To-Do"
          value={props.newTodo} />
          <div className="buttons">
            <button onClick={() => dispatch({ type: 'ADD-TODO' })}>Add To-Do</button>
            <button onClick={() => dispatch({ type: 'CLEAR-COMPLETED' })}>Clear Completed</button>
          </div>
      </form>
    </div>
  );
}

export default ToDoList;