// import {useReducer} from 'react';

const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
},
{
    item: 'Learn more',
    completed: false,
    id: 3892987590
}]

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return true
        case 'TOGGLE_TODO':
            return
        case 'CLEAR_COMPLETED':
            return true
    }
}

export {initialState, reducer}