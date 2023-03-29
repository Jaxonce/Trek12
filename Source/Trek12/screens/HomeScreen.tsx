import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, ImageBackground, Touchable, ScrollView, KeyboardAvoidingView, Platform, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonNav from '../components/ButtonNav';
import InputBox from '../components/InputBox';
import { useNavigation } from '@react-navigation/native';
import StartNavigation from '../components/StartNavigation';
import JoinGameScreen from './JoinGameScreen';
import { useSelector, useDispatch } from 'react-redux';
import { getPlayer } from '../API/Thunk';



export default function HomeScreen({ navigation }) {
    //@ts-ignore
    const player = useSelector(state => state.appReducer.player)
    const dispatch = useDispatch()

    const goToNewPlay = () => { navigation.navigate("CreateGameScreen") }
    const goToOther = () => { navigation.navigate("JoinGameScreen") }

    const [scrollEnabled, setScrollEnabled] = useState(false);

    useEffect(() => {
        const loadPlayer = async () => {
            //@ts-ignore
            await dispatch(getPlayer())
        }
        loadPlayer()
    }, [dispatch])

    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                scrollEnabled={scrollEnabled}
                contentContainerStyle={styles.scrollView}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
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