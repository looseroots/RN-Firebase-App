import React, {Component} from 'react';
import { StyleSheet, TouchableHighlight, View, Text, SafeAreaView } from 'react-native';

export default class ChatScreen extends Component {
	render() {
		return (
			<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      	<View style={styles.topBar}>
      		<Text style={styles.topBarText}>Chat Screen</Text>
      	</View>
		  	<View style={styles.mainArea}>
		  		<Text>
		  			This is the planning page. {"\n"}
						Cody is going to work on this page. 
		  		</Text>
		    	<TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
						<Text style={styles.buttonText}>
							Clicking this block {"\n"}
							should take you back {"\n"}
							to the home / feed page {"\n"}{"\n"}
							It is here for example {"\n"}
							navigation code 
						</Text>
				</TouchableHighlight>
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
  },
  button: {
  	left: '20%',
  	width: '60%',
  	marginTop: 10,
  	backgroundColor: "lightgrey",
  	borderColor: "black",
  	borderWidth: 2,
  	padding: 6,
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  buttonText: {
  	color: 'blue',
  	textAlign: 'center',
  }
});
