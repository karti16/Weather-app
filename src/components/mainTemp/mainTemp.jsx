import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux';
import t from 'typy';
import styles from './mainTemp.module.scss';
import moment from 'moment';
import getCityName from '../utilities/getCityTime';

const MainTemp = () => {
  const KELVIN = 273.15;
  const loading = useSelector((state) => state.weather.loading);
  const city = useSelector((state) => state.weather.city);
  const cityData = useSelector((state) => state.weather.cityData);
  const error = useSelector((state) => state.weather.error);

  const temp = t(cityData, 'main.temp').safeObject - KELVIN;
  const weatherIcon = t(cityData, 'weather[0].icon').safeObject;
  const weatherDescription = t(cityData, 'weather[0].description').safeObject;
  const date = moment(getCityName(cityData)).format("LT - ddd, d MMM 'YY");
  console.log();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.weatherIcon}>
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt=""
          />
          <p>{weatherDescription}</p>
        </div>
        <div className={styles.tempBox}>
          <div className={styles.temp}>{temp.toFixed(0)}&#xb0;</div>
          <div className={styles.tempDetails}>
            <div className={styles.cityName}>{cityData.name}</div>
            <div className={styles.date}>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTemp;
