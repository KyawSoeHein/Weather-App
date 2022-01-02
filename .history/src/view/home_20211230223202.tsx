import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Home: FC = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image source={require('../../icons/burger_menu.png')} />
      </View>
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
