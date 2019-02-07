import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class Post extends React.Component {
	render(){
    return (
      <View style={styles.main}>
        <TouchableHighlight activeOpacity={0.7} underlayColor="#ffffff">
          <Text>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    );
	}
}

const styles = StyleSheet.create({
    main: {
      padding: 10,
      height: 80,
      borderColor: "black",
      borderBottomWidth: 2,
    },
})
