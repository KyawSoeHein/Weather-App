import React, {FC} from 'react';
import Home from '../view/Home';
import WeatherForecast from '../view/WeatherForecast';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';

const WeatherForecastPageController: FC = () => {
  const weatherInfoViewModel: WeatherInfoViewModel = new WeatherInfoViewModel();

  return <WeatherForecast />;
};

export default WeatherForecastPageController;
