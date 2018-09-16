import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const {width} = Dimensions.get ('window');

export default class CreateArticle extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topTwoInputsContainter}>
          <TextInput placeHolder="Author Name" style={styles.textInput} />
          <TextInput placeHolder="City" style={styles.textInput} />
        </View>
        <View
          placeholder="Enter your text here"
          style={styles.bottomInputContainer}
        >
          <TextInput style={styles.bottomInput} />
        </View>
        <TouchableHighlight style={styles.button}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTwoInputsContainter: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 0.5,
    marginVertical: 5,
    width: width * 0.8,
    borderWidth: 1,
  },
  bottomInputContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomInput: {
    flex: 1,
    marginVertical: 5,
    width: width * 0.8,
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  button: {
    height: 60,
    width: width * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
