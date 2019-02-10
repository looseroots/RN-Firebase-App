import React, {Component} from 'react';
import { StyleSheet, ScrollView, TouchableHighlight, View, Text, SafeAreaView } from 'react-native';

import { colors, fonts } from '../theme/variables'; // Color scheme
import TopBannerBar from '../components/TopBannerBar';
import EventContainer from '../components/preference_screen/EventContainer';

export default class PreferenceScreen extends Component {
	render() {
		return (
			<SafeAreaView style={{flex: 1, backgroundColor: colors.THEME_COLOR}}>
      	<TopBannerBar label= "Learning" />
		  	<View style={styles.mainAreaContainer}>
          <ScrollView 
            horizontal={true}
            pagingEnabled={true}
            style={styles.swipeWindow}
          >
            <EventContainer text="Ligma"/>
            <EventContainer text="Large"/>
            <EventContainer text="Lumpy"/>
            <EventContainer text="Ballsack"/>
          </ScrollView>
        </View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
  mainAreaContainer: {
    flex: 1,
  },
  swipeWindow: {
    flex: 1,
    backgroundColor: '#EDEDED',
  }
});
