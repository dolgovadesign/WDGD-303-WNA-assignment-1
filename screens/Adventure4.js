import React from "react";
import { Text, Animated, View, StyleSheet, Image, ScrollView } from "react-native";

export default function App() {
return (
  <ScrollView style={styles.container}>

    <View style={styles.topContainer}>
      <Text style={[styles.text, styles.textTitle]}>Trip #4</Text>
      <Image source={require('../assets/logo.png')} style={styles.logoImage}
      />
      <Text style={[styles.text]}>Lake Ontario</Text>
    </View>

    <View style={styles.middleContainer}>
      <Image source={require('../assets/images/trip-4.jpg')} style={styles.tripImage}
      />
    </View>

    <View style={styles.bottomContainer}>
      <Text style={[styles.text, styles.textDate]}>June 15, 2020</Text>
      <Text style={[styles.textDescription]}>Lake Ontario is one of the five Great Lakes of North America. It is surrounded on the north, west, and southwest by the Canadian province of Ontario, and on the south and east by the American state of New York, whose water boundaries meet in the middle of the lake. Ontario, Canada's most populous province, was named for the lake. Lake Ontario is the easternmost of the Great Lakes and the smallest in surface area (7,340 sq mi, 18,960 km2), although it exceeds Lake Erie in volume (393 cu mi, 1,639 km3). It is the 13th largest lake in the world. When its islands are included, the lake's shoreline is 712 miles (1,146 km) long. As the last lake in the Great Lakes' hydrologic chain, Lake Ontario has the lowest mean surface elevation of the lakes at 243 feet (74 m) above sea level; 326 feet (99 m) lower than its neighbor upstream. Its maximum length is 193 statute miles (311 kilometres; 168 nautical miles) and its maximum width is 53 statute miles (85 km; 46 nmi). The lake's average depth is 47 fathoms 1 foot (283 ft; 86 m), with a maximum depth of 133 fathoms 4 feet (802 ft; 244 m).[6][7] The lake's primary source is the Niagara River, draining Lake Erie, with the St. Lawrence River serving as the outlet. The drainage basin covers 24,720 square miles (64,030 km2). As with all the Great Lakes, water levels change both within the year (owing to seasonal changes in water input) and among years (owing to longer-term trends in precipitation). These water level fluctuations are an integral part of lake ecology, and produce and maintain extensive wetlands. The lake also has an important freshwater fishery, although it has been negatively affected by factors including over-fishing, water pollution and invasive species. </Text>
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
