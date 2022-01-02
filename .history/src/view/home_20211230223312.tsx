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
  },

  drawerIcon: {
    width: 18,
    height: 18,
  },
});

export default Home;
