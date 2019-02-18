import React, {Component} from 'react';
import { Text, Dimensions, View, StyleSheet, TouchableHighlight, Image} from 'react-native';

var device_width = Dimensions.get('window').width;
import { colors, fonts } from '../../theme/variables'; // Color scheme

export default class EventContainer extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<View style={styles.parentContainer}>
				<View style={styles.eventContainer}>
          <View style={styles.eventPhotoContainer}>
            <Image style={styles.eventPhoto} source={require('../../assets/DEMO_grizzly_peak.jpg')}/>
          </View>
          <View style={styles.eventInformationContainer}>
            <View style={styles.eventInformationTitleContainer}>
              <Text style={styles.eventTitleText}>{this.props.eventTitle}</Text>
            </View>
            <View style={styles.horizontalDividerLine}/>
            <View style={styles.eventInformationTypeContainer}>
              <Text style={styles.eventInformationTypeText}>{this.props.eventType}</Text>
            </View>
            <View style={styles.eventInformationDescriptionContainer}>
              <Text>{this.props.eventDescription}</Text>
            </View>
          </View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    parentContainer: {
    	flex: 1,
    	width: device_width,
      backgroundColor: '#EDEDED',
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    eventContainer: {
    	width: '86%',
    	height: '90%',
    	backgroundColor: 'white',
    	borderRadius: 14,
      
      shadowOffset:{  width: -1,  height: 2,  },
      shadowColor: 'black',
      shadowOpacity: .2,
    },
    eventPhotoContainer: {
      height: '70%',
      width: '100%',
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      overflow: 'hidden',
    }, 
    eventPhoto: {
      width: '100%',
      height: '100%',
    },
    eventInformationContainer: {
      height: '30%',
      width: '100%',

      alignItems: 'center',
      justifyContent: 'center'
    },
    eventInformationTitleContainer: {
      width: '100%',
      height: '24%',
      paddingTop: '2%',
      paddingLeft: '4%',
      paddingRight: '4%',
      paddingBottom: '1%',
    },
    eventTitleText: {
      fontSize: 22,
    },
    horizontalDividerLine: {
      height: '2%',
      width: '92%',
      borderBottomColor: colors.THEME_COLOR,
      borderBottomWidth: 2,
    },
    eventInformationTypeContainer: {
      width: '100%',
      height: '10%',
      paddingLeft: '4%',
      paddingRight: '4%',
      paddingTop: '1%',
    },
    eventInformationTypeText: {
      color: '#2294E3',
    },
    eventInformationDescriptionContainer: {
      height:'60%',
      width: '100%',
      paddingTop: '2%',
      paddingLeft: '4%',
      paddingRight: '4%',
      paddingBottom: '2%',
    }
})
