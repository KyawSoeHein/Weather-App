import React, {FC, useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Header from '../components/Header';
import {generateRandomColor} from '../../utils/ColorGenerator';
import WeatherDetailDao from '../Dao/WeatherDetailDao';
import {transform} from '@babel/core';

const CityList: FC<{
  goToHomePage: CallableFunction;
  detailDate: Array<WeatherDetailDao>;
}> = ({goToHomePage, detailDate}) => {
  return (
    <View style={styles.container}>
      <Header goTo={goToHomePage} tint={true} />

      <FlatList
        style={{marginTop: 30, marginHorizontal: 16}}
        data={detailDate}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => {
          return `id_${index}`;
        }}
        renderItem={({item, index}) => <CityListView item={item} />}
      />
    </View>
  );
};

const CityListView: FC<{item: WeatherDetailDao}> = ({item}) => {
  const [animatedItem, setAnimatedItem] = useState(new Animated.Value(0));

  let randomColor: string;
  function getColor() {
    randomColor = generateRandomColor();
  }

  useEffect(() => {
    Animated.timing(animatedItem, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      delay: 100,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.itemView,
        {
          transform: [
            {
              translateX: animatedItem.interpolate({
                inputRange: [0, 1],
                outputRange: [-Dimensions.get('screen').width, 1],
              }),
            },
          ],
        },
      ]}>
      <Text style={styles.degreeTextStyle}>{Math.round(item.main.temp)}</Text>
      <View style={styles.degreeIconStyle} />
      <View style={{justifyContent: 'flex-end', marginBottom: 11}}>
        <Text style={styles.cityTextStyle}>{item.name}</Text>
        <Text style={styles.weatherStatusStyle}>{item.name}</Text>
      </View>
      {getColor()}
      <View
        style={[
          styles.cardViewStyle,
          {
            shadowColor: randomColor,
          },
        ]}>
        <Image
          source={require('../../icons/cloud_icon.png')}
          style={{width: 24, height: 24, tintColor: randomColor}}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemView: {
    marginBottom: 24,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  degreeTextStyle: {
    fontSize: 60,
    width: 70,
    color: 'black',
    fontWeight: '100',
  },

  degreeIconStyle: {
    marginTop: Platform.OS == 'ios' ? 14 : 20,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginLeft: 2,
  },

  cityTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 16,
  },

  weatherStatusStyle: {
    fontSize: 14,
    fontWeight: '300',
    color: 'black',
    marginLeft: 16,
  },

  cardViewStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(240,240,240)',
    borderRadius: 30,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: Platform.OS == 'ios' ? 10 : 20,
    right: 8,
  },
});
7;
export default CityList;
