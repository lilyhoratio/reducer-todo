import React from 'react';
import Todo from "./Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = ({ dispatch, state }) => {

  console.log("todolist state", state)

  const clearCompleted = e => {
    e.preventDefault()
    dispatch({ type: "CLEAR_COMPLETED" }) // don't need payload b/c not adding data
  }

  return (
    <div className="todo-list">
      <div className="todo-list-incomplete">
        <h4>To-dos</h4>
        {state.todos.map(todo => {
          if (!todo.completed) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                dispatch={dispatch} //toggle, delete
              />
            );
          }
        })}
      </div>
      <div className="todo-list-complete">
        <div className="todo-list-complete-header">
          <h4>Completed</h4>
          <FontAwesomeIcon
            icon="trash"
            id="task-icon"
            onClick={clearCompleted}
          />
          {/* <button onClick={clearCompleted}>Clear Completed</button> */}
        </div>
        {state.todos.map(todo => {
          if (todo.completed) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                dispatch={dispatch}
              />
            );
          }
        })}
      </div>
    </div>
  )
}

export default TodoList
