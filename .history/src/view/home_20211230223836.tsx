import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';

const Home: FC = () => {
  return (
    <View>
      <View style={styles.header}>
        <SafeAreaView>
          <Image
            source={require('../../icons/burger_menu.png')}
            style={styles.drawerIcon}
          />
        </SafeAreaView>

        <Text>cliMate</Text>
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

  drawerIcon: {
    width: 24,
    height: 24,
    marginStart: 16,
  },

  headerText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Home;
