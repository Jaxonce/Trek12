import React from 'react';
import { View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';

export default function PauseButton({navigation : {navigate}}) {
    return (
        <ImageBackground source={require("../assets/bg_wood.jpg")} style={styles.backgroundImage} imageStyle={{borderRadius: 20}}>
            <Pressable onPress={() => navigate('PauseScreen')}>
                <View style={styles.iconContainer}>
                    <Image source={require("../assets/icon-pause-512.webp")} style={styles.icon}/>
                </View>
            </Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        position: "absolute",
        top: 10,
        right: 10,
        width: 60,
        height: 60,
    },

    iconContainer: {
        position: "absolute",
        left: "50%",
        transform: [{ translateX: -23 }, { translateY: 5 }],
      },

    icon: {
        width: 50,
        height: 50,
    }
});