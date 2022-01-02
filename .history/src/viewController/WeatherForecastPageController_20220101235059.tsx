import React, {FC} from 'react';
import Home from '../view/Home';
import WeatherForecast from '../view/WeatherForecast';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';

const WeatherForecastPageController: FC<{
  navigation: any;
  infoViewModel: WeatherInfoViewModel;
}> = observer(({navigation, infoViewModel}) => {
  const weatherInfoViewModel: WeatherInfoViewModel = infoViewModel;

  function _goToCityList() {
    navigation.navigate('CityList');
  }

  return (
    <Home
      gotoCityList={_goToCityList}
      detailData={weatherInfoViewModel.getWeatherDetail()}
    />
  );
});

export default WeatherForecastPageController;
