import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export const TodolistItems = () => {
  return (
    <div className="todolist-container">
      <div className="checkbox">
        <FontAwesomeIcon icon={faSquareCheck} className="icon" />
        <div className="text">호호</div>
      </div>
      <div>
        <FontAwesomeIcon icon={faPencil} className="icon" />
        <FontAwesomeIcon icon={faTrashCan} className="icon" />
      </div>
    </div>
  );
};
