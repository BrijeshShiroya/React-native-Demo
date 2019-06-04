import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Styles
import styles from './Styles/HomeStyles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Welcome to home</Text>
      </View>
    );
  }
}
