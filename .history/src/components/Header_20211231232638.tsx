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
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 16,
      }}>
      <TouchableOpacity
        onPress={() => {
          if (gotoCityList !== undefined) gotoCityList();
        }}>
        <Image
          source={require('../../icons/burger_menu.png')}
          style={gotoCityList ? styles.drawerIcon : styles.drawerIconTint}
        />
      </TouchableOpacity>

      <Text style={gotoCityList ? styles.headerText : styles.headerTextBlack}>
        cliMate
      </Text>

      <Image
        source={require('../../icons/search_icon.png')}
        style={gotoCityList ? styles.drawerIcon : styles.drawerIconTint}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerIcon: {
    width: 24,
    height: 24,
  },

  drawerIconTint: {
    width: 24,
    height: 24,
    tintColor: 'black',
  },

  headerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  headerTextBlack: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Header;
