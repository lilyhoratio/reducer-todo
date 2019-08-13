import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = props => {
  // console.log("todo props", props.todo.completed);

  console.log("todo", props)
  const {todo} = props

  return (
    // <div className="todo-container">
    <div
      className={`todo-container${todo.completed ? "-completed" : ""}`}
    >
      <div
        className="todo-text"
        // onClick={() => props.toggleItem(todo.id)}
      >
        <p>{todo.item}</p>
      </div>

      <div className={`todo-icons${todo.completed ? "-completed" : ""}`}>
        <FontAwesomeIcon icon="edit" id="task-icon" onClick={null} />
        {/* click edit button which adds props to todo (edit=true) */}
        {/* ternary to render input instead of props.todo.task */}
        <FontAwesomeIcon
          icon="check"
          id="task-icon"
        //   onClick={() => toggleItem(todo.id)}
        />
        <FontAwesomeIcon
          icon="trash"
          id="task-icon"
        //   onClick={() => deleteItem(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
