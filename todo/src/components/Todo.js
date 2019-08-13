import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = props => {
  // console.log("todo props", props.todo.completed);

  return (
    // <div className="todo-container">
    <div
      className={`todo-container${props.todo.completed ? "-completed" : ""}`}
    >
      <div
        className="todo-text"
        onClick={() => props.toggleItem(props.todo.id)}
      >
        <p>{props.todo.task}</p>
      </div>

      <div className={`todo-icons${props.todo.completed ? "-completed" : ""}`}>
        <FontAwesomeIcon icon="edit" id="task-icon" onClick={null} />
        {/* click edit button which adds props to todo (edit=true) */}
        {/* ternary to render input instead of props.todo.task */}
        <FontAwesomeIcon
          icon="check"
          id="task-icon"
          onClick={() => props.toggleItem(props.todo.id)}
        />
        <FontAwesomeIcon
          icon="trash"
          id="task-icon"
          onClick={() => props.deleteItem(props.todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
