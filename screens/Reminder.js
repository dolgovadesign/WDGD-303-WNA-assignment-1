import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, Animated, View, Button } from "react-native";
import { useIsFocused } from "@react-navigation/native"; 

export default function Reminder(props) {
    const spinAnim = useRef(new Animated.Value(0)).current; //Initial value for opacity: 0
    const isFocused = useIsFocused();
    
    const startAnim = () => {
      spinAnim.setValue(0)
      Animated.timing(spinAnim, {
        toValue: 11,
        duration: 1111,
        useNativeDriver: true,
      }).start();
    };
    useEffect(() => {
    startAnim();
    return ()=> spinAnim.setValue(0)
  }, [spinAnim, isFocused]);  

  return (
    <View style={{flex:1, alignItems:"center", backgroundColor: "#425e17", justifyContent: "center" }}>
    <Animated.View
    style={{
      width: 333,
      height: 400,
      backgroundColor:"#425e17",
      borderWidth: 2,
      borderRadius: 23,
      borderColor: "white",
      transform: [
        {
          rotate: spinAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"],
          }),
        },
      ],
    }}
    >
      <Text style={{ color: "white", textAlign: "center", margin: 15, fontSize:22 }}>
        “Every choice you make is either an expression of love or an expression of fear. There is no other choice.”
      </Text>
      <Text style={{ color: "white", textAlign: "center", margin: 15, fontSize:17 }}>
        "When you want only love, you will see nothing else." 
      </Text>
      <Text style={{ color: "white", textAlign: "center", margin: 15, fontSize:22 }}>
        “You who want peace can only find it by complete forgiveness.”
      </Text>
      <Text style={{ color: "white", textAlign: "center", margin: 15, fontSize:17 }}>
        "Help me perform whatever miracles you want of me today." 
      </Text>
    </Animated.View>
    <Button  title="╰☆╮Click to Rotate╰☆╮
"
             onPress={startAnim}
             color="yellow"
             accessibilityLabel="Rotate quotes" />
    </View>
    
    );
  }
  