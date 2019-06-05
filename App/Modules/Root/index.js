import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, AsyncStorage, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { Root } from 'native-base';
import ReduxNavigation from '../../Navigation/ReduxNavigation';
import StartupActions from '../../Redux/StartupRedux';
// import AuthActions from '../../Redux/AuthRedux';
import ReduxPersist from '../../Config/ReduxPersist';

// Styles
import styles from './style';

class RootContainer extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
    AsyncStorage.getItem('@demo:user', (err, result) => {
      if (result) {
        // store.dispatch(
        //   NavigationActions.navigate({ routeName: 'Tab', index: 0 })
        // );
      }
    });
    // if redux persist is not active fire startup action
    SplashScreen.hide();
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render() {
    return (
      <SafeAreaView
        style={styles.applicationView}
        forceInset={{ top: 'never', bottom: 'never' }}
      >
        <StatusBar barStyle="light-content" />
        <Root>
          <ReduxNavigation />
        </Root>
      </SafeAreaView>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component`
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
});

export default connect(
  null,
  mapDispatchToProps
)(RootContainer);
RootContainer.propTypes = {
  startup: PropTypes.func
};
