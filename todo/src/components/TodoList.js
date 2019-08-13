import React from 'react';
import Todo from "./Todo";

const TodoList = (props) => {
    return (
            <div className="todo-list">
              <div className="todo-list-incomplete">
                <h4>To-dos</h4>
                {props.todos.map(todo => {
                  if (!todo.completed) {
                    return (
                      <Todo
                        key={todo.id}
                        todo={todo}
                        toggleItem={props.toggleItem}
                        clearCompleted={props.clearCompleted}
                        deleteItem={props.deleteItem}
                      />
                    );
                  }
                })}
              </div>
              <div className="todo-list-complete">
                <div className="todo-list-complete-header">
                  <h4>Completed</h4>
                  <button onClick={props.clearCompleted}>Clear Completed</button>
                    
                </div>
                {props.todos.map(todo => {
                  if (todo.completed) {
                    return (
                      <Todo
                        key={todo.id}
                        todo={todo}
                        toggleItem={props.toggleItem}
                        clearCompleted={props.clearCompleted}
                        deleteItem={props.deleteItem}
                      />
                    );
                  }
                })}
              </div>
            </div>
    )
}

export default TodoList
