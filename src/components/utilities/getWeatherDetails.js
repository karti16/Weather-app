import t from 'typy';

const getWeatherDetails = (cityData) => {
  const weatherDetails = [
    { id: '1', name: 'wind', value: t(cityData, 'wind.speed').safeObject },
    {
      id: '2',
      name: 'humidity',
      value: t(cityData, 'main.humidity').safeObject,
    },
    {
      id: '3',
      name: 'cloud',
      value: `${t(cityData, 'clouds.all').safeObject} m/s`,
    },
    { id: '4', name: 'rain', value: t(cityData, 'rain.1h').safeObject },
  ];

  return weatherDetails;
};

export default getWeatherDetails;
