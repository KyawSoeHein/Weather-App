import React, {FC} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import PagerView from 'react-native-pager-view';

const WeatherDetail: FC = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={styles.container}>
      <FlatList
        viewabilityConfig={{itemVisiblePercentThreshold: 90}}
        pagingEnabled={true}
        decelerationRate={'fast'}
        data={items}
        keyExtractor={(item, index) => `id_${index}`}
        renderItem={({item}) => (
          <PagerView style={styles.pagerView} initialPage={0}>
            <View key="1">
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
                  }}>
                  35 F
                </Text>

                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: '200',
                    marginTop: 8,
                  }}>
                  Snow Showers
                </Text>

                <Text style={{fontSize: 16, fontWeight: '400'}}>35 .C 24.</Text>
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
                  <Text>100%</Text>
                </View>

                <View style={styles.detail}>
                  <Image
                    source={require('../../icons/water_drop.png')}
                    style={styles.icon}
                  />
                  <Text>77%</Text>
                </View>

                <View style={styles.detail}>
                  <Image
                    source={require('../../icons/air_icon.png')}
                    style={styles.icon}
                  />
                  <Text>5 mph</Text>
                </View>
              </View>
            </View>
            <View key="2">
              <Text>Second page</Text>
            </View>
          </PagerView>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
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
    height: Dimensions.get('screen').height * 0.4,
  },
});

export default WeatherDetail;
