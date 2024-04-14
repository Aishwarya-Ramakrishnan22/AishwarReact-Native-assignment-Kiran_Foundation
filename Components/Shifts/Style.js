/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 16,
    color: '#4F6C92',
    fontWeight: 'bold',
  },
  rowHeder: {
    backgroundColor: '#F7F8FB',
    padding: 12,
    borderColor: 'grey',
    borderTopWidth: 0.25,
    borderBottomWidth: 0.25,
  },
  shifts: {
    padding: 18,
    paddingLeft: 25,
    paddingRight: 25,
    borderColor: 'grey',
    borderTopWidth: 0.25,
    borderBottomWidth: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shiftText: {
    fontSize: 19,
    color: '#4F6C92',
  },
  buttonText: {
    color: '#16A64D',
    fontWeight: 'bold',
    fontSize: 19,
    paddingTop: 7,
  },
  button: {
    borderWidth: 1.5,
    borderColor: '#16A64D',
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 50,

    margin: -10,
    alignContent: 'center',
  },
});

export default style;
