import * as React from "react";
import { View, Text, ImageBackground, StyleSheet} from "react-native";
import ButtonGameMode from "../components/ButtonGameMode";

export default function GameModeScreen({navigation}) {
    const goToExpress = () => { navigation.navigate("GameScreen") }

    return(
        <ImageBackground source={require(".././assets/bg.png")} style={styles.backgroundImage}>
            <View style={styles.containerButton}>
                {/* <Text>GameMode</Text> */}
                <ButtonGameMode onPress={() => goToExpress()} text='Express' pathImg='dunai'>
                </ButtonGameMode>
                <ButtonGameMode text='Express' pathImg='kagkot'>
                </ButtonGameMode>
                <ButtonGameMode text='Express' pathImg='dhaulagiri'>
                </ButtonGameMode>
            </View>
            {/* <View style={styles.containerButton}>

            </View> */}
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
    },
    containerButton: {
        top: "7.5%",
        left: "11%",
        width: "90%",
        height: "70%",
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});