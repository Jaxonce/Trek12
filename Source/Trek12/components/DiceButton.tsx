import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';

export default function DiceButton({backgroundColor, number, top, left}) {
    return (
        <ImageBackground style={[styles.backgroundButton, {backgroundColor, top, left}]}>
            <Text style={{fontFamily: "Sketch", fontSize: 40, marginTop: 5}}>{number}</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'yellow', 
        height: 60, 
        width: 60,
        borderRadius: 20,
    }
});