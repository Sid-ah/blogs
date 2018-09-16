import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get ('window');

class Articles extends React.Component {
  constructor () {
    super ();
    this.state = {
      articles: [],
      search: '',
    };
  }
  static navigationOptions = {
    header: null,
  };
  componentDidMount () {
    const {articles} = this.props;
    this.setState ({articles});
  }
  handleChange = search => {
    console.warn (`search is ${search}`);
    const {articles} = this.state;

    const filteredArticles = articles.filter (article =>
      article.city.includes (search.toLowerCase ())
    );
    if (search) {
      this.setState ({articles: filteredArticles, search: search});
    } else {
      const {articles} = this.props;
      this.setState ({articles, search: ''});
    }
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
    const {articles} = this.state;
    const navigation = this.props.navigation;
    return (
      <View>
        <View style={styles.header}>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => navigation.goBack ()}
            style={{justifyContent: 'center'}}
          >
            <Text style={{color: 'blue'}}>Go Back</Text>
          </TouchableHighlight>
          <TextInput
            placeholder="search.."
            onChangeText={this.handleChange}
            style={{
              flex: 0.9,
              borderWidth: 1,
              height: 30,
              marginHorizontal: 5,
              borderRadius: 5,
              borderColor: 'gray',
            }}
          />
        </View>
        <FlatList
          data={articles}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
          style={styles.listContainer}
        />
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

const styles = StyleSheet.create ({
  header: {
    height: 70,
    width: width,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
