import React, {Component} from 'react';
import { NavigatorIOS, StyleSheet, TouchableHighlight, View, Text } from 'react-native';

export default class BookmarksScreen extends Component {
	render() {
		return (
			<View>
				<TouchableHighlight onPress={() => this.props.navigation.pop()}>
					<Text>back</Text>
				</TouchableHighlight>
			</View>
		);
	}
}
