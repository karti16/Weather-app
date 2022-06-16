import styles from './detailsTemp.module.scss';
import getWeatherDetails from '../utilities/getWeatherDetails';
import { useDispatch, useSelector } from 'react-redux';
import SearchField from '../searchField/searchField';
import { fetchWeather, getCityName } from '../../redux/weather/weatherActions';

const DetailsTemp = () => {
  const dispatch = useDispatch();
  const cityData = useSelector((state) => state.weather.cityData);
  const recentSearch = useSelector((state) => state.weather.recentSearch);
  const weatherDetails = cityData && getWeatherDetails(cityData);

  return (
    <>
      <div className={styles.detailsContainer}>
        <SearchField />
        <ul>
          <p>Recent Searches</p>
          {recentSearch.map((item) => {
            return (
              <li
                key={item}
                className={styles.details}
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
      </div>
    </>
  );
};

export default DetailsTemp;
