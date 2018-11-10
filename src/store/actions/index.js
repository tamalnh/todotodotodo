import {ADD, DELETE, EDIT} from './action.types';

export function addTodo (data){
console.log(data);

    return{
        type: ADD,
        payload: data
    }
}

export function deleteTodo (id){ 
    
    return {
        type: DELETE,
        id: id
    }
}

export function updateTodo (updatedList){
    return {
        type: EDIT,
        payload: updatedList
    }
}