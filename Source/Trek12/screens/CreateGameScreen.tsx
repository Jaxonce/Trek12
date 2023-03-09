import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ButtonBack from '../components/ButtonBack';
import CodeBox from '../components/CodeBox';

export default function CreateGameScreen({navigation}) {
    const backToHome = () => {navigation.navigate("HomeScreen")}
    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.ButtonBack}>
                <ButtonBack onPress={()=>backToHome()}></ButtonBack>
            </View>
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
    ButtonBack: {
        width:"100%",
        height:"auto",
        alignItems: "flex-start",
    }
});