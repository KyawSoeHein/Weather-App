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
            <Image
              source={require('../../icons/cloud_icon.png')}
              style={{width: 24, height: 24}}
            />

            <View style={{paddingRight: }}>
              <Text>Hello</Text>
              <Text>Hello</Text>
            </View>

            <View>
              <Text>Hello</Text>
              <Text>Hello</Text>
            </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default WeatherForecast;
