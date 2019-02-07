import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import { NavigatorIOS, StyleSheet, TouchableHighlight, View, Text } from 'react-native';

export default class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.navbar_container}>
      	<NavbarTile title="Home" pageRoute="Home" navigation={this.props.navigation}/>
      	<NavbarTile title="Preference" pageRoute="Preference" navigation={this.props.navigation}/>
      	<NavbarTile title="Plan" pageRoute="Plan" navigation={this.props.navigation}/>
      	<NavbarTile title="Chat" pageRoute="Chat" navigation={this.props.navigation}/>
      	<NavbarTile title="Bookmarks" pageRoute="Bookmarks" navigation={this.props.navigation}/>
      </View>
    );
  }
}

class NavbarTile extends React.Component {
	changeScreen = () => {
		console.log(this.props.navigation.state.routeName)
		if (this.props.pageRoute != this.props.navigation.state.routeName){
			this.props.navigation.push(this.props.pageRoute)
		}
	}

	render(){
		return (
			<View style={{flex: 1}}>
				<TouchableHighlight underlayColor="transparent" onPress={this.changeScreen}>
					<Text>{this.props.title}</Text>
				</TouchableHighlight>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	navbar_container: {
		position: 'absolute',
		width: '100%',
		bottom: 0,
		height: 50,
		backgroundColor: 'lightblue',
		flexDirection: 'row',
	},
	navbar_tile: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})