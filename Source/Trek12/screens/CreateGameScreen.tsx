import * as React from 'react';
import { View, StyleSheet, ImageBackground, Button } from 'react-native';
import ButtonBack from '../components/ButtonBack';
import ButtonOK from '../components/ButtonOK';
import CodeBox from '../components/CodeBox';
import { setGame } from '../redux/actions/actionSetGame';
import store from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayersList } from '../redux/actions/actionSetPlayersList';
import { getPlayersList } from '../API/Thunk';
import { useEffect } from 'react';


export default function CreateGameScreen({ navigation }) {
    const backToHome = () => { navigation.navigate("HomeScreen") }

    const [code, setCode] = React.useState('');

    React.useEffect(() => {
        setCode(generateCode());
    }, []);

    function generateCode() {
        const length = 6;
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const dispatch = useDispatch()

    useEffect(() => {
        const loadPlayers = async () => {
            await dispatch<any>(getPlayersList())
        };
        loadPlayers()
    }, [dispatch])


    const onCreateGameButtonClick = () => {
        //Ajout du joueur à la partie
        const game = store.getState().appReducer.game
        const player = store.getState().appReducer.player
        game.addPlayer(player)

        //Met à jour le redux avec la partie et le joueur
        dispatch(setGame(game))
        dispatch(setPlayersList(player))

        //navigue vers la page GameScreen
        navigation.navigate("GameScreen")

        console.log("La game: " + store.getState().appReducer.game + " a été créée avec les joueurs: " + store.getState().appReducer.player)
    }

    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.ButtonBack}>
                <ButtonBack onPress={() => backToHome()}></ButtonBack>
            </View>
            <CodeBox text="Votre code est" code={code} />
            <View style={{ marginBottom: "0%" }}>
                <ButtonOK text="Next" onPress={() => onCreateGameButtonClick()} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        transform: [{ translateX: 0 }, { translateY: 0 }]
    },
    ButtonBack: {
        width: "100%",
        height: "auto",
        alignItems: "flex-start",
    }
});