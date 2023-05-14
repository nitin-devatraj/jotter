import React, { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([
    { text: "Fill the paperwork!", id: "g1" },
    { text: "Finish the current project", id: "g2" },
  ]);

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

  return (
    <div>
      <section id="goal-form">
        <TodoInput onAddTodo={addTodoHandler} />
      </section>
      <section id="goals">
        {todoList.length === 0 && (
          <p className="default-text">No todo items found. Maybe add one?</p>
        )}
        {todoList.length > 0 && (
          <TodoList items={todoList} onDeleteTodo={deleteTodoHandler} />
        )}
        {}
      </section>
    </div>
  );
};

export default App;
