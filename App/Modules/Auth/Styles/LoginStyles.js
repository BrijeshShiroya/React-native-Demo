import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  buttomTextStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    color: Colors.text
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 10
  }
});
