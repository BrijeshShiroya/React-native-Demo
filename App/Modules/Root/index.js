import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ReduxNavigation from '../../Navigation/ReduxNavigation';
import StartupActions from '../../Redux/StartupRedux';
import AuthActions from '../../Redux/AuthRedux';
import ReduxPersist from '../../Config/ReduxPersist';
import store from '../../Redux';

// Styles
import styles from './style';

class RootContainer extends Component {
  handleNavigation(result) {
    const res = JSON.parse(result);
    store.dispatch(AuthActions.loginSuccess(res));
    store.dispatch(NavigationActions.navigate({ routeName: 'Tab', index: 0 }));
    setTimeout(() => SplashScreen.hide(), 1000);
  }
  componentDidMount() {
    console.disableYellowBox = true;
    // AsyncStorage.getItem('@demo:user', (err, result) => {
    //   if (result) {
    //     this.setState({ loading: true }, () => this.handleNavigation(result));
    //   }
    // });
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
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
