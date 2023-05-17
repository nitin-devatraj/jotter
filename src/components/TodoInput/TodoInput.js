import React, { useRef } from "react";
import Button from "../UI/Button/Button";
import InputFormContainer from "../UI/InputFormContainer";

const TodoInput = (props) => {
  const textInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (textInputRef.current.value.trim().length === 0) {
      props.onError(false);
      return;
    }
    props.onAddTodo(textInputRef.current.value);
    textInputRef.current.value = "";
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <InputFormContainer isValid={props.isValid}>
        <label>Add New Todo</label>
        <input type="text" ref={textInputRef} />
      </InputFormContainer>
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoInput;
