import React from "react";
import "./TodoListItem.css";

const TodoListItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="todo-item">
      <p> {props.children}</p>
      <p className="cancel-btn" onClick={deleteHandler}>
        &#10062;
      </p>
    </li>
  );
};

export default TodoListItem;
