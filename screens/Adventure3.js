import React from "react";
import { Text, Animated, View, StyleSheet, Image, ScrollView } from "react-native";

export default function App() {
return (
  <ScrollView style={styles.container}>

    <View style={styles.topContainer}>
      <Text style={[styles.text, styles.textTitle]}>Trip #3</Text>
      <Image source={require('../assets/logo.png')} style={styles.logoImage}
      />
      <Text style={[styles.text]}>Silent Lake Provincial Park</Text>
    </View>

    <View style={styles.middleContainer}>
      <Image source={require('../assets/images/trip-3.jpg')} style={styles.tripImage}
      />
    </View>

    <View style={styles.bottomContainer}>
      <Text style={[styles.text, styles.textDate]}>May 17, 2020</Text>
      <Text style={[styles.textDescription]}>Silent Lake Provincial Park is a park located on Silent Lake in eastern Ontario near Bancroft, Ontario. It occupies an area of 1,450 hectares (3,600 acres). Silent Lake is located in the Canadian Shield. Recreational activities include swimming, hiking, cycling, kayaking, and canoeing; in winter, there is cross-country skiing. Canoe and kayak rentals are available within this park. Yurt camping is available within this park. There are no motors (gas or electric) allowed on Silent Lake, so it stays true to its peaceful name. There are two beaches, and a great selection of campsites to fit the needs of novice to more advanced campers. During winter in Silent Lake Provincial Park, there is a huge selection of cross-country ski-trails like those we enjoyed in Arrowhead Provincial Park in Huntsville recently. Silent Lake summers offer a more available and serviced experience than the backcountry camping in Kawartha Highlands Provincial Park.</Text>
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
    margin: 20,
    color: "white",
    fontWeight: "bold",
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





