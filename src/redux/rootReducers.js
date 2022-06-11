import cakeReducer from './cake/cakeReducer';
import { combineReducers } from 'redux';
import iceCreamReducer from './iceCream/iceCreamReducer';
import addTodoReducer from './todo/todoReducers';
import userReducer from './users/userReducers';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  todo: addTodoReducer,
  user: userReducer,
});

export default rootReducer;
