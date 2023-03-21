import * as React from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
import EndOperation from '../components/EndOperationGrid';



export default function EndScreen({navigation}) {
    const goToNewPlay = () => {navigation.navigate("CreateGameScreen")}
    const goToOther = () => {navigation.navigate("JoinGameScreen")}
    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <EndOperation></EndOperation>
        </ImageBackground>
        
    );
    }

const styles = StyleSheet.create({
    image: {
        flex: 0,
        alignItems:'flex-start',
        justifyContent: "flex-end",
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        transform: [{ translateX: 0 }, { translateY: 0 }]
      },
});
