import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import CodeBoxInput from '../components/CodeBoxInput';
import ButtonOk from '../components/ButtonOK';

export default function JoinGameScreen() {
    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <CodeBoxInput text="Rentrer le code"/>
            <ButtonOk/>
        </ImageBackground>
        
    );
    }

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',

        transform: [{ translateX: 0 }, { translateY: 0 }]
        },
});