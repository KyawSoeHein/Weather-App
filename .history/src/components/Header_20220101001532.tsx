import React, {FC, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';

const Header: FC<{goTo?: CallableFunction; tint?: boolean}> = ({
  goTo,
  tint,
}) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: Platform.OS == 'android' ? 16 : 0,
      }}>
      <TouchableOpacity
        onPress={() => {
          if (goTo !== undefined) goTo();
        }}>
        <Image
          source={require('../../icons/burger_menu.png')}
          style={!tint ? styles.drawerIcon : styles.drawerIconTint}
        />
      </TouchableOpacity>

      <Text style={!tint ? styles.headerText : styles.headerTextBlack}>
        cliMate
      </Text>

      <Image
        source={require('../../icons/search_icon.png')}
        style={!tint ? styles.drawerIcon : styles.drawerIconTint}
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
    marginTop: 2,
  },

  headerTextBlack: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default Header;
