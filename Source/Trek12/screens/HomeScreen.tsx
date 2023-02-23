import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonNav from '../components/ButtonNav';
import InputBox from '../components/InputBox';
import { useNavigation } from '@react-navigation/native';
import StartNavigation from '../components/StartNavigation';
import JoinGameScreen from './JoinGameScreen';



export default function HomeScreen({navigation}) {
    const nav = {navigation};
    const goToNewPlay = () => {navigation.navigate("Home")}
    const goToOther = () => {navigation.navigate("Home2")}
    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <ButtonNav onPress={()=>goToNewPlay()}  text='Creer une partie'/>
                
                <ButtonNav onPress={()=>goToOther()} text='Rejoindre une partie'/>
            </View>
            <InputBox text=""></InputBox>
        </ImageBackground>
        
    );
    }

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        transform: [{ translateX: 0 }, { translateY: 0 }]
      },
});
