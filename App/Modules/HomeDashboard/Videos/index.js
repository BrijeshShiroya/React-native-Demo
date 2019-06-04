import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View, FlatList } from 'react-native';
import { Container, Header, Title, Body } from 'native-base';
import { connect } from 'react-redux';
import VideoActions from '../../../Redux/VideoRedux';

// Styles
import styles from './style';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      videos: []
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.getAllVideos();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.videos !== prevState.videos) {
      return { videos: nextProps.videos };
    }
    return null;
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.videoItemStyle} onPress={() => {}}>
        <View style={styles.otherItemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        <View style={styles.videoItemContainer}>
          <Image source={{ uri: item.thumbnail_url }} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };

  renderVideoList() {
    return (
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContainer}
        data={this.state.videos}
        renderItem={this._renderItem}
        extraData={this.state}
      />
    );
  }
  render() {
    return (
      <Container style={styles.mainContainer}>
        <Header>
          <Body>
            <Title>{`Videos`}</Title>
          </Body>
        </Header>
        {this.renderVideoList()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.video.fetching,
  videos: state.video.videos,
  error: state.video.error
});

const mapDispatchToProps = dispatch => ({
  getAllVideos: () => dispatch(VideoActions.videoListRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Videos);
