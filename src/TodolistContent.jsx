import { TodolistItem } from "./TodolistItem";

export const TodolistContent = ({ todos }) => {
  // 이벤트 위임 방식
  const handleClick = (e) => {
    const clickedId = e.currentTarget.id;
    let targetSvg = e.target;
    if (e.target.tagName === "path") {
      targetSvg = e.target.parentElement;
    }

    if (targetSvg.classList.contains("delete")) {
      // todos에서 인덱스가 clickedId인 요소를 빼주고 todos에 셋 해준다
    }
    if (targetSvg.classList.contains("edit")) {
    }
  };

  return (
    <>
      <div className="todolist-content">
        {todos.map((todo, index) => (
          <div onClick={handleClick}>
            <TodolistItem key={index} id={index} todo={todo} />
          </div>
        ))}
      </div>
    </>
  );
};
