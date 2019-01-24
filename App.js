import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'; 

import HomeScreen from './screens/HomeScreen'
import PreferenceScreen from './screens/PreferenceScreen'
import PlanScreen from './screens/PlanScreen'
import ChatScreen from './screens/ChatScreen'
import BookmarksScreen from './screens/BookmarksScreen'


const AppStackNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Preference:  { screen: PreferenceScreen },
  Plan:  { screen: PlanScreen },
  Chat:  { screen: ChatScreen },
  Bookmarks:  { screen: BookmarksScreen },
});
const AppContainer = createAppContainer(AppStackNavigator);


export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <AppContainer /> 
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd',
  }
});
