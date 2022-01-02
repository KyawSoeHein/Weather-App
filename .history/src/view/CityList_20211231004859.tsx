import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

const CityList: FC<{
  modalVisible: boolean;
  setModalVisible: CallableFunction;
}> = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <Modal isVisible={modalVisible} hardwareAccelerated={true}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Click me</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default CityList;
