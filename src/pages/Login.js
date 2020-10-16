import React,{Component} from 'react';
import { ScrollView, StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';


export default class Login extends Component {
  render() {
      return(
        <View style={styles.container}>
        <View style = {styles.headBackground}/>
        <KeyboardAvoidingView behavior={"position"}>
        <View>
          <Text style={styles.logo}>findME</Text>
          <Text style={styles.logoDesc}>Find Location and Read Message</Text>
        </View>
      <ScrollView>
        <View style={styles.loginArea}>
        <Text style={styles.loginAreaTitle}> Login </Text>
        <Text style={styles.loginAreaDesc}> Enter Email or Phone Number 
        </Text>

        <LoginForm/>

        </View>
      </ScrollView>
      </KeyboardAvoidingView>
      </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical:80
  },
  headBackground : {
    position:'absolute',
    top:0,
    left:0,
    height:250,
    width:'100%',
    backgroundColor: '#1572de'
  },
  logo:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#f2f2f2',
    fontSize:50
  },
  logoDesc:{
    textAlign:'center',
    color:'#f2f2f2'
  },
  loginArea:{
    marginHorizontal:40,
    marginVertical:40,
    backgroundColor:'#fff',
    padding:20,
    borderRadius:10,
    shadowColor:'black',
    shadowOpacity: .2,
    shadowRadius: 3,
    shadowOffset:{
      width:0,
      height:2
    },
    elevation : 3
  },
  loginAreaTitle:{
      fontSize:25,
      textAlign:'center',
  },
  loginAreaDesc:{
      fontSize:10,
      textAlign:'center',
      color:'#7e868f',
      marginVertical:10
  }
  
});