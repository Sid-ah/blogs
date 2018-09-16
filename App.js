/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import reducer from './src/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import Articles from './src/screens/Articles';
import CreateArticle from './src/screens/CreateArticle';

const initialState = {
  articles: [
    {
      Author: 'Jack Sparrow',
      city: 'nyc',
      description: 'I eat. I drink and love beautiful women. I cannot remember where I am nor where I was since I spend my life traveling drunk.',
    },
    {
      Author: 'Barrack Obama',
      city: 'mia',
      description: '.. And I believe the future of my fellow American - we can bring change that matter us, but also to the world we living. We can just be little someone because we do not have the same views - that is called bullying and American are supposed to stand to bullies.',
    },
  ],
};

const store = createStore (reducer, initialState);
type Props = {};
export default class App extends Component<Props> {
  render () {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    );
  }
}
const AppStackNavigator = createStackNavigator ({
  Home: HomeScreen,
  Articles: Articles,
  Create: CreateArticle,
});
