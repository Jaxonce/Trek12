import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import ButtonNav from '../components/ButtonNav';
import {OperationGrid} from '../components/OperationGrid';

export default function HomeScreen() {
    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <OperationGrid></OperationGrid>
            <View style={styles.container}>
                <ButtonNav text='Creer une partie'></ButtonNav>
                <ButtonNav text='Rejoindre une partie'></ButtonNav>
            </View>
            
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
