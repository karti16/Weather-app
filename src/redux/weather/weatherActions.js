import axios from 'axios';
import store from '../store';

import {
  WEATHER_FETCH_REQUEST,
  WEATHER_FETCH_SUCCESS,
  WEATHER_FETCH_FAILURE,
  GET_CITY_NAME,
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

export const fetchWeather = () => {
  return async (dispatch) => {
    const city = store.getState().weather.city;
    const apiKey = '73126ac7d135d02ad749e01c19c9dc4e';
    const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
    await axios
      .get(link)
      .then((response) => {
        const data = response.data;
        dispatch(weatherFetchSuccess(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(weatherFetchFailure(errorMessage));
      });
  };
};
