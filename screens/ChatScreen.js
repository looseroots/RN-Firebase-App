import React, {Component} from 'react';
import { StyleSheet, TouchableHighlight, View, Text, SafeAreaView } from 'react-native';

import { colors, fonts } from '../theme/variables'; // Color scheme
import TopBannerBar from '../components/TopBannerBar';

export default class ChatScreen extends Component {
	render() {
		return (
			<SafeAreaView style={{flex: 1, backgroundColor: colors.THEME_COLOR}}>
      	<TopBannerBar label= "Messaging" />
        <View style={styles.mainAreaContainer}>
          <Text>
            This is the chat page page. {"\n"}
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
  mainAreaContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
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
