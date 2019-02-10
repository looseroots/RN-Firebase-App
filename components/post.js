import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class Post extends React.Component {
  constructor(props){
    super(props);
  }
	render(){
    postTitle = "Surfing at Pacifica";
    postAuthor = "Cody Swain";
    postPhoto = "Photo goes here";
    postBodyText = this.props.text;

    return (
      <View style={styles.main}>

        <View style={styles.postHeader}>
          <View style={styles.postHeaderIcon}>
            <Text>Insert icon here</Text>
          </View>
          <View style={styles.postHeaderText}>
            <Text>{postTitle}</Text>
            <Text>{postAuthor}</Text>
          </View>
        </View>
        
        <View style={styles.postPhoto}>
          <Text>Photo will go here</Text>
        </View>

        <View style={styles.postFooter}>
          <Text>{postBodyText}</Text>
        </View>

      </View>
    );
	}
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: 'white',
      borderColor: "black",
      padding: 10,
      height: 340,
      marginTop: 5,
      marginBottom: 5,
    },
    postHeader : {
      height: '18%',
      flexDirection: 'row',
    },
    postHeaderIcon: {
      width: '20%',
      backgroundColor: 'grey',

      padding: 10,
    },
    postHeaderText: {
      width: '80%',
      backgroundColor: 'lightgrey',

      padding: 10,
    },
    postPhoto: {
      height: '72%',
      backgroundColor: 'lightblue',

      padding: 10,
    },
    postFooter: {
      height: '10%',
      backgroundColor: 'pink',

      padding: 6,
    },
})
