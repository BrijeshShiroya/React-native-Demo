import EStyleSheet from 'react-native-extended-stylesheet';
import { ApplicationStyles, Colors } from '../../../Themes';

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLogout: {
    alignSelf: 'center'
  },
  textStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    color: Colors.snow
  }
});
