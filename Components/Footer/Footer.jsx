/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
const Footer = ({setScreen}) => {
  const handleMyShiftsPress = () => {
    setScreen('MyShifts');
  };

  const handleAvailableShiftsPress = () => {
    setScreen('AvailableShifts');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMyShiftsPress}>
        <Text style={styles.text}>My Shifts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAvailableShiftsPress}>
        <Text style={styles.text}>Available Shifts</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
