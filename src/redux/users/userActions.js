import axios from 'axios';
import {
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
  USER_FETCH_REQUEST,
} from './userTypes';

export const fetchUsersRequest = () => {
  return {
    type: USER_FETCH_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: USER_FETCH_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUsersFailure(errorMessage));
      });
  };
};
