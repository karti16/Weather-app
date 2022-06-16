import {
  WEATHER_FETCH_REQUEST,
  WEATHER_FETCH_SUCCESS,
  WEATHER_FETCH_FAILURE,
  GET_CITY_NAME,
  UPDATE_RECENT_SEARCH,
} from './weatherTypes';

const initialState = {
  loading: false,
  city: 'avadi',
  cityData: [],
  error: '',
  recentSearch: ['avadi', 'london', 'chennai', 'new york', 'tokyo'],
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_NAME:
      return {
        ...state,
        city: action.payload,
      };
      break;

    case UPDATE_RECENT_SEARCH:
      return {
        ...state,
        recentSearch: [action.payload, ...state.recentSearch.slice(0, -1)],
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
