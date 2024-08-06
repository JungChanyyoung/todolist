import React, { useEffect, useState } from "react";

export const TodolistSave = () => {
  const [todo, setTodo] = useState([]);

  const handleInpoutChange = (event) => {
    setTodo(event.target.value);
  };

  useEffect(() => {
    const storedTodo = localStorage.getItem("todoList");
    if (storedTodo) {
      setTodo(storedTodo);
    }
  }, []);

  const handleSaveClick = () => {
    let todoList = JSON.parse(localStorage.getItem("todoList"));
    if (!todoList) {
      todoList = [];
    }
    todoList.push(todo);
    console.log(todoList);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  // 저장 이벤트 핸들러 함수 만들기
  // 만약 localStorage.getItem('todoList')에 값이 없다면 빈배열로 set 해준다
  // localStorage에서 리스트를 가져온다
  // 리스트에 todo를 push 해준다
  // push한 리스트를 localStorage에 set 해준다

  return (
    <div>
      <div className="createitem-container">
        <div className="createitem-icon">
          <input
            type="text"
            size="20"
            maxLength="16"
            placeholder="할 일을 입력해주세요"
            onChange={handleInpoutChange}
          />
        </div>
        {/* 이벤트 핸들러 함수와 연결 */}
        <button className="save" onClick={handleSaveClick}>
          저장
        </button>
      </div>
    </div>
  );
};
