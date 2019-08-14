import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({dispatch, todo}) => {

  console.log(todo)

  const toggleItem = (e) => {
    // e.preventDefault() // why does this break it?
    dispatch({type: "TOGGLE_TODO", id: todo.id})
  }

  return (
    <div className={`todo-container${todo.completed ? "-completed" : ""}`}>
      <div className="todo-text" onClick={toggleItem}>
        <p>{todo.item}</p>
      </div>

      <div className={`todo-icons${todo.completed ? "-completed" : ""}`}>
        <FontAwesomeIcon icon="check" id="task-icon" onClick={() => toggleItem(todo.id)} />
        {/* <FontAwesomeIcon icon="trash" id="task-icon" onClick={() => deleteItem(todo.id)} /> */}
      </div>
    </div>
  );
};

export default Todo;
