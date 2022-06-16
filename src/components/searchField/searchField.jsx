import { useState } from 'react';
import styles from './searchField.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, getCityName } from '../../redux/weather/weatherActions';
import { FiSearch } from 'react-icons/fi';
import { updateRecentSearch } from '../../redux/weather/weatherActions';

const SearchField = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const cityData = useSelector((state) => state.weather.cityData);
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getCityName(city));
    dispatch(fetchWeather());
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchArea}
        type="text"
        placeholder="Search city"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>
      <a
        href="#"
        onClick={(e) => {
          if (city.trim() != '') {
            e.preventDefault();
            handleSearch(e);
          }
        }}
      >
        <FiSearch />
      </a>
    </div>
  );
};

export default SearchField;
