import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Styles
import styles from './Styles/SettingStyles';

export default class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Welcome to Setting</Text>
      </View>
    );
  }
}
