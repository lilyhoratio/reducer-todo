// best for this to be an object because the state keeps track of disparate data points throughout your app. 
// for example, if you want to keep track of todoCount, you could add that as another key/value pair in your initialState.
const initialState = { todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }] }; 

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                  ...state.todos,
                  { item: action.payload, completed: false, id: Date.now() }
                ]
              };
        case 'TOGGLE_TODO':
            return {
                ...state,
                // todos : state.todos.map(todo => todo.id === action.id ? !todo.completed : todo )
                todos : state.todos.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed} : todo )
                // todo.id is id of to do you click on / action.id is payload's id
            }
        // case 'DELETE_TODO':
        //     return {
        //         ...state,
        //         todos: 
        //     }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                // filter is what you keep
                todos: state.todos.filter(todo => !todo.completed)
            }
        default: 
            return state;
    }
}

export {initialState, reducer}