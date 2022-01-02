import React, {FC} from 'react';
import CityList from '../view/CityList';
import CityListViewModel from '../viewModel/CityListViewModel';

const CityListPageController: FC<{
  navigation: any;
  cityViewModel: CityListViewModel;
}> = ({navigation, cityViewModel}) => {
  const cityListViewModel: CityListViewModel = cityViewModel;

  function _goToHomePage() {
    navigation.navigate('Home');
  }

  return (
    <CityList
      goToHomePage={_goToHomePage}
      detailDate={cityListViewModel.getWeatherDetail()}
    />
  );
};

export default CityListPageController;
