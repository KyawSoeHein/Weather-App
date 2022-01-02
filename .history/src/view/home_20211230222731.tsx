import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home: FC = () => {
  return (
    <View>
      <View style={styles.header} />
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: '50%',
    width: '100%',
  },
});

export default Home;
