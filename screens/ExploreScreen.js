import React, {Component} from 'react';
import { StyleSheet, ScrollView, TouchableHighlight, View, Text, SafeAreaView } from 'react-native';

import { colors, fonts } from '../theme/variables'; // Color scheme
import TopBannerBar from '../components/TopBannerBar';
import EventContainer from '../components/explore_screen/EventContainer';

export default class ExploreScreen extends Component {
	render() {
		return (
			<SafeAreaView style={{flex: 1, backgroundColor: colors.THEME_COLOR}}>
      	<TopBannerBar label= "Explore" />
		  	<View style={styles.mainAreaContainer}>
          <ScrollView 
            horizontal={true}
            pagingEnabled={true}
            style={styles.swipeWindow}
          >
            <EventContainer 
              eventTitle="Grizzly Peak" 
              eventDescription="Located in the Berkeley Hills, this vantage point gives a spectacular view spanning from downtown Berkeley to San Francisco across the Bay Bridge."
              eventType="Place"
            />
            <EventContainer 
              eventTitle="Rocco's Tavern" 
              eventDescription=""
              eventType=""
            />
            <EventContainer
              eventTitle="Rocco's Tavern" 
              eventDescription=""
              eventType=""
            />
            <EventContainer 
              eventTitle="Rocco's Tavern" 
              eventDescription=""
              eventType=""
            />
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
