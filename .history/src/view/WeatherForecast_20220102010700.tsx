import React, {FC, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import WeatherDetailDao from '../Dao/WeatherDetailDao';
import WeatherForecastDao, {Forecastday} from '../Dao/WeatherForecastDao';

const WeatherForecast: FC<{forecastData: WeatherForecastDao}> = ({
  forecastData,
}) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  return (
    <View style={styles.container}>
      {forecastData?.forecast?.forecastday.map(item => {
        const date = new Date(item.date);

        return (
          <View style={styles.itemView}>
            <Image
              source={require('../../icons/cloud_icon.png')}
              style={{width: 24, height: 24}}
            />

            <View style={{paddingRight: 80}}>
              <Text style={styles.dateTextStyle}>{days[date.getDay()]}</Text>
              <Text style={styles.dateNumTextStyle}>
                {date.getDate()} {months[date.getMonth()]}
              </Text>
            </View>

            <View>
              <Text style={[styles.dateNumTextStyle, {fontWeight: '400'}]}>
                {Math.round(item.day.avgtemp_c)} &deg;
              </Text>
              <Text
                style={
                  (styles.dateNumTextStyle, {fontWeight: '400', color: 'black'})
                }>
                21 &deg;
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    marginHorizontal: 16,
    flex: 1,
    // justifyContent: 'space-around',
  },

  itemView: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  dateTextStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },

  dateNumTextStyle: {
    fontWeight: '300',
    fontSize: 14,
    color: 'black',
  },
});

export default WeatherForecast;
