import React, {FC} from 'react';
import DetailPageController from '../viewController/DetailPageController';

const DetailPageProvider: FC<{navigation: any}> = ({navigation}) => {
  return <DetailPageController navigation={navigation} />;
};

export default DetailPageProvider;
