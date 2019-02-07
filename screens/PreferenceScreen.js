import React, {Component} from 'react';
import { StyleSheet, TouchableHighlight, View, Text, SafeAreaView } from 'react-native';

import { colors, fonts } from '../theme/variables'; // Color scheme
import TopBannerBar from '../components/TopBannerBar';

export default class PreferenceScreen extends Component {
	render() {
		return (
			<SafeAreaView style={{flex: 1, backgroundColor: colors.THEME_COLOR}}>
      	<TopBannerBar label= "Learning" />
		  	<View style={styles.mainAreaContainer}>
          <Text>
            This is the preference page. {"\n"}
            Cody is going to work on this page. 
          </Text>
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
});
