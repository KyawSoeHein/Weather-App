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
// import Indicator from '../components/Indicator';
import WeatherDetailDao from '../Dao/WeatherDetailDao';
import WeatherForecastDao from '../Dao/WeatherForecastDao';
import WeatherForecast from './WeatherForecast';

const WeatherDetail: FC<{
  changeAvatar: CallableFunction;
  detailData: Array<WeatherDetailDao>;
  forecastData: Array<WeatherForecastDao>;
}> = ({changeAvatar, detailData, forecastData}) => {
  const list: any = useRef();
  const windowWidth = Dimensions.get('window').width;

  const [cityName, setCityName] = useState('');
  const [currentScreen, setCurrentScreen] = useState(1);

  const onViewRef = React.useRef((viewableItems: any) => {
    const item: WeatherDetailDao = viewableItems.viewableItems[0]?.item;
    setCityName(item.name);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View style={styles.container}>
      <FlatList
        ref={list}
        showsVerticalScrollIndicator={false}
        scrollEnabled={currentScreen == 0}
        style={{marginTop: 36}}
        pagingEnabled
        snapToInterval={Dimensions.get('screen').height * 0.55 + 60}
        data={detailData}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => `id_${index}`}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item, index}) => (
          <View>
            <Text style={styles.cityName}>{'cityName'}</Text>

            <PagerView
              onPageScroll={}
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
          </View>
             <View style={styles.indicatorContainer}>
             {[1, 2].map((image, imageIndex) => {
               const width = scrollX.interpolate({
                 inputRange: [
                   windowWidth * (imageIndex - 1),
                   windowWidth * imageIndex,
                   windowWidth * (imageIndex + 1),
                 ],
                 outputRange: [8, 16, 8],
                 extrapolate: 'clamp',
               });
               return (
                 <Animated.View
                   key={imageIndex}
                   style={[styles.normalDot, {width}]}
                 />
               );
             })}
           </View>
        )}
      />
    </View>
  );
};

const WeatherDetailView: FC<{item: WeatherDetailDao}> = ({item}) => {
  if (item == undefined || item.weather == undefined) {
    return <Text>There is no data</Text>;
  }

  return (
    <View
      style={{
        justifyContent: Platform.OS == 'ios' ? 'space-between' : 'space-around',
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
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
            {Math.round(item?.main?.temp)}
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
            {item?.weather[0]?.description}
          </Text>

          <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
            {Math.round(item?.main?.temp_max)} &deg;{' '}
            {Math.round(item?.main?.temp_min)} &deg;
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
    marginBottom: 60,
    height: Dimensions.get('screen').height * 0.55,
  },

  cityName: {
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 24,
    color: 'black',
  },

  bottomText: {color: 'black', marginTop: 4},

  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WeatherDetail;
function changeCityName(name: any, string: any) {
  throw new Error('Function not implemented.');
}
