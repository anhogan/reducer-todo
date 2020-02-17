import React from 'react';

const ToDoForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(props.newTodo);
    props.setNewTodo('');
  }

  const clearCompleted = (event) => {
    event.preventDefault();
    props.clearCompleted();
  }

  return (
    <form>
      <input
        onChange={props.handleChange}
        type="text"
        name="todo-item"
        placeholder="To-Do"
        value={props.newTodo} />
        <div className="buttons">
          <button onClick={handleSubmit}>Add To-Do</button>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    </form>
  );
};

export default ToDoForm;