const getCityName = (cityData) => {
  let d = new Date(); //Thu Jun 16 2022 12:44:57 GMT+0530 (India Standard Time)  creates a new date object with the current date and time:
  let localTime = d.getTime(); //1655363697564  number of milliseconds since January 1, 1970 00:00:00.
  let localOffset = d.getTimezoneOffset() * 60000; //-19800000  returns the difference between UTC time and local time. in minutes.
  let utc = localTime + localOffset; //1655343992533
  let newTime = utc + 1000 * cityData.timezone; //1655363818116

  return new Date(newTime); //Thu Jun 16 2022 12:47:12 GMT+0530 (India Standard Time)
};

export default getCityName;
