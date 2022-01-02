import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';

const WeatherDetail: FC = () => {
  return (
    <View style={styles.container}>
      <Text>New York</Text>
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
