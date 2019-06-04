import React, { Component } from 'react';
import { Text, View, Alert, AsyncStorage } from 'react-native';
import { alerts } from 'Constants';
import { Container, Header, Title, Body, Button } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
// Styles
import styles from './style';

export default class Setting extends Component {
  onLogoutClick() {
    Alert.alert(
      'Simform',
      alerts.logout,
      [
        {
          text: 'Cancel',
          onPress: () => {}
        },
        {
          text: 'Ok',
          onPress: () => {
            AsyncStorage.removeItem('@demo:user').then(() => {
              this.props.navigation.dispatch(
                StackActions.reset({
                  key: null,
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'Login' })]
                })
              );
            });
          }
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <Container style={styles.mainContainer}>
        <Header>
          <Body>
            <Title>{`Setting`}</Title>
          </Body>
        </Header>
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
