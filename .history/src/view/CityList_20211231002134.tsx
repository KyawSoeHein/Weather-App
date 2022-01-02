import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, View, Modal} from 'react-native';

const CityList: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CityList;
