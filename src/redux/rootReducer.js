import { combineReducers } from 'redux';
import { weatherReducer } from './weather/weatherReducer';

const rootReducers = combineReducers({
  weather: weatherReducer,
});

export default rootReducers;
