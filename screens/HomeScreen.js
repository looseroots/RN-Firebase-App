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
			{key:"Example posts will go here. Try scrolling down. \n\nCody is going to work on this page. "}, 
			{key:"The science of today is the technology of tomorrow."},
			{key:"Science is a beautiful gift to humanity; we should not distort it."},
			{key:"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."},
			{key:"Science is a way of thinking much more than it is a body of knowledge."},
			{key:"With the new day comes new strength and new thoughts."},
			{key:"Good, better, best. Never let it rest. 'Til your good is better and your better is best."},
			{key:"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."}, 
			{key:"Change your life today. Don't gamble on the future, act now, without delay."},
			{key:"Science is a beautiful gift to humanity; we should not distort it."},
			{key:"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."},
			{key:"Science is a way of thinking much more than it is a body of knowledge."},
			{key:"Only I can change my life. No one can do it for me."},
			{key:"Good, better, best. Never let it rest. 'Til your good is better and your better is best."},
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
  	backgroundColor:'white',
  }
});