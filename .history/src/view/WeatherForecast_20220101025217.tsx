import React, {FC} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  Text,
  Image,
} from 'react-native';

const WeatherForecast: FC = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      {items.map(item => {
          return( <View style={styles.itemView}>
            <Image
              source={require('../../icons/cloud_icon.png')}
              style={{width: 24, height: 24}}
            />
  
            <View style={{paddingRight: 80}}>
              <Text style={styles.dateTextStyle}>WED</Text>
              <Text style={styles.dateNumTextStyle}>17 JAN</Text>
            </View>
  
            <View>
              <Text style={[styles.dateNumTextStyle, {fontWeight: '400'}]}>
                39 &deg;
              </Text>
              <Text
                style={
                  (styles.dateNumTextStyle, {fontWeight: '400', color: 'black'})
                }>
                21 &deg;
              </Text>
            </View>
          </View>;)
       
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'space-between',
  },

  itemView: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
