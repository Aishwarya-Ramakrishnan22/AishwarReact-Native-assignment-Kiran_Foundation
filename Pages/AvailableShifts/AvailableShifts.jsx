/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import TopBar from '../../Components/TopBar/TopBar';
import axios from 'axios';
import style from './styles';
import Shifts from '../../Components/Shifts/Shifts';

const AvailableShifts = () => {
  const [shifts, setShifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArea, setSelectedArea] = useState(null); // State to store the selected area

  useEffect(() => {
    fetchShifts(); // Fetch shifts data when component mounts
  }, []);

  // Function to fetch shifts data from the server
  const fetchShifts = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8080/shifts');
      setShifts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching shifts:', error);
      // Handle error or display error message
    }
  };

  // Function to handle booking a shift
  const handleBookShift = async id => {
    try {
      // Make POST request to book the shift
      await axios.post(`http://10.0.2.2/shifts/${id}/book`);
      // Refresh shifts data after booking
      await fetchShifts();
    } catch (error) {
      console.error('Error booking shift:', error);
      // Handle error or display error message
    }
  };

  // Function to filter shifts based on the selected area
  const filteredShifts = selectedArea
    ? shifts.filter(shift => shift.area === selectedArea)
    : shifts;

  if (loading) {
    return (
      <View style={style.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <TopBar shifts={shifts} setSelectedArea={setSelectedArea} />
      <Shifts shifts={filteredShifts} onBookShift={handleBookShift} />
    </View>
  );
};

export default AvailableShifts;
