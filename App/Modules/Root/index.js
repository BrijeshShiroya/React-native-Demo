import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { Root } from 'native-base';
import ReduxNavigation from '../../Navigation/ReduxNavigation';
import StartupActions from '../../Redux/StartupRedux';
// import AuthActions from '../../Redux/AuthRedux';
import ReduxPersist from '../../Config/ReduxPersist';
import { NavigationActions } from 'react-navigation';
import store from '../../Redux';

// Styles
import styles from './style';

class RootContainer extends Component {
  handleNavigation(screen) {
    store().dispatch(
      NavigationActions.navigate({ routeName: screen, index: 0 })
    );
  }
  componentDidMount() {
    console.disableYellowBox = true;
    //check user is logged in or not
    if (this.props.isUserLoggedIn) {
      this.handleNavigation('Tab');
    } else {
      this.handleNavigation('Auth');
    }
    setTimeout(() => SplashScreen.hide(), 2000);
    // if redux persist is not active fire startup action
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

const mapStateToProps = state => ({
  isUserLoggedIn: state.auth.isUserLoggedIn,
  user: state.auth.user
});

// wraps dispatch to create nicer functions to call within our component`
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
RootContainer.propTypes = {
  startup: PropTypes.func,
  isUserLoggedIn: PropTypes.bool
};
