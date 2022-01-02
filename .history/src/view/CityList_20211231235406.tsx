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
        style={{marginTop: 30, marginHorizontal: 16}}
        data={items}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => `id_${index}`}
        renderItem={({item}) => (
          <View style={styles.itemView}>
            <Text style={styles.degreeTextStyle}>37.</Text>
            <View style={{justifyContent: 'flex-end'}}>
              <Text style={styles.cityTextStyle}>New York</Text>
              <Text style={styles.weatherStatusStyle}>New York</Text>
            </View>
            <View style={styles.cardViewStyle} />
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

  itemView: {
    backgroundColor: 'black',
    marginBottom: 24,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  degreeTextStyle: {
    fontSize: 48,
    color: 'black',
    fontWeight: '100',
  },

  cityTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 16,
  },

  weatherStatusStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: 'black',
    marginLeft: 16,
  },

  cardViewStyle: {
    width: 30,
    height: 30,
    borderRadius: 16,
    elevation: 20,
    backgroundColor: 'green',
  },
});

export default CityList;
