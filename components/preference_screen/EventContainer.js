import React, {Component} from 'react';
import { Text, Dimensions, View, StyleSheet, TouchableHighlight} from 'react-native';

var device_width = Dimensions.get('window').width;

export default class EventContainer extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<View style={styles.parentContainer}>
				<View style={styles.eventContainer}>
					<Text>{this.props.text}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    parentContainer: {
    	flex: 1,
    	width: device_width,
    	backgroundColor: 'white',
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    eventContainer: {
    	width: '90%',
    	height: '90%',
    	backgroundColor: 'lightgrey',
    	borderWidth: 1,
    	borderRadius: 20,

    	padding: '10%',
    }
})
