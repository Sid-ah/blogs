import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {createArticle} from '../actions';

const {width} = Dimensions.get ('window');

class CreateArticle extends React.Component {
  static navigationOptions = {
    title: 'Create Article',
  };
  constructor () {
    super ();
    this.state = {
      Author: '',
      city: '',
      description: '',
    };
  }
  handleSubmit = () => {
    const {Author, city, description} = this.state;
    const obj = {
      Author,
      city,
      description,
    };
    if (Author == '' || city == '' || description == '') {
      Alert.alert ('Missing one of the required fields');
    } else {
      Alert.alert ('Successfully created the article');
      this.props.createArticle (obj);
    }
  };
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topTwoInputsContainter}>
          <TextInput
            onChangeText={val => this.setState ({Author: val})}
            placeholder="Author Name"
            style={styles.textInput}
          />
          <TextInput
            onChangeText={val => this.setState ({city: val})}
            placeholder="City"
            style={styles.textInput}
          />
        </View>
        <View style={styles.bottomInputContainer}>
          <TextInput
            numberOfLines={10}
            placeholder="Enter your text here"
            onChangeText={val => this.setState ({description: val})}
            maxLength={40}
            style={styles.bottomInput}
          />
        </View>
        <TouchableHighlight onPress={this.handleSubmit} style={styles.button}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
  };
};
export default connect (mapStateToProps, {createArticle}) (CreateArticle);

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
    borderRadius: 5,
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
    borderRadius: 5,
  },
  button: {
    height: 60,
    width: width * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
});
