import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";

import MapView, { Marker } from "react-native-maps";
import AnimatedMarker from './AnimatedMarker';

export default class Markers extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    animation: new Animated.Value(1),
    markers: [
      {
       latlng:{
        latitude: 37.78825,
        longitude: -122.4324,
       },
       title:'Evim',
       description: 'Ümraniye'
      },
      {
        latlng:{
         latitude: 37.76825,
         longitude: -122.4324,
        },
        title:'Evim2',
        description: 'Ümraniye2'
       },
       {
        latlng:{
         latitude: 37.74825,
         longitude: -122.4324,
        },
        title:'Evim3',
        description: 'Ümraniye3'
       },
    ],
  };

//   componentDidMount(){
//       this.startAnimation();
//   }

  startAnimation = () =>{
      Animated.loop(
          Animated.sequence([
              Animated.timing(this.state.animation, {
                  toValue:0.01,
                  duration:1000
              }),
              Animated.timing(this.state.animation, {
                toValue:0.01,
                duration:1000
            }),
          ])
      ).start();
  }

  render() {
      const animatedStyles = {
          opacity:this.state.animation,
          transform:[{
              scale:this.state.animation
          }]
      };
    return (
      <View style={styles.container}>
        <MapView 
        style={styles.map} 
        region={this.state.region}
        >
         {this.state.markers.map((marker,key) => (
              <Marker
              key={key}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              style={{width:32,height:32}}
            //   style={{width:32,height:32,animatedStyles}}
              image={require('../../assets/message128.png')}
            />
         ))}
        </MapView>
      </View>
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
