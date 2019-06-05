import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/EmptyListStyle';

export default class EmptyList extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    );
  }
}

EmptyList.defaultProps = { title: 'No Data' };
EmptyList.propTypes = {
  title: PropTypes.string
};
