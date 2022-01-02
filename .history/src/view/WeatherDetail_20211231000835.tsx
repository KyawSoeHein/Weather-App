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
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'stretch',
          justifyContent: 'space-between',
        }}>
        <View style={styles.detail}>
          <Image
            source={require('../../icons/air_icon.png')}
            style={styles.icon}
          />
          <Text>cliMate</Text>
        </View>

        <View style={styles.detail}>
          <Image
            source={require('../../icons/air_icon.png')}
            style={styles.icon}
          />
          <Text>cliMate</Text>
        </View>

        <View style={styles.detail}>
          <Image
            source={require('../../icons/air_icon.png')}
            style={styles.icon}
          />
          <Text>cliMate</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
  },

  icon: {
    width: 24,
    height: 24,
  },

  detail: {
    alignItems: 'center',
  },
});

export default WeatherDetail;
