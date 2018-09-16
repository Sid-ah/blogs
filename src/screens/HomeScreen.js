import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

const {width} = Dimensions.get ('window');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainter}>
          <Text>Welecome to Blogs</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight
            onPress={() => navigate ('Articles')}
            style={styles.button}
          >
            <Text>
              Search Articles
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate ('Create')}
            style={styles.button}
          >
            <Text>
              Create Articles
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainter: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  buttonsContainer: {
    flex: 0.5,
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    marginHorizontal: 10,
    width: width * 0.3,
    height: 60,
  },
});
