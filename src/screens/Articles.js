import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get ('window');

class Articles extends React.Component {
  static navigationOptions = {
    title: 'News Feed',
  };
  renderItem = article => {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{article.item.Author}</Text>
        <Text style={styles.instructions}>
          {article.item.description ||
            'JAck sparrow like to dance with the stars'}
        </Text>
        <Text style={styles.instructions}>City: {article.item.city}</Text>
      </View>
    );
  };
  _keyExtractor = article => {
    return article.Author;
  };
  render () {
    const {articles} = this.props;
    return (
      <FlatList
        data={articles}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        style={styles.listContainer}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
  };
};

export default connect (mapStateToProps, {}) (Articles);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listContainer: {
    height,
    width,
  },
});
