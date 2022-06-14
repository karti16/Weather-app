import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux';
import t from 'typy';

const Main = () => {
  const KELVIN = 273.15;
  const loading = useSelector((state) => state.weather.loading);
  const city = useSelector((state) => state.weather.city);
  const cityData = useSelector((state) => state.weather.cityData);
  console.log(getNestedObject(cityData, ['main', 'temp']));
  const error = useSelector((state) => state.weather.error);
  const myObj = t(cityData, 'main.temp').safeObject;
  console.log('t', myObj);
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
          <div>{cityData.name}</div>
        </>
      )}
    </>
  );
};

const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
    nestedObj
  );
};

export default Main;
