import { ADD_TODO } from './totoTypes';

export const addTodo = (todoItem) => {
  return {
    type: ADD_TODO,
    payload: todoItem,
  };
};
