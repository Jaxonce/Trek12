import React, {useRef, useEffect} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';
import PauseButton from '../components/PauseButton';
import DiceButton from '../components/DiceButton';


export default function GameScreen({navigation}) {
    return (
        <ImageBackground source={require(".././assets/bg_game.png")} style={styles.backgroundImage}>
            <Text style={{fontFamily: "Sketch", fontSize: 30, top: 15, left: 340}}>1/19</Text>
            <PauseButton navigation={navigation}></PauseButton>
            <DiceButton backgroundColor="yellow" number={0} top="-7%" left="50%"/>
            <DiceButton backgroundColor="red" number={1} top="-23%" left="58%"/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    transform:[{translateX: 0}, {translateY: 0}]
    },
});




