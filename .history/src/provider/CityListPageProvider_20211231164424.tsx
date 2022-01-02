import React, {FC} from 'react';
import HomePageController from '../viewController/HomePageController';

const CityListPageProvider: FC<{navigation: any}> = ({navigation}) => {
  return <HomePageController navigation={navigation} />;
};

export default CityListPageProvider;
