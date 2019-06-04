import EStyleSheet from 'react-native-extended-stylesheet';
import { Metrics, ApplicationStyles, Colors } from '../../../Themes';

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  videoItemStyle: {
    flex: 1,
    height: 200,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'flex-end',
    borderRadius: 40,
    overflow: 'hidden'
  },
  otherItemContainer: {
    justifyContent: 'flex-end',
    backgroundColor: 'lightgrey',
    height: '80%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 40
  },
  itemTitle: {
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    color: Colors.ricePaper,
    fontSize: 16
  },
  image: {
    height: '100%',
    width: '100%'
  },
  flatlistContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  flatlist: {
    width: '100%',
    backgroundColor: 'white'
  }
});
