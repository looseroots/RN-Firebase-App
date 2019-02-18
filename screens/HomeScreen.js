import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import { ScrollView, FlatList, StyleSheet, TouchableHighlight, View, Text, SafeAreaView } from 'react-native';

import Post from '../components/post';

// Color scheme
import { colors, fonts } from '../theme/variables';
import TopBannerBar from '../components/TopBannerBar';

export default class HomeScreen extends React.Component {
	// Constructor used to initialize state of component
	// and binding methods, so they may be passed as props to other components
	constructor(props){
		super(props);
	}

	// State variable holds relevant data for state of component
	state = {
		posts: [
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
			{key:"Example posts will go here. Try scrolling down. Cody is going to work on this page. "}, 
		],
	};

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: colors.THEME_COLOR}}>
      	<TopBannerBar label= "LooseRoots" />
		  	<View style={styles.mainArea}>
		    	<ScrollView>
						<FlatList
	  					data={this.state.posts}
	  					keyExtractor={(item, index) => index.toString()}
	  					renderItem={ ({item}) => <Post text={item.key} />}			
						/>
					</ScrollView>
		  	</View>
			</SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  mainArea: {
  	flex: 1,
  	backgroundColor:'#EDEDED',
  }
});