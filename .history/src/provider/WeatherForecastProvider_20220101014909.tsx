import React, {FC} from 'react';
import HomePageController from '../viewController/HomePageController';
import WeatherForecastPageController from '../viewController/WeatherForecastPageController';

const WeatherForecastProvider: FC<{navigation: any}> = ({navigation}) => {
  return <WeatherForecastPageController navigation={navigation} />;
};

export default WeatherForecastProvider;
