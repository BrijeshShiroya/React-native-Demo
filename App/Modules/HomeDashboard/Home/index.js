import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionActions from '../../../Redux/QuestionRedux';
import Loader from '../../../Components/Loader';
import EmptyList from '../../../Components/EmptyList';

// Styles
import styles from './style';

class Home extends Component {
  componentDidMount() {
    this.props.attempAllQuestions('desc', 'activity');
  }

  _renderItem(item) {
    return (
      <ListItem>
        <Text>{item.title}</Text>
      </ListItem>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.questions}
          renderItem={({ item }) => this._renderItem(item)}
          ListEmptyComponent={<EmptyList title={'No questions'} />}
        />
        <Loader isVisible={this.props.fetching} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.question.fetching,
  questions: state.question.questions,
  error: state.video.question
});

const mapDispatchToProps = dispatch => ({
  attempAllQuestions: (order, sort) =>
    dispatch(QuestionActions.allQuestionRequest(order, sort))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
Home.propTypes = {
  attempAllQuestions: PropTypes.func,
  questions: PropTypes.array,
  fetching: PropTypes.bool
};
