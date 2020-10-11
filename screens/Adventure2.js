import React from "react";
import { Text, Animated, View, StyleSheet, Image, ScrollView } from "react-native";
export default function App() {

return (
  <ScrollView style={styles.container}>

    <View style={styles.topContainer}>
      <Text style={[styles.text, styles.textTitle]}>Trip #2</Text>
      <Image source={require('../assets/logo.png')} style={styles.logoImage}
      />
      <Text style={[styles.text]}>Guelph Lake Conservation Area</Text>
    </View>

    <View style={styles.middleContainer}>
      <Image source={require('../assets/images/trip-2.jpg')} style={styles.tripImage}
      />
    </View>

    <View style={styles.bottomContainer}>
      <Text style={[styles.text, styles.textDate]}>March 22, 2020</Text>
      <Text style={[styles.textDescription]}>Guelph Lake is a man-made reservoir on the Speed River, in the Township of Guelph/Eramosa. It is located upriver and slightly northeast of the city of Guelph, Ontario. The reservoir was created in 1974, with the construction of the Guelph Lake dam. The site is part of a 1,608 hectare (3,971 acre) conservation area maintained by the Grand River Conservation Authority. Ever since the reservoir was created in 1974, the Guelph Lake conservation area has been popular for swimming and various beach activities. There are changing facilities, and two man-made sand beaches at Guelph Lake; however, the park does not maintain a regular lifeguard patrol.
The Guelph Lake Conservation Area has a camping area with 104 serviced sites with electricity and water and about 190 un-serviced sites in a variety of locations, including riverfront and forest. Approximately five kilometres of hiking and biking trails wind their way through a wide variety of natural wooded areas as well as tall stands of reforestation inside the conservation area. In addition, there is a recreational trail from downtown Guelph that follows the river to Guelph Lake.
The conservation area includes two beaches, and a venue for outdoor concerts. The concert area, which has a living roof, is located on a peninsula at the centre of the lake, and is the site of the annual Hillside Festival.
No outboard motor boats are allowed on Guelph Lake. The only motorized boats permitted on the lake are Jon boats, which are small row boat-style boats with an electric trolling motor. They can be rented from the boathouse at the main beach. Canoes and kayaks are popular on the lake and can also be rented from the boathouse.
Since the founding of the Guelph Rowing Club in 1998, the sport of rowing has grown in popularity at Guelph Lake. From 2000, the club has also served as home to the University of Guelph "Gryphons" Rowing Team. In 2008, a permanent boathouse was constructed on the shores of the lake. This boathouse provides facilities for a thriving community of competitive and recreational rowers.
Guelph Lake is home to the Guelph community boating club (GCBC) which provides a sailing facility, co-op fleet and sailboat racing. GCBC is also home to Snipe fleet 877, Canada's largest Snipe Fleet and hosts numerous sailing regattas throughout the year.</Text>
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
