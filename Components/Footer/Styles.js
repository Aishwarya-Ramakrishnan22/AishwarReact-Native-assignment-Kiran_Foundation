/* eslint-disable prettier/prettier */
// styles.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Align items vertically
    backgroundColor: '#F1F4F8',
    paddingTop: 12.5,
    paddingBottom: 12.5,
    position: 'absolute', // Position the container absolutely
    bottom: 0, // Place it at the bottom
    left: 0,
    right: 0,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default styles;
