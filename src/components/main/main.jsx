import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux';

const Main = () => {
  const KELVIN = 273.15;
  const loading = useSelector((state) => state.weather.loading);
  const city = useSelector((state) => state.weather.city);
  const cityData = useSelector((state) => state.weather.cityData);
  const error = useSelector((state) => state.weather.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {cityData && (
        <>
          <div>{cityData.main.temp - KELVIN}</div>
          <div>{cityData.name}</div>
        </>
      )}
    </>
  );
};

export default Main;
