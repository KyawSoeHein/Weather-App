import React, {FC, useState} from 'react';

const Header: FC = () => {
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
            gotoCityList();
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
