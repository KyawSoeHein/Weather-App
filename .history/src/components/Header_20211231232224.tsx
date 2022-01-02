import React, {FC, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Header: FC<{gotoCityList?: CallableFunction}> = ({gotoCityList}) => {
  return (
    <View style={styles.header}>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (gotoCityList !== undefined) gotoCityList();
          }}>
          <Image
            source={require('../../icons/burger_menu.png')}
            style={styles.drawerIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>cliMate</Text>

        <Image
          source={require('../../icons/search_icon.png')}
          style={styles.drawerIcon}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(52, 52, 52, alpha)',
    height: '25%',
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
});

export default Header;
