import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import PagerView from 'react-native-pager-view';

const WeatherDetail: FC = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={styles.container}>
      <FlatList
        viewabilityConfig={{itemVisiblePercentThreshold: 90}}
        pagingEnabled={true}
        decelerationRate={'fast'}
        data={items}
        keyExtractor={(item, index) => `id_${index}`}
        renderItem={({item}) => (
          <View style={{height: 200}}>
            <PagerView style={styles.pagerView} initialPage={0}>
              <View key="1">
                <Text>First Page</Text>
              </View>
              <View key="2">
                <Text>Second page</Text>
              </View>
            </PagerView>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 16,
    flex: 1,
  },

  icon: {
    width: 24,
    height: 24,
  },

  detail: {
    alignItems: 'center',
  },

  pagerView: {
    flex: 1,
  },
});

export default WeatherDetail;
