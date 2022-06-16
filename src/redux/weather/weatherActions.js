import axios from 'axios';
import store from '../store';
import t from 'typy';
import {
  WEATHER_FETCH_REQUEST,
  WEATHER_FETCH_SUCCESS,
  WEATHER_FETCH_FAILURE,
  GET_CITY_NAME,
  UPDATE_RECENT_SEARCH,
} from './weatherTypes';

export const getCityName = (city) => {
  return {
    type: GET_CITY_NAME,
    payload: city,
  };
};

export const weatherFetchRequest = () => {
  return {
    type: WEATHER_FETCH_REQUEST,
  };
};

export const weatherFetchSuccess = (weatherData) => {
  return {
    type: WEATHER_FETCH_SUCCESS,
    payload: weatherData,
  };
};

export const weatherFetchFailure = (error) => {
  return {
    type: WEATHER_FETCH_FAILURE,
    payload: error,
  };
};

export const updateRecentSearch = (city) => {
  return {
    type: UPDATE_RECENT_SEARCH,
    payload: city,
  };
};

export const fetchWeather = () => {
  return async (dispatch) => {
    const city = store.getState().weather.city;
    const recentList = store.getState().weather.recentSearch;
    const apiKey = '73126ac7d135d02ad749e01c19c9dc4e';
    const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
    await axios
      .get(link)
      .then((response) => {
        const data = response.data;
        const cityName = t(data, 'name').safeObject;
        dispatch(weatherFetchSuccess(data));

        if (!recentList.includes(city)) {
          dispatch(updateRecentSearch(cityName));
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(weatherFetchFailure(errorMessage));
      });
  };
};
