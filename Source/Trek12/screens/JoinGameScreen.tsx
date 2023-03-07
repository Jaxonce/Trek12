import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import CodeBoxInput from '../components/CodeBoxInput';
import ButtonOk from '../components/ButtonOK';
import ButtonBack from '../components/ButtonBack';

export default function JoinGameScreen({navigation}) {
    const backToHome = () => {navigation.navigate("Home")}
    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.ButtonBack}>
                <ButtonBack onPress={()=>backToHome()}></ButtonBack>
            </View>
            <CodeBoxInput text="Rentrer le code"/>
            <ButtonOk/>
        </ImageBackground>
        
    );
    }

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        transform: [{ translateX: 0 }, { translateY: 0 }]
    },
    ButtonBack: {
        width:"100%",
        height:"auto",
        alignItems: "flex-start",
    }
});