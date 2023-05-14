import React, { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([
    { text: "Fill the paperwork!", id: "g1" },
    { text: "Finish the current project", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setTodoList((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setTodoList((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <div>
      <section id="goal-form">
        <TodoInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {todoList.length === 0 && (
          <p className="default-text">No todo items found. Maybe add one?</p>
        )}
        {todoList.length > 0 && (
          <TodoList items={todoList} onDeleteItem={deleteItemHandler} />
        )}
        {}
      </section>
    </div>
  );
};

export default App;
