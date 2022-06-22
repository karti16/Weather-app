import styles from './detailsTemp.module.scss';
import getWeatherDetails from '../utilities/getWeatherDetails';
import { useDispatch, useSelector } from 'react-redux';
import SearchField from '../searchField/searchField';
import { fetchWeather, getCityName } from '../../redux/weather/weatherActions';
import MainTemp from '../mainTemp/mainTemp';
import { useEffect } from 'react';

const DetailsTemp = () => {
  const dispatch = useDispatch();
  const cityData = useSelector((state) => state.weather.cityData);
  const recentSearch = useSelector((state) => state.weather.recentSearch);
  const weatherDetails = cityData && getWeatherDetails(cityData);
  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     if (window.innerWidth < 991) {
  //     } else {
  //     }
  //     console.log(window.innerWidth);
  //   });
  // }, []);
  return (
    <>
      <div className={styles.detailsContainer}>
        <SearchField />
        {recentList(recentSearch, dispatch)}
        {weatherDetailsList(weatherDetails)}
      </div>
    </>
  );
};

const weatherDetailsList = (weatherDetails) => {
  return (
    <ul>
      <p>Weather Details</p>
      {weatherDetails.map((item) => {
        return (
          <li key={item.id} className={styles.details}>
            <div>{item.name}</div>
            <div>{item.value == undefined ? '-' : item.value}</div>
          </li>
        );
      })}
    </ul>
  );
};

const recentList = (recentSearch, dispatch) => {
  return (
    <ul>
      <p>Recent Searches</p>
      {recentSearch.map((item) => {
        return (
          <li
            key={item}
            className={`${styles.details} ${styles.recentCity}`}
            onClick={(e) => {
              console.log(e);
              e.preventDefault();
              dispatch(getCityName(e.target.textContent));
              dispatch(fetchWeather());
            }}
          >
            <div>{item}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default DetailsTemp;
