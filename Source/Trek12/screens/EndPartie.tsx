import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonNav from '../components/ButtonNav';
import InputBox from '../components/InputBox';
import { useNavigation } from '@react-navigation/native';
import StartNavigation from '../components/StartNavigation';
import JoinGameScreen from './JoinGameScreen';
import EndOperation from '../components/EndOperationGrid';



export default function EndScreen({navigation}) {
    const goToNewPlay = () => {navigation.navigate("CreateGameScreen")}
    const goToOther = () => {navigation.navigate("JoinGameScreen")}
    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <EndOperation></EndOperation>
        </ImageBackground>
        
    );
    }

const styles = StyleSheet.create({
    image: {
        flex: 0,
        alignItems:'flex-start',
        justifyContent: "flex-end",
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        transform: [{ translateX: 0 }, { translateY: 0 }]
      },
});
