import { combineReducers } from 'redux';
import reducerTodo from './redcer.todo'

const rootReducer = combineReducers({
    todo: reducerTodo
})


export default rootReducer;