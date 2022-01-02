import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';

const Home: FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          source={require('../../icons/burger_menu.png')}
          style={styles.drawerIcon}
        />
      </View>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: '50%',
    width: '100%',
    paddingTop: -30,
  },

  drawerIcon: {
    width: 24,
    height: 24,
    marginStart: 16,
  },
});

export default Home;
