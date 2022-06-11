import cakeReducer from './cake/cakeReducer';
import { combineReducers } from 'redux';
import iceCreamReducer from './iceCream/iceCreamReducer';
import addTodoReducer from './todo/todoReducers';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  todo: addTodoReducer,
});

export default rootReducer;
