import React, {FC} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Header from '../components/Header';

const CityList: FC<{goToHomePage: CallableFunction}> = ({goToHomePage}) => {
  const items = [1, 2, 3, 4];

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
            <Text style={styles.degreeTextStyle}>37</Text>
            <View style={styles.degreeIconStyle} />
            <View style={{justifyContent: 'flex-end', marginBottom: 11}}>
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
    marginBottom: 24,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  degreeTextStyle: {
    fontSize: 60,
    color: 'black',
    fontWeight: '100',
  },

  degreeIconStyle: {
    marginTop: Platform.OS == 'ios' ? 14 : 20,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginLeft: 2,
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
    width: 50,
    height: 50,
    backgroundColor: 'rgb(240,240,240)',
    borderRadius: 30,
    shadowColor: 'blue',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,

    position: 'absolute',
    top: Platform.OS == 'ios' ? 10 : 20,
    right: 8,
  },
});
7;
export default CityList;
