import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlights,
} from 'react-native';
import {connect} from 'react-redux';
const {width} = Dimensions.get ('window');

class Articles extends React.Component {
  static navigationOptions = {
    title: 'News Feed',
  };
  render () {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
  };
};

export default connect (mapStateToProps, {}) (Articles);
