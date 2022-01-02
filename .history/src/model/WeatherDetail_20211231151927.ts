class WeatherDetail {
  constructor() {}

  callWeatherDetailApi() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?id=1006984&appid=00d3701186a5905b85a621301eee5efb',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstParam: 'yourValue',
          secondParam: 'yourOtherValue',
        }),
      },
    );
  }
}

export default WeatherDetail;

1006984;
