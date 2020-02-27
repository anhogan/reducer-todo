import React from 'react';
import ToDoItems from './ToDoItems';
import ToDoForm from './ToDoForm';

function ToDoList(props) {
  return (
    <div className="todo-container">
      {props.todoList.map(todo => (
        <ToDoItems 
          key={todo.id}
          todo={todo}
          toggleComplete={props.toggleComplete} />
      ))}
      <div className="todo-form">
        <h4>Add an Item</h4>
        <ToDoForm
          newTodo={props.newTodo}
          handleChange={props.handleChange}
          addTodo={props.addTodo}
          clearCompleted={props.clearCompleted}
          setNewTodo={props.setNewTodo} />
      </div>
    </div>
  );
};

export default ToDoList;