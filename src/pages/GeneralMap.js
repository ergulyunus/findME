import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
//import Region from "../components/Region";
import Markers from "../components/Markers";

export default class GeneralMap extends Component {
  render() {
    return (
     <Markers />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  map: {
    flex: 1,
  },
});
