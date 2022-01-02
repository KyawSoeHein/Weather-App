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
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = Dimensions.get('screen').height * 0.55;

  const [cityName, setCityName] = useState('');
  const [currentScreen, setCurrentScreen] = useState(1);

  const onViewRef = React.useRef((viewableItems: any) => {
    const item: WeatherDetailDao = viewableItems.viewableItems[0]?.item;
    setCityName(item.name);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={list}
        showsVerticalScrollIndicator={false}
        scrollEnabled={currentScreen == 0}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        pagingEnabled
        snapToInterval={ITEM_SIZE}
        data={detailData}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => `id_${index}`}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item, index}) => {
          const inputRange = [0, ITEM_SIZE * index, ITEM_SIZE * index + 1];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 0.5, 1],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
            // style={{
            //   transform: [
            //     {
            //       scale: scale,
            //     },
            //   ],
            // }}
            >
              <Text style={styles.cityName}>{'cityName'}</Text>

              <Text
                style={{color: 'black', alignSelf: 'center', marginTop: 16}}>
                This is indicator
              </Text>

              <PagerView
                onPageScroll={() =>
                  Animated.event(
                    [
                      {
                        nativeEvent: {
                          contentOffset: {
                            x: scrollX,
                          },
                        },
                      },
                    ],
                    {useNativeDriver: true},
                  )
                }
                style={{
                  height: 350,
                  backgroundColor: 'green',
                  marginTop: 16,
                }}
                initialPage={0}
                onPageSelected={value =>
                  setCurrentScreen(value.nativeEvent.position)
                }>
                <View key="1" style={{paddingBottom: 16}}>
                  {/* <WeatherDetailView item={item} /> */}
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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
  },

  icon: {
    width: 24,
    height: 24,
  },

  detail: {
    alignItems: 'center',
  },

  pagerView: {
    marginTop: 16,
    marginBottom: 60,
    backgroundColor: 'green',
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
