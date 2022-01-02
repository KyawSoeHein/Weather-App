import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';

const WeatherDetail: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../icons/snow_icon.png')}
        style={{width: 48, height: 48}}
      />

      <Text style={{fontSize: 80, fontWeight: '200', marginTop: 8}}>35 F</Text>

      <Text style={{fontSize: 24, fontWeight: '200', marginTop: 8}}>
        Snow Showers
      </Text>

      <Text style={{fontSize: 16, fontWeight: '400'}}>35 .C 24.</Text>

      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginTop: 30,
        }}>
        <View>
          <Image source={require('../../icons/air_icon.png')} />
          <Text>cliMate</Text>
        </View>

        <View>
          <Image source={require('../../icons/air_icon.png')} />
          <Text>cliMate</Text>
        </View>

        <View>
          <Image source={require('../../icons/air_icon.png')} />
          <Text>cliMate</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
  },

  icon: {
    width: 16,
    height: 16,
  },
});

export default WeatherDetail;
