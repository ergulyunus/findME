import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class LoginInput extends Component {

    state = {
        text:''
    };

  render() {
    return (
      <View>
        <TextInput {...this.props} 
        placeholderTextColor='#ddd'
        style={styles.input}
        value={this.state.text}
        ref={this.props.inputRef}
        onChangeText={text => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },

  input:{
      height:40,
      paddingHorizontal:5,
      borderWidth:2,
      borderRadius: 4,
      borderColor:'#f1f1f1',
      color:'#999',
      marginBottom:10,
      fontSize:14,
      fontWeight:'600'
  }
});
