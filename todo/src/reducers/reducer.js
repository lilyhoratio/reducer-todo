const initialState = { todos: [] }; 

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
            return
        case 'CLEAR_COMPLETED':
            return
    }
}

export {initialState, reducer}