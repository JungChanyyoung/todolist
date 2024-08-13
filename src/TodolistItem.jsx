import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export const TodolistItem = ({ todo, id }) => {
  return (
    <div className="todolist-container" id={id}>
      <div className="checkbox">
        <FontAwesomeIcon icon={faSquareCheck} className="icon" />
        <div className="text">{todo}</div>
      </div>
      <div>
        <FontAwesomeIcon icon={faPencil} className="icon edit" />
        <span>
          <FontAwesomeIcon icon={faTrashCan} className="icon delete" />
        </span>
      </div>
    </div>
  );
};
