import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';

const WeatherDetail: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../icons/snow_icon.png')}
        style={{width: 48, height: 48}}
      />

      <Text style={{fontSize: 48, fontWeight: '200', marginTop: 8}}>35 F</Text>

      <Text style={{fontSize: 24, fontWeight: '200', marginTop: 8}}>
        Snow Showers
      </Text>

      <Text style={{fontSize: 12, fontWeight: '400'}}>Snow Showers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
  },
});

export default WeatherDetail;
