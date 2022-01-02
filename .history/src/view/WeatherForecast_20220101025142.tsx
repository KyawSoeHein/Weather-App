import React, {FC} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  Text,
  Image,
} from 'react-native';

const WeatherForecast: FC = () => {
  const items = [1, 2, 3, 4, 5];

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'space-between',
  },

  itemView: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dateTextStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },

  dateNumTextStyle: {
    fontWeight: '300',
    fontSize: 14,
    color: 'black',
  },
});

export default WeatherForecast;
