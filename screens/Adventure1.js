import React from "react";
import { Text, Animated, View, StyleSheet, Image, ScrollView, Button } from "react-native";
export default function App() {
  
return (
  <ScrollView style={styles.container}>

    <View style={styles.topContainer}>
      <Text style={[styles.text, styles.textTitle]}>Trip #1</Text>
      <Image source={require('../assets/logo.png')} style={styles.logoImage}
      />
      <Text style={[styles.text]}>Dundas Peak, Hamilton</Text>
    </View>

    <View style={styles.middleContainer}>
      <Image source={require('../assets/images/trip-1.jpg')} style={styles.tripImage}
      />
    </View>

    <View style={styles.bottomContainer}>
      <Text style={[styles.text, styles.textDate]}>February 18, 2020</Text>
      <Text style={[styles.textDescription]}>Dundas is near to the Dundas Peak, which is located in the abutting district of Flamborough. The Peak overlooks Dundas from The Bruce Trail in Flamborough and has become one of the most visited parts of Dundas. Hikers can take the Bruce Trail from Tews or Webster's Falls to the peak and look over Dundas and West Hamilton. In Hamilton, take Main Street West past McMaster University and straight into Dundas. Take it straight past the library and up the hill. Continue straight through a Y-junction of sorts and then turn right on Harvest Rd. There are signs pointing in the direction of the falls. The parking lot is on the right-hand side of the road.
From May 12, 2018 to October 28, 2018 (weather permitting), parking on weekends and holiday Mondays will be located at 1000 Highway 5 West at Christie Lake Conservation Area. A shuttle service will drop visitors off at Tew Falls and Greensville Optimist Park to access Webster Falls. No parking will be permitted in HCA lots during these peak periods.
Tews Falls can no longer be reached from Webster's falls via the Bruce Trail, but by a 5-minute drive down Harvest Road to the Tews Falls parking area.
From Toronto you can go West on Dundas Street (Highway #5) until you turn south on Brock Street (To Greensville), left on Harvest road. 
      </Text>

    </View>

  </ScrollView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#AC5A27",
  },

  topContainer: {
    flex: 3,
    backgroundColor: "#425e17",
    justifyContent: "center",
    alignItems: "center",
  },

  middleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },

  bottomContainer: {
    flex: 3,
    backgroundColor: "#AC5A27",
  },
  
  text: {
    color: "white",
    fontWeight: "bold",
    margin: 20,
  },

  textTitle: {
    color: "white",
    fontSize: 27,
    marginTop: 42,
    fontWeight: "bold",
  },

  textDate: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 20,
    marginRight: 20,
  },

  textDescription: {
    color: "white",
    fontSize: 15,
    marginTop: 10, 
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },

  logoImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
  },

  tripImage: {
    height: 250,
    width: 400,
  },

});
