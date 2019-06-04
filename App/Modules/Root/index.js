import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import ReduxNavigation from '../../Navigation/ReduxNavigation';
import { connect } from 'react-redux';
import StartupActions from '../../Redux/StartupRedux';
import ReduxPersist from '../../Config/ReduxPersist';
import SplashScreen from 'react-native-splash-screen';

// Styles
import styles from './style';

class RootContainer extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
    SplashScreen.hide();

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
