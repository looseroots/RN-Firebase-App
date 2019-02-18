import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation'; 
import { Icon } from 'react-native-elements'; // Icons for tab navigator

// Importing the screens in the tab navigation bar
import HomeScreen from './screens/HomeScreen'
import ExploreScreen from './screens/ExploreScreen'
import PlanScreen from './screens/PlanScreen'
import ChatScreen from './screens/ChatScreen'
import ProfileScreen from './screens/ProfileScreen'

// Color scheme
import { colors, fonts } from './theme/variables';

// Icon Styling
const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  if ( routeName == "Home") {
    iconName = `home`;
    iconSize = 25;
    iconFamily = "font-awesome";
  } else if ( routeName == "Explore"){
    iconName = `heart`;
    iconSize = 23;
    iconFamily = "font-awesome";
  } else if ( routeName == "Plan"){
    iconName = `edit`;
    iconSize = 23;
    iconFamily = "font-awesome";
  } else if ( routeName == "Chat"){
    iconName =  `comments`;
    iconSize = 27;
    iconFamily = "font-awesome";
  } else if ( routeName == "Profile"){
    iconName =  `user`;
    iconSize = 23;
    iconFamily = "font-awesome";
  }
  return <Icon name={iconName} type={iconFamily} size={iconSize} color={tintColor} />
};

// Tab Navigation Configuration
const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Explore: { screen: ExploreScreen },
    Plan:  { screen: PlanScreen },
    Chat:  { screen: ChatScreen },
    Profile:  { screen: ProfileScreen },
  }, 
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    swipeEnabled: true,
    defaultNavigationOptions : ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: colors.THEME_COLOR,
      inactiveTintColor: '#909090',
      showIcon: true,
      labelStyle: {
        fontSize: 10.5,
      }, 
      tabStyle: {
        backgroundColor: 'white',
      },
      style: {
        height: 48,
      },
    }
  }
);
const AppContainer = createAppContainer(TabNavigator);


// Main App 
export default class App extends React.Component {
  render() {
    return (
      <AppContainer /> 
    );
  }
}
