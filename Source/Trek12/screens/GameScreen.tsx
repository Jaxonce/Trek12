import React, {useRef, useEffect} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions, ImageBackground } from 'react-native';


export default function GameScreen() {
    return (
        <ImageBackground source={require(".././assets/bg_game.png")} style={styles.backgroundImage}>
            <Text style={{fontFamily: "Sketch", fontSize: 30,}}>1/19</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    jusrifyContent: 'center',
    alignItems: 'center',
    transform:[{translateX: 0}, {translateY: 0}]
    },
});




