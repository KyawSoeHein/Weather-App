import React, {FC} from 'react';
import CityListPageController from '../viewController/CityListPageController';
import CityListViewModel from '../viewModel/CityListViewModel';

const CityListPageProvider: FC<{navigation: any}> = ({navigation}) => {
  cityListViewModel: CityListViewModel;

  return <CityListPageController navigation={navigation} />;
};

export default CityListPageProvider;
