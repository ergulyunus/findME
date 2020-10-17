import React, { Component } from "react";
import GeneralMap from "./src/pages/GeneralMap";
import Login from "./src/pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GeneralMapPage" component={GeneralMap} />
      <Stack.Screen name="LoginPage" component={Login} />
    </Stack.Navigator>
  );
}
