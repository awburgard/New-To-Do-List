import { combineReducers } from 'redux';
import toDoList from './list.reducer';

const rootReducer = combineReducers({
    toDoList,
});

export default rootReducer;
