import React, {FC, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import WeatherDetail from './WeatherDetail';
import Header from '../components/Header';
import {generateRandomColor} from '../../utils/ColorGenerator';

const Home: FC<{gotoCityList: CallableFunction}> = ({gotoCityList}) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Header goTo={gotoCityList} />
      </View>

      <View style={styles.circleShape}>
        <FlatList
          data={items}
          keyExtractor={(item, index) => `id_${index}`}
          renderItem={({item}) => <View style={styles.circleShape} />}
        />
      </View>

      <WeatherDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    height: '25%',
    width: '100%',
  },

  circleShape: {
    width: 90,
    height: 90,
    borderRadius: 60,
    backgroundColor: generateRandomColor(),
    alignSelf: 'center',
    marginTop: -45,
  },
});

export default Home;
