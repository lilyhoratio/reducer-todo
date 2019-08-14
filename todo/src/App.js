import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, reducer } from "./reducers/reducer"
import './App.css';

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTasks,
  faTrash,
  faPlusSquare,
  faCheck,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

library.add(faTasks, faTrash, faPlusSquare, faCheck, faEdit);

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log("dispatch", dispatch)
  console.log("todos", state)

  return (
    <div className="todo-all">
        <div className="todo-header">
          <h2>__Dunderlist__</h2>
          <FontAwesomeIcon id="task-icon" icon="tasks" />
        </div>
        <div className="todo-main">
          <TodoForm dispatch={dispatch} />
          <TodoList dispatch={dispatch} state={state} />
        </div>
    </div>
  );
}

export default App;
