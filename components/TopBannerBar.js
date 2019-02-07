import React, {Component} from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import { colors, fonts } from '../theme/variables';

export default class TopBannerBar extends Component {
	render() {
		return (
      	<View style={styles.topBar}>
      		<Text style={styles.topBarText}>{this.props.label}</Text>
      	</View>
		);
	}
}

const styles = StyleSheet.create({
  topBar: {
  	height: 50,
    backgroundColor: colors.THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
  	color: 'white',
  	fontSize: 20,
  },
});
