import React, {FC} from 'react';
import Home from '../view/Home';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';

const HomePageController: FC<{navigation: any}> = ({navigation}) => {
  const weatherInfoViewModel: WeatherInfoViewModel = new WeatherInfoViewModel();

  return <Home navigation={navigation} />;
};

export default HomePageController;
