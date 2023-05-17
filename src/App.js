import React, { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import ErrorModal from "./components/UI/error/ErrorModal";
import { styled } from "styled-components";
import TodoSection from "./components/UI/TodoSection";
import InputFormSection from "./components/UI/InputFormSection";

const DefaultText = styled.h1`
  text-align: center;
  color: #52b788;
`;

const App = () => {
  const [todoList, setTodoList] = useState([
    { text: "Fill the paperwork!", id: "g1" },
    { text: "Finish the current project", id: "g2" },
  ]);
  const [isInputValid, setIsInputValid] = useState(true);

  const addTodoHandler = (enteredText) => {
    setTodoList((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodos;
    });
  };

  const deleteTodoHandler = (todoId) => {
    setTodoList((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
      return updatedTodos;
    });
  };

  const deactivateErrorHandler = () => {
    setIsInputValid(true);
  };

  const activateErrorHandler = () => {
    setIsInputValid(false);
  };

  return (
    <>
      <InputFormSection isValid={isInputValid}>
        <TodoInput
          onAddTodo={addTodoHandler}
          onError={activateErrorHandler}
          isValid={isInputValid}
        />
      </InputFormSection>
      <TodoSection>
        {todoList.length === 0 && (
          <DefaultText>No todo items found. Maybe add one?</DefaultText>
        )}
        {todoList.length > 0 && (
          <TodoList items={todoList} onDeleteTodo={deleteTodoHandler} />
        )}
        {!isInputValid && <ErrorModal onConfirm={deactivateErrorHandler} />}
      </TodoSection>
    </>
  );
};

export default App;
