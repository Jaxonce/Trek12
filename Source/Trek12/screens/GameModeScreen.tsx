import * as React from "react";
import { View, Text, ImageBackground, StyleSheet} from "react-native";

export default function GameModeScreen() {
    return(
        <ImageBackground source={require(".././assets/bg_game.png")} style={styles.backgroundImage}>
            <View>
                <Text>GameMode</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    position: "relative",
    transform:[{translateX: 0}, {translateY: 0}]
    },
    text: {
        fontSize: parseFloat('200') / 100 * 16,
        fontFamily: "Sketch"
    }
});