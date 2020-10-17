import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";


export default class AnimatedMarker extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
