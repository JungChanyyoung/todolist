import { useEffect, useState } from "react";
import "./App.css";
import { TodolistContent } from "./TodolistContent";
import { TodolistHeader } from "./TodolistHeader";
import { TodolistSave } from "./TodolistSave";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todolist">
      <TodolistHeader />
      <TodolistContent todos={todos} setTodos={setTodos} />
      <TodolistSave setTodos={setTodos} />
    </div>
  );
}

export default App;
