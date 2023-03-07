import React, {useRef, useEffect} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';

export default function PauseScreen() {
    return(
        <ImageBackground source={require(".././assets/bg_wood.jpg")} style={styles.backgroundImage}/>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {

    }
});