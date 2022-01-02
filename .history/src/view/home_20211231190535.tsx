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
import PagerView from 'react-native-pager-view';

const Home: FC<{gotoCityList: CallableFunction}> = ({gotoCityList}) => {
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

      <Text style={styles.cityName}>New Yorks</Text>

      <PagerView style={styles.pagerView} initialPage={0}>
        <View key="1">
          <WeatherDetail />
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
      </PagerView>
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

  pagerView: {
    flex: 1,
  },
});

export default Home;
