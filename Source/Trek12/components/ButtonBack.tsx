import * as React from "react";
import { View, Text, StyleSheet, Button, Pressable, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";


//buttonNav props
type ButtonBackProps = {
    onPress : any;
}

export default function ButtonBack(props: ButtonBackProps){
  return (
    <ImageBackground source={require("../assets/bg_wood.jpg")} imageStyle={{borderRadius:22}} style={styles.background}>
        <Pressable onPress={props.onPress} style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.8
                : 1,
              backgroundColor: '#2277ee'
            },
            styles.bigButton,
          ]}>
            
            <Image source={require("../assets/arrowshape.backward.png")}></Image>
            
          </Pressable>
        </ImageBackground>
    );
};

function onPress() {
  
}

const styles = StyleSheet.create({
    bigButton: {
        alignSelf:"flex-start",
        backgroundColor: "transparent",
        borderRadius: 22,
        boxShadow: '0 12px 6px 0 rgba(255, 255, 255, 1)',
        padding: 10,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        color: 'black', 
        fontSize: 30, 
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Sketch',
    },
    background: {
        position : 'absolute',
        left: 30,
        top:20,
    }
});