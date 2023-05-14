import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.items.map((todo) => (
        <TodoListItem key={todo.id} id={todo.id} onDelete={props.onDeleteTodo}>
          {todo.text}
        </TodoListItem>
      ))}
    </ul>
  );
};

export default TodoList;
