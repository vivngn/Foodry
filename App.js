import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';

import MainScreen from './components/mainscreen';
import MyPlaceScreen from './components/myplacescreen'

//NOTE: 
const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen
    },
    MyPlace: {
      screen: MyPlaceScreen
    }
    },
    {
      initialRouteName: 'Main',
       transitionConfig: () => fadeIn(),
    }
)


export default class App extends React.Component {
  render() {
    return <RootStack/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
