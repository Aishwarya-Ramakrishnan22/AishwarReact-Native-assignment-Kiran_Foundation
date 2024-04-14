import React from 'react';
import {Button, TouchableOpacity, View, Text} from 'react-native';
import TopBar from './Components/TopBar/TopBar';
import Shifts from './Components/Shifts/Shifts';
import Footer from './Components/Footer/Footer';
import AvailableShifts from './Pages/AvailableShifts/AvailableShifts';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyShifts from './Pages/MyShifts/MyShifts';
import {useState} from 'react';

const App = () => {
  const [screen, setScreen] = useState('MyShifts');

  let content;
  if (screen === 'MyShifts') {
    content = <MyShifts />;
  } else if (screen === 'AvailableShifts') {
    content = <AvailableShifts />;
  }

  return (
    <View style={{flex: 1}}>
      {content}
      <Footer setScreen={setScreen} />
    </View>
  );
};
export default App;
