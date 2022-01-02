import React, {FC} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  Text,
  Image,
} from 'react-native';

const WeatherForecast: FC = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled
        snapToInterval={Dimensions.get('screen').height * 0.65 + 30}
        data={items}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => `id_${index}`}
        renderItem={({item}) => (
          <View style={styles.itemView}>
            <Text>Hello</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
  },

  itemView: {
    marginBottom: 16,
  },
});

export default WeatherForecast;
