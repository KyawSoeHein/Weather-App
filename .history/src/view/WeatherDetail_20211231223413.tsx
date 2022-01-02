import React, {FC} from 'react';
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

const WeatherDetail: FC = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled
        snapToInterval={Dimensions.get('screen').height * 0.65}
        data={items}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => `id_${index}`}
        renderItem={({item}) => (
          // <PagerView style={styles.pagerView} initialPage={0}>
          <View style={styles.pagerView}>
            <WeatherDetailView />
          </View>
          // <View key="2">
          //   <Text>Second page</Text>
          // </View>
          // </PagerView>
        )}
      />
    </View>
  );
};

const WeatherDetailView: FC = () => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flex: 1,
      }}>
      <Text style={styles.cityName}>New Yorks</Text>

      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../icons/snow_icon.png')}
          style={{width: 48, height: 48}}
        />

        <Text
          style={{
            fontSize: 80,
            fontWeight: '200',
            marginTop: 8,
            color: 'black',
          }}>
          35 F
        </Text>

        <Text
          style={{
            fontSize: 24,
            fontWeight: '200',
            marginTop: 8,
            color: 'black',
          }}>
          Snow Showers
        </Text>

        <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
          35 .C 24.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 48,
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
  },

  icon: {
    width: 24,
    height: 24,
  },

  detail: {
    alignItems: 'center',
  },

  pagerView: {
    paddingBottom: 16,
    marginBottom: 30,
    height: Dimensions.get('screen').height * 0.65,
  },

  cityName: {
    alignSelf: 'center',
    marginTop: 24,
    color: 'black',
  },
});

export default WeatherDetail;
