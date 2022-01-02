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
import Header from '../components/Header';

const Home: FC<{gotoCityList: CallableFunction}> = ({gotoCityList}) => {
  return (
    <View style={{flex: 1}}>
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
              gotoCityList();
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

  circleShape: {
    width: 90,
    height: 90,
    borderRadius: 60,
    backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: -45,
  },
});

export default Home;
