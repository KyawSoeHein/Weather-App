import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

const CityList: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text style={{marginTop: 60}}>Click me</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default CityList;
