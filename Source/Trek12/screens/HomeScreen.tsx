import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import ButtonNav from '../components/ButtonNav';
import InputBox from '../components/InputBox';


export default function HomeScreen({ navigation }) {
    const goToNewPlay = () => { navigation.navigate("CreateGameScreen") }
    const goToOther = () => { navigation.navigate("JoinGameScreen") }

    const [scrollEnabled, setScrollEnabled] = useState(false);

    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                scrollEnabled={scrollEnabled}
                contentContainerStyle={styles.scrollView}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 0}
                >
                    <View style={styles.container}>
                        <ButtonNav onPress={() => goToNewPlay()} text='Creer une partie' />
                        <ButtonNav onPress={() => goToOther()} text='Rejoindre une partie' />
                    </View>
                    <InputBox text=""></InputBox>
                </KeyboardAvoidingView>
            </ScrollView>
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
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
});