import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CityList: FC<{
  modalVisible: boolean;
  setModalVisible: CallableFunction;
}> = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <Text>Hello</Text>
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
