import { useEffect, useState } from 'react';

const Main = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const place = 'chennai';
  const apiKey = '73126ac7d135d02ad749e01c19c9dc4e';
  const link = `http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${apiKey}`;

  useEffect(() => {
    fetch(link)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setError(null);
        setWeatherData(data);
      })
      .catch((err) => {
        setWeatherData(null);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {weatherData && (
        <>
          <div>{weatherData.name}</div>
          <div>{weatherData.main.temp - 273.15}</div>
        </>
      )}
    </>
  );
};

export default Main;
