import {transform} from '@babel/core';
import React, {FC, Ref, useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Platform,
  Animated,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Indicator from '../components/Indicator';
import WeatherDetailDao from '../Dao/WeatherDetailDao';
import WeatherForecastDao from '../Dao/WeatherForecastDao';
import WeatherForecast from './WeatherForecast';

const WeatherDetail: FC<{
  changeAvatar: CallableFunction;
  detailData: Array<WeatherDetailDao>;
  forecastData: Array<WeatherForecastDao>;
}> = ({changeAvatar, detailData, forecastData}) => {
  const [cityName, setCityName] = useState('');
  const [currentScreen, setCurrentScreen] = useState(1);
  const ITEM_SIZE = detailData.length;

  const onViewRef = React.useRef((viewableItems: any) => {
    const item: WeatherDetailDao = viewableItems.viewableItems[0]?.item;
    setCityName(item.name);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        showsVerticalScrollIndicator={false}
        scrollEnabled={currentScreen == 0}
        pagingEnabled
        snapToInterval={Dimensions.get('screen').height * 0.65 + 30}
        data={detailData}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => `id_${index}`}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item, index}) => {
          const inputRange = [0, 1];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1],
          });

          return (
            <Animated.View style={{transform: [{scale: scale}]}}>
              <PagerView
                style={styles.pagerView}
                initialPage={0}
                onPageSelected={value =>
                  setCurrentScreen(value.nativeEvent.position)
                }>
                <View key="1" style={{paddingBottom: 16}}>
                  <WeatherDetailView item={item} />
                </View>
                <View key="2">
                  <WeatherForecast forecastData={forecastData[index]} />
                </View>
              </PagerView>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

const WeatherDetailView: FC<{item: WeatherDetailDao}> = ({item}) => {
  return (
    <View
      style={{
        justifyContent: Platform.OS == 'ios' ? 'space-between' : 'space-around',
        flex: 1,
      }}>
      <Text style={styles.cityName}>{item.name}</Text>
      <Indicator />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 1,
          marginTop: 32,
        }}>
        <Image
          source={require('../../icons/snow_icon.png')}
          style={{width: 48, height: 48}}
        />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: Dimensions.get('screen').width * 0.3,
              fontWeight: '100',
              color: 'black',
              marginTop: 16,
            }}>
            {Math.round(item.main.temp)}
          </Text>
          <Text
            style={{
              fontSize: Dimensions.get('screen').width * 0.1,
              fontWeight: '100',
              color: 'black',
              marginTop: -35,
            }}>
            &deg;C
          </Text>
        </View>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '200',
              color: 'black',
            }}>
            {item.weather[0]?.description}
          </Text>

          <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
            {Math.round(item.main.temp_max)} &deg;{' '}
            {Math.round(item.main.temp_min)} &deg;
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 32,
          flexDirection: 'row',
          marginHorizontal: 30,
          justifyContent: 'space-between',
        }}>
        <View style={styles.detail}>
          <Image
            source={require('../../icons/umbrella.png')}
            style={styles.icon}
          />
          <Text style={styles.bottomText}>{Math.round(item.clouds.all)}%</Text>
        </View>

        <View style={styles.detail}>
          <Image
            source={require('../../icons/water_drop.png')}
            style={styles.icon}
          />
          <Text style={styles.bottomText}>
            {Math.round(item.main.humidity)}%
          </Text>
        </View>

        <View style={styles.detail}>
          <Image
            source={require('../../icons/air_icon.png')}
            style={styles.icon}
          />
          <Text style={styles.bottomText}>
            {Math.round(item.wind.speed)} mph
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'space-between',
  },

  icon: {
    width: 24,
    height: 24,
  },

  detail: {
    alignItems: 'center',
  },

  pagerView: {
    marginBottom: 30,
    height: Dimensions.get('screen').height * 0.65,
  },

  cityName: {
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 24,
    color: 'black',
  },

  bottomText: {color: 'black', marginTop: 4},
});

export default WeatherDetail;
function changeCityName(name: any, string: any) {
  throw new Error('Function not implemented.');
}
