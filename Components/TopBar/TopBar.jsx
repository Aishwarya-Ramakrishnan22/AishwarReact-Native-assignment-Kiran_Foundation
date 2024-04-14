/* eslint-disable prettier/prettier */
// TopBar.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './styles';

const TopBar = ({shifts, setSelectedArea}) => {
  // Extract unique areas from shifts
  const uniqueAreas = [...new Set(shifts.map(shift => shift.area))];

  return (
    <View style={style.container}>
      {uniqueAreas.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedArea(item)}>
          <View style={style.rowheader}>
            <Text style={style.headerText}>{item}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TopBar;
