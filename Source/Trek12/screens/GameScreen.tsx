import React, {useRef, useEffect} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';


export default function GameScreen() {
    const { width, height } = Dimensions.get('window');
    return (
        <View style={styles.backgroundImage}>
            <Image source={require(".././assets/bg_game.png")} style={{width, height}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // L'image de fond
    source: require('.././assets/bg_game.png'),
    },
});




