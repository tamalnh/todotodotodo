import {ADD, DELETE, EDIT} from '../actions/action.types'

const initialState = [
        // {id: "1", body: "lorem ipsum dolor"},
        // {id: "2", body: "lorem ipsum dolor 2"},
        // {id: "3", body: "lorem ipsum dolor 3"},
        // {id: "4", body: "lorem ipsum dolor 4"},
        // {id: "5", body: "lorem ipsum dolor 5"},
    ]

export default function(state=initialState, action){
    switch (action.type) {
        case ADD:
            return [action.payload, ...state]
        case DELETE:
            return state.filter(todo => todo.id !== action.id)
        case EDIT:
        console.log(action.payload);
        
            return action.payload

        default:
            return state;
    }
}