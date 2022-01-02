import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
