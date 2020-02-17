import React from 'react';
import ToDoItems from './ToDoItems';
import ToDoForm from './ToDoForm';

function ToDoList(props) {
  return (
    <div>
      {props.todoList.map(todo => (
        <ToDoItems 
          key={todo.id}
          todo={todo}
          toggleComplete={props.toggleComplete} />
      ))}
      <ToDoForm
        newTodo={props.newTodo}
        handleChange={props.handleChange}
        addTodo={props.addTodo}
        clearCompleted={props.clearCompleted}
        setNewTodo={props.setNewTodo} />
    </div>
  );
};

export default ToDoList;