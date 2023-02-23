import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import CodeBox from '../components/CodeBox';

export default function CreateGameScreen() {
    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <CodeBox text="Votre code est"></CodeBox>
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