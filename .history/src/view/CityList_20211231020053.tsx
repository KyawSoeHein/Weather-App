import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CityList: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text style={{marginTop: 60}}>Click me</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});

export default CityList;
