import React, {FC} from 'react';
import HomePageController from '../viewController/HomePageController';

const WeatherForecastProvider: FC<{navigation: any}> = ({navigation}) => {
  return <HomePageController navigation={navigation} />;
};

export default WeatherForecastProvider;
