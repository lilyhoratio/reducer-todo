import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/reducer'

const TodoForm = props => {

    const [todoTask, setTodoTask] = useState("")
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = e => {
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="enter your to-do"
            
            />
        </form>
    )
}

export default TodoForm;