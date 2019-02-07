import React, {Component} from 'react';
import { StyleSheet, TouchableHighlight, View, Text, SafeAreaView } from 'react-native';

export default class PlanScreen extends Component {
	render() {
		return (
			<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      	<View style={styles.topBar}>
      		<Text style={styles.topBarText}>Plan Screen</Text>
      	</View>
		  	<View style={styles.mainArea}>
					<Text>
						This is the planning page. {"\n"}
						Jack is going to work on this page. 
					</Text>
		  	</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
  topBar: {
  	height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
  	color: 'white',
  	fontSize: 20,
  },
  mainArea: {
  	padding: 10,
  }
});
