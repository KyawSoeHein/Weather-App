import React, {FC} from 'react';
import HomePageController from '../viewController/HomePageController';

const HomePageProvider: FC<{navigation: any}> = ({navigation}) => {
  function _goToCityList() {
    navigation.navigate('CityList');
  }

  return (
    <HomePageController navigation={navigation} gotoCityList={_goToCityList} />
  );
};

export default HomePageProvider;
