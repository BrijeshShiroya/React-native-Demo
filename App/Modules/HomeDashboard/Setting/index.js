import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { alerts } from 'Constants';
import { Container, Button } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
import { showConfirmationAlert } from '../../../Services/UtilityFunctions';
import AuthActions from '../../../Redux/AuthRedux';
import { connect } from 'react-redux';

// Styles
import styles from './style';

class Setting extends Component {
  onLogoutClick() {
    showConfirmationAlert(alerts.logout, 'Logout', 'Cancel', () => {
      // eslint-disable-next-line react/prop-types
      this.props.clearData();
      this.props.navigation.dispatch(
        StackActions.reset({
          key: null,
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })]
        })
      );
    });
  }

  render() {
    return (
      <Container style={styles.mainContainer}>
        <View style={styles.container}>
          <Button
            primary
            style={styles.buttonLogout}
            onPress={() => this.onLogoutClick()}
          >
            <Text style={styles.textStyle}>Logout </Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearData: () => dispatch(AuthActions.clearAll())
});

export default connect(
  null,
  mapDispatchToProps
)(Setting);
