import { ADD_TODO } from './totoTypes';

const initialState = {
  todoList: ['Learn React', 'Learn Redux', 'Build something fun!'],
};

const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload),
      };
    default:
      return state;
  }
};

export default addTodoReducer;
