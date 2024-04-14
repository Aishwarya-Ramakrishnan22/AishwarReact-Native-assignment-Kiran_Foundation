/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ScrollView,
  Pressable,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import style from './Style';
import axios from 'axios';

const Shifts = ({shifts, onBookShift}) => {
  const [loadingShiftId, setLoadingShiftId] = useState(null); // State to store the ID of the shift being booked

  // Function to handle booking a shift
  const handleBookShift = async id => {
    setLoadingShiftId(id); // Set loading state for the specific shift being booked
    try {
      // Call the onBookShift function passed from the parent component
      await onBookShift(id);
    } catch (error) {
      console.error('Error booking shift:', error);
      // Handle error or display error message
    } finally {
      setLoadingShiftId(null); // Reset loading state
    }
  };

  // Function to format time to HH:mm format
  const formatTime = timestamp => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  // Organize shifts by day
  const shiftsByDay = shifts.reduce((acc, shift) => {
    const date = new Date(shift.startTime).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(shift);
    return acc;
  }, {});

  return (
    <ScrollView contentContainerStyle={style.container}>
      {Object.entries(shiftsByDay).map(([date, shifts], index) => (
        <View key={index}>
          <View style={style.rowHeder}>
            <Text style={style.headerText}>{date}</Text>
          </View>
          {shifts.map((shift, shiftIndex) => (
            <View key={shiftIndex} style={style.shifts}>
              <Text style={style.shiftText}>
                {formatTime(shift.startTime)} - {formatTime(shift.endTime)}
              </Text>
              <View style={style.button}>
                <Pressable
                  onPress={() => handleBookShift(shift.id)}
                  disabled={loadingShiftId === shift.id} // Disable the button if this shift is being booked
                >
                  {loadingShiftId === shift.id ? ( // Show loading indicator if this shift is being booked
                    <ActivityIndicator color="#16A64D" />
                  ) : (
                    <Text
                      style={[
                        style.buttonText,
                        {color: shift.booked ? '#E2006A' : '#16A64D'},
                      ]}>
                      {shift.booked ? 'Cancel' : 'Book'}
                    </Text>
                  )}
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default Shifts;
