import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainerStyle: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerStyle: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttomTextStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    color: Colors.text
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 10
  },
  textFieldStyle: {
    width: '100%'
  },
  loginTextStyle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h1,
    alignSelf: 'center'
  }
});
