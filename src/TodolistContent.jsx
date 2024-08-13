import { TodolistItem } from "./TodolistItem";

export const TodolistContent = ({ todos, setTodos }) => {
  // 이벤트 위임 방식
  const handleClick = (e) => {
    const clickedId = parseInt(e.currentTarget.id, 10);
    let targetSvg = e.target;

    if (e.target.tagName === "path") {
      targetSvg = e.target.parentElement;
    }

    if (targetSvg.classList.contains("delete")) {
      const updatedTodos = todos.filter((_, index) => index !== clickedId);
      setTodos(updatedTodos);
      console.log(updatedTodos);
    }
    if (targetSvg.classList.contains("edit")) {
      const newText = prompt("Enter the new text:", todos[clickedId]);
      if (newText && newText.trim() !== "") {
        const updatedTodos = todos.map((todo, index) =>
          index === clickedId ? newText : todo
        );
        setTodos(updatedTodos);
      }
    }
  };

  return (
    <>
      <div className="todolist-content">
        {todos.map((todo, index) => (
          <div key={index} id={index} onClick={handleClick}>
            <TodolistItem id={index} todo={todo} />
          </div>
        ))}
      </div>
    </>
  );
};
