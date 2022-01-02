import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';

const Home: FC = () => {
  return (
    <View>
      <View style={styles.header}>
        <SafeAreaView
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../icons/burger_menu.png')}
            style={styles.drawerIcon}
          />

          <Text style={styles.headerText}>cliMate</Text>

          <Image
            source={require('../../icons/search_icon.png')}
            style={styles.drawerIcon}
          />
        </SafeAreaView>
      </View>
      <Text>Hello</Text>

      <View style={styles.circleShape}></View>
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
  },

  headerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  circleShape: {
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: -30,
  },
});

export default Home;
