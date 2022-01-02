import React, {FC, useEffect} from 'react';
import Home from '../view/Home';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';

const HomePageController: FC<{navigation: any}> = ({navigation}) => {
  const weatherInfoViewModel: WeatherInfoViewModel = new WeatherInfoViewModel();

  function _goToCityList() {
    navigation.navigate('CityList');
  }

  useEffect(() => {
    console.log('data is Control');
    console.log(weatherInfoViewModel.getWeatherDetail());
  }, [weatherInfoViewModel.getWeatherDetail()]);

  return (
    <Home
      gotoCityList={_goToCityList}
      detailData={weatherInfoViewModel.getWeatherDetail()}
    />
  );
};

export default HomePageController;
