import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const TodolistHeader = () => {
  return (
    <div className="title-container">
      <div className="title-icon">
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="title">TodoList</div>
    </div>
  );
};
