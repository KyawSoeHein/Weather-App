import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, View, Modal} from 'react-native';

const CityList: FC<{
  modalVisible: boolean;
  setModalVisible: CallableFunction;
}> = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible();
        }}>
        <Text>Hello</Text>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CityList;
