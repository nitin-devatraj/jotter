import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <TodoListItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </TodoListItem>
      ))}
    </ul>
  );
};

export default TodoList;
