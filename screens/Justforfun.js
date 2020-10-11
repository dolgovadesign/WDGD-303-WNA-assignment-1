import React, { useRef, useEffect } from "react";
import { Dimensions, Text, Animated, View, StyleSheet, PanResponder, Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function Justforfun(props) {
    const isFocused = useIsFocused();
    const screen = Dimensions.get("window");
    const bottomPanelHeight = 40;
    const ballOffsetY = 11;
    const centerY = (screen.height / 2) - (styles.backgroundImage.height / 2) - bottomPanelHeight;
    const centerX = (screen.width / 2) - (styles.backgroundImage.width / 2);
    const position = new Animated.ValueXY({ x: 0, y: ballOffsetY });
  
    //position.addListener((p) => console.log(`x: ${p.x}, y: ${p.y}`));
  
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x, dy: position.y }], { useNativeDriver: false }),
        onPanResponderGrant: () => position.setOffset({ x: position.x._value,y: ballOffsetY, }),
        onPanResponderRelease: () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
        }).start();
        },
    });
  
    useEffect(() => {
        return () => position.setValue({ x: 0, y: 0 });
    },
    [isFocused]);

    return (
        <View style={[styles.container]}>
            <Image source={require('../assets/images/background.png')} style={styles.backgroundImage}  
            />
        
        <View style={[styles.backgroundImage, { top: centerY, right: centerX}]}>
            <Animated.View
                style={[styles.logo, position.getLayout()]}
                {...panResponder.panHandlers}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </Animated.View>    
        </View>
        <View style={[styles.bottomContainer]}>
            <Text style={[styles.text, styles.textTitle]}>PEACE
            </Text>
        </View>    
        </View>  
        ); 
    };
  
    const styles = StyleSheet.create({
        container: {
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#703c2c",
        },

        bottomContainer: {
            alignItems: "center",
            backgroundColor: "#703c2c",
            marginTop: 180,
        },
  
        backgroundImage: {
            flex: 1,
            height: 120,
            width: 155,
            position: "absolute",
            alignItems: "center",
        },

        text: {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 50,
            color: "white",
        },
  
        logo: {
            width: 65,
            height: 65,
        },
  });
    
  