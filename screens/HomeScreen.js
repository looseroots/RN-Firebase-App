import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import { NavigatorIOS, TouchableHighlight, View, Text } from 'react-native';
 
import Navbar from '../components/navbar.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navbar navigation={this.props.navigation}/>
      </View>
    )
  }
}