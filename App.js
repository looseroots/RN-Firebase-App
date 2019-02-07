import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation'; 
import { Icon } from 'react-native-elements';

import HomeScreen from './screens/HomeScreen'
import PreferenceScreen from './screens/PreferenceScreen'
import PlanScreen from './screens/PlanScreen'
import ChatScreen from './screens/ChatScreen'
import ProfileScreen from './screens/ProfileScreen'



const TabNavigator = createBottomTabNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: <Icon name="home" type="font-awesome" size={27} color="white" />
      },
    },
    Preference: { 
      screen: PreferenceScreen,
      navigationOptions: {
        tabBarLabel: 'Preference',
        tabBarIcon: <Icon name="heart" type="font-awesome" size={23} color="white" />
      },
    },
    Plan:  { 
      screen: PlanScreen,
      navigationOptions: {
      tabBarLabel: 'Plan',
      tabBarIcon: <Icon name="edit" type="font-awesome" size={23} color="white" />
      },
    },
    Chat:  { 
      screen: ChatScreen,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: <Icon name="comments" type="font-awesome" size={27} color="white" />
      }
    },
    Profile:  { 
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'profile',
        tabBarIcon: <Icon name="user" type="font-awesome" size={23} color="white" />
      }
    },
  }, 
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      showIcon: true,
      labelStyle: {
        fontSize: 12,
      }, 
      tabStyle: {
        backgroundColor: 'black',
        borderBottom: 'white',
        borderWidth: 1,
      },
      style: {
        backgroundColor: 'black',
      },
    }
  }
);
const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer /> 
    );
  }
}
// <SafeAreaView style={styles.safeArea}>
// </SafeAreaView>
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd',
  }
});
