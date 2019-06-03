import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import Images from '../../Assets/Images';

// Styles
import styles from './Styles/LoginStyles';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.BG}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.LAUNCH_ICON} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Image source={Images.TOP_LOGO} />
            <Text style={styles.sectionText}>You are good to go</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
