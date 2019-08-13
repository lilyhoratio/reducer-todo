import React, {useState, useReducer} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import {initialState, reducer} from "./reducers/reducer"
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

  const [todos, setTodos] = useState(initialState)

  return (
    <div className="App">
      <TodoForm />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
