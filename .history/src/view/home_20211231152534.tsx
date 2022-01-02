import React, {FC, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import WeatherDetail from './WeatherDetail';
import WeatherDetailApi from '../model/WeatherDetailApi';

const Home: FC<{navigation: any}> = ({navigation}) => {
  function _goToCityList() {
    navigation.navigate('CityList');

    const weatherDetailApi = new WeatherDetailApi();

    weatherDetailApi.callWeatherDetailApi();
  }

  return (
    <View style={{flex: 1, marginBottom: 24}}>
      <View style={styles.header}>
        <SafeAreaView
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              _goToCityList();
            }}>
            <Image
              source={require('../../icons/burger_menu.png')}
              style={styles.drawerIcon}
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>cliMate</Text>

          <Image
            source={require('../../icons/search_icon.png')}
            style={styles.drawerIcon}
          />
        </SafeAreaView>
      </View>

      <View style={styles.circleShape}></View>

      <Text style={styles.cityName}>New Yorks</Text>

      <WeatherDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: '25%',
    width: '100%',
  },

  drawerIcon: {
    width: 24,
    height: 24,
  },

  headerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  circleShape: {
    width: 90,
    height: 90,
    borderRadius: 60,
    backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: -45,
  },

  cityName: {
    alignSelf: 'center',
    marginTop: 24,
  },
});

export default Home;
