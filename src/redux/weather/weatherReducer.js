import {
  WEATHER_FETCH_REQUEST,
  WEATHER_FETCH_SUCCESS,
  WEATHER_FETCH_FAILURE,
  GET_CITY_NAME,
} from './weatherTypes';

const initialState = {
  loading: false,
  city: 'avadi',
  cityData: {},
  error: '',
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_NAME:
      return {
        ...state,
        city: action.payload,
      };
      break;
    case WEATHER_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;

    case WEATHER_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        cityData: action.payload,
        error: '',
      };
      break;

    case WEATHER_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        cityData: {},
        error: action.payload,
      };
      break;

    default:
      return state;
  }
};
