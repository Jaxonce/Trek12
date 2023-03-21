import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ButtonMenu from '../components/ButtonMenu';

export default function PauseScreen({navigation}) {
    const goToResume = () => {navigation.navigate('GameScreen')};
    const goToOptions = () => {navigation.navigate('OptionsScreen')};
    const goToQuit = () => {navigation.navigate('HomeScreen')};
    return(
        <ImageBackground source={require(".././assets/bg_wood.jpg")} style={styles.backgroundImage}>
            <View style={styles.container}>
                <ButtonMenu onPress={()=>goToResume()}  text='Resume'/>
                <View style={{marginTop: 10}}/>
                <ButtonMenu onPress={()=>goToOptions()} text='Options'/>
                <View style={{marginTop: 10}}/>
                <ButtonMenu onPress={()=>goToQuit()} text='Quit'/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
    }
});