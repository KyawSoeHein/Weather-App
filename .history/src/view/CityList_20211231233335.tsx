import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const CityList: FC<{gotoCityList: CallableFunction}> = ({gotoCityList}) => {
  return (
    <View style={styles.container}>
      <Header gotoCityList={gotoCityList} route={'Home'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CityList;
