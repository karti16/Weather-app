import {
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
  USER_FETCH_REQUEST,
} from './userTypes';

const initialState = {
  loading: true,
  users: [],
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };

    case USER_FETCH_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
