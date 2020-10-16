import React, { Component } from "react";
import { StyleSheet,Text ,TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';

export default class LoginButton extends Component {
  render() {
    
    const {color, backgroundColor} = this.props;

    return (
      <TouchableOpacity onPress={this.props.onPress} style={[styles.loginButton, {backgroundColor:this.props.bgColor}]}>
      <Text style={[styles.text,{color:this.props.textColor}]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

LoginButton.PropTypes = {
    text : PropTypes.string.isRequired,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
    onPress:PropTypes.onPress
};


const styles = StyleSheet.create({
 loginButton:{
     paddingVertical:15,
     paddingHorizontal:10,
     borderRadius:3,
     alignItems:'center'
 },
 text:{
     fontSize:14
 }
});
