import React, {FC} from 'react';
import CityListViewModel from '../viewModel/CityListViewModel';

const CityListPageController: FC<{navigation: any}> = ({navigation}) => {
  return <Home navigation={navigation} />;
};

export default HomePageController;
