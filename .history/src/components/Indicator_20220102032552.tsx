import React, {FC, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Indicator: FC = () => {
  return (
    <Text style={{alignSelf: 'center', marginTop: 8, color: 'black'}}>
      This is indicator
    </Text>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Indicator;
