import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';

const WeatherDetail: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../icons/snow_icon.png')}
        style={{width: 48, height: 48}}
      />

      <Text style={{fontSize: 70, fontWeight: '200', marginTop: 8}}>35 F</Text>

      <Text style={{fontSize: 24, fontWeight: '200', marginTop: 8}}>
        Snow Showers
      </Text>

      <Text style={{fontSize: 16, fontWeight: '400'}}>35 .C 24.</Text>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 30,
        }}>
        <Image source={require('../../icons/burger_menu.png')} />

        <Text>cliMate</Text>

        <Image source={require('../../icons/burger_menu.png')} />

        <Text>cliMate</Text>

        <Image source={require('../../icons/burger_menu.png')} />

        <Text>cliMate</Text>
      </View>
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
