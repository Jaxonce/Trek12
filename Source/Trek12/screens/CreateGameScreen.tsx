import * as React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import ButtonBack from '../components/ButtonBack';
import ButtonOK from '../components/ButtonOK';
import CodeBox from '../components/CodeBox';

export default function CreateGameScreen({navigation}) {
    const backToHome = () => {navigation.navigate("HomeScreen")}

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

    
    const goToGameModeScreen = () => {navigation.navigate("GameModeScreen")}

    return (
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.ButtonBack}>
                <ButtonBack onPress={()=>backToHome()}></ButtonBack>
            </View>
            <CodeBox text="Votre code est" code={code}/>
            <View style={{marginBottom: "0%"}}>
                <ButtonOK text="Next" onPress={goToGameModeScreen}/>
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
        width:"100%",
        height:"auto",
        alignItems: "flex-start",
    }
});