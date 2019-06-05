import EStyleSheet from 'react-native-extended-stylesheet';
import { Metrics } from '../../Themes/';

export default EStyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dismiss: {
    backgroundColor: 'red',
    position: 'absolute',
    height: 0,
    width: 0
  }
});
