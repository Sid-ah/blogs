import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlights,
} from 'react-native';

const {width} = Dimensions.get ('window');

export default class CreateArticle extends React.Component {
  render () {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}
