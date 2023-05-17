import React, { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import ErrorModal from "./components/UI/error/ErrorModal";

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

  const inputValidationHandler = (isValid) => {
    setIsInputValid(isValid);
  };

  const deactivateErrorHandler = () => {
    setIsInputValid(true);
  };

  return (
    <>
      <section
        id="goal-form"
        style={{
          boxShadow: isInputValid ? "3px 3px #b7e4c7" : "3px 3px salmon",
        }}
      >
        <TodoInput
          onAddTodo={addTodoHandler}
          inputValidator={inputValidationHandler}
        />
      </section>
      <section id="goals">
        {todoList.length === 0 && (
          <h1 className="default-text">No todo items found. Maybe add one?</h1>
        )}
        {todoList.length > 0 && (
          <TodoList items={todoList} onDeleteTodo={deleteTodoHandler} />
        )}
        {!isInputValid && <ErrorModal onConfirm={deactivateErrorHandler} />}
      </section>
    </>
  );
};

export default App;
