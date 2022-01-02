import React, {FC, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Indicator from '../components/Indicator';
import WeatherForecast from './WeatherForecast';

const WeatherDetail: FC<{changeAvatar: CallableFunction}> = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [currentScreen, setCurrentScreen] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>New Yorks</Text>
      <Indicator />
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={currentScreen == 0}
        style={{marginTop: 36}}
        pagingEnabled
        snapToInterval={Dimensions.get('screen').height * 0.5 + 60}
        data={items}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => `id_${index}`}
        renderItem={({item}) => (
          <PagerView
            style={styles.pagerView}
            initialPage={0}
            onPageSelected={value =>
              setCurrentScreen(value.nativeEvent.position)
            }>
            <View key="1" style={{paddingBottom: 16}}>
              <WeatherDetailView />
            </View>
            <View key="2">
              <WeatherForecast />
            </View>
          </PagerView>
        )}
      />
    </View>
  );
};

const WeatherDetailView: FC = () => {
  return (
    <View
      style={{
        // backgroundColor: 'green',
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

        <Text
          style={{
            fontSize: Dimensions.get('screen').width * 0.3,
            fontWeight: '100',
            color: 'black',
            marginTop: 16,
          }}>
          35 &deg;F
        </Text>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '200',
              // marginTop: 8,
              color: 'black',
            }}>
            Snow Showers
          </Text>

          <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
            35 &deg; 24 &deg;
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
          <Text style={{color: 'black'}}>100%</Text>
        </View>

        <View style={styles.detail}>
          <Image
            source={require('../../icons/water_drop.png')}
            style={styles.icon}
          />
          <Text style={{color: 'black'}}>77%</Text>
        </View>

        <View style={styles.detail}>
          <Image
            source={require('../../icons/air_icon.png')}
            style={styles.icon}
          />
          <Text style={{color: 'black'}}>5 mph</Text>
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
    height: Dimensions.get('screen').height * 0.5,
  },

  cityName: {
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 24,
    color: 'black',
  },
});

export default WeatherDetail;
