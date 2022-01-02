import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';

const WeatherDetail: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../icons/snow_icon.png')}
        style={{width: 48, height: 48}}
      />

      <Text style={{fontSize: 48, fontWeight: '200'}}>35 F</Text>
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
