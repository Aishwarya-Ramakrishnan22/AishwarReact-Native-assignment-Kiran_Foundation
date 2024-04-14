/* eslint-disable prettier/prettier */
// MyShifts.js
import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import axios from 'axios';
import style from './styles';
import Shifts from '../../Components/Shifts/Shifts';

const MyShifts = () => {
  const [bookedShifts, setBookedShifts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://10.0.2.2:8080/shifts').then(function (response) {
      // Filter out booked shifts
      const bookedShifts = response.data.filter(shift => shift.booked === true);
      setBookedShifts(bookedShifts);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={style.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <Shifts shifts={bookedShifts} />
    </View>
  );
};

export default MyShifts;
