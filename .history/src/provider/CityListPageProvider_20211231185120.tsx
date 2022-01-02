import React, {FC} from 'react';
import CityListPageController from '../viewController/CityListPageController';
import CityListViewModel from '../viewModel/CityListViewModel';

const CityListPageProvider: FC = () => {
  cityListViewModel: CityListViewModel;

  return <CityListPageController />;
};

export default CityListPageProvider;
