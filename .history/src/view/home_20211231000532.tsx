import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import WeatherDetail from './WeatherDetail';

const Home: FC = () => {
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
          <Image
            source={require('../../icons/burger_menu.png')}
            style={styles.drawerIcon}
          />

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
