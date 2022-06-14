import { useState } from 'react';
import styles from './searchField.module.scss';
import { useDispatch } from 'react-redux';
import { fetchWeather, getCityName } from '../../redux/weather/weatherActions';

const SearchField = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getCityName(city));
    dispatch(fetchWeather());
  };

  return (
    <div className={styles.nav}>
      <input
        className=""
        type="text"
        placeholder="Search city"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        onClick={(e) => {
          if (city.trim() != '') {
            handleSearch(e);
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
