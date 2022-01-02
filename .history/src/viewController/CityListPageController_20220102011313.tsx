import React, {FC} from 'react';
import CityList from '../view/CityList';
import CityListViewModel from '../viewModel/CityListViewModel';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';

const CityListPageController: FC<{
  navigation: any;
  cityViewModel: CityListViewModel;
}> = ({navigation, cityViewModel}) => {
  function _goToHomePage() {
    navigation.navigate('Home');
  }

  return (
    <CityList
      goToHomePage={_goToHomePage}
      detailDate={cityViewModel.getWeatherDetail()}
    />
  );
};

export default CityListPageController;
