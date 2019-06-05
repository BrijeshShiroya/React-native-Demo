import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import styles from './Styles/LoaderStyle';
import { Colors } from '../Themes';

export default class Loader extends Component {
  render() {
    let loaderComponent = null;
    if (this.props.isVisible) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.primaryColor} />
        </View>
      );
    }
    return loaderComponent;
  }
}

Loader.defaultProps = { isVisible: true };
Loader.propTypes = {
  isVisible: PropTypes.bool
};
