import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Header from '../components/Header';

const CityList: FC<{goToHomePage: CallableFunction}> = ({goToHomePage}) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={styles.container}>
      <Header goTo={goToHomePage} tint={true} />

      <FlatList
        data={items}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => `id_${index}`}
        renderItem={({item}) => (
          <View>
            <Text>Hello</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CityList;
