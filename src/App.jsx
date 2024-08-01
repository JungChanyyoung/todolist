import "./App.css";
import { TodolistContent } from "./TodolistContent";
import { TodolistHeader } from "./TodolistHeader";
import { TodolistSave } from "./TodolistSave";

function App() {
  return (
    <div className="todolist">
      <TodolistHeader />
      <TodolistContent />
      <TodolistSave />
    </div>
  );
}

export default App;
