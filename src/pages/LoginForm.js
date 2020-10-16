import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LoginButton";

export default class LoginForm extends Component {
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.signInText}>Sign In</Text>
        <LoginInput 
        returnKeyType={"next"}
        autoCapitalize="none" 
        placeholder="Username"
        onSubmitEditing={()=>this.passwordInput.focus()} />
        <LoginInput
        returnKeyType={"go"}
        secureTextEntry={true} 
        placeholder="Password" 
        inputRef={input =>this.passwordInput = input  } />

        <LoginButton 
        textColor={"#f2f2f2"}
        bgColor={"#1572de"}
        text={"Sign In Now"} 
        //onPress={() => console.log("Ask me later pressed")}
        onPress={() => this.props.navigation.navigate('GeneralMapPage')}
       
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInText: {
    marginVertical: 10,
    fontSize: 14,
    color: "#333",
  },
});
