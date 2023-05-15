import React, { useState } from "react";
import Button from "../UI/Button/Button";
import { styled } from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.valid ? "white" : "salmon")};
  }

  & input {
    display: block;
    width: 100%;
    border: none;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    height: 30px;
    border-radius: 2px;
    background-color: ${(props) => (props.valid ? "white" : "salmon")};
  }

  & input:focus {
    outline: none;
    background: whitesmoke;
  }
`;

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
      <FormControl valid={isValid}>
        <label>Add New Todo</label>
        <input type="text" value={enteredValue} onChange={inputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoInput;
