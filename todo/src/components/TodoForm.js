import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoForm = ({dispatch}) => {
    console.log("todoform dispatch", dispatch)

    const [todoTask, setTodoTask] = useState("")

    const handleChanges = e => {
        setTodoTask(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: todoTask})
        setTodoTask("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="enter your to-do"
                // name="todoTask"
                value={todoTask}
                onChange={handleChanges}
            />
            <FontAwesomeIcon
          onClick={handleSubmit}
          id="task-icon"
          icon="plus-square"
        />
        </form>
    )
}

export default TodoForm;