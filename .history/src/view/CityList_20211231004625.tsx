import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const CityList: FC<{
  modalVisible: boolean;
  setModalVisible: CallableFunction;
}> = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <Modal
        isVisible={modalVisible}
        hardwareAccelerated={true}
        coverScreen={true}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            alignSelf: 'center',
          }}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CityList;
