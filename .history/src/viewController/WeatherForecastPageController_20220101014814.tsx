import React, {FC} from 'react';
import Home from '../view/Home';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';

const WeatherForecastPageController: FC<{navigation: any}> = ({navigation}) => {
  const weatherInfoViewModel: WeatherInfoViewModel = new WeatherInfoViewModel();

  function _goToCityList() {
    navigation.navigate('CityList');
  }

  return <Home gotoCityList={_goToCityList} />;
};

export default WeatherForecastPageController;
