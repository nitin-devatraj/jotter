import React, { useState } from "react";

import Button from "../UI/Button/Button";
import "./TodoInput.css";

const TodoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      props.inputValidator(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      props.inputValidator(false);
      return;
    }
    props.onAddTodo(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isValid ? "white" : "salmon" }}>
          Add New Todo
        </label>
        <input
          type="text"
          style={{ background: isValid ? "white" : "salmon" }}
          value={enteredValue}
          onChange={inputChangeHandler}
        />
      </div>
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoInput;
