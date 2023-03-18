import * as React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import CodeBoxInput from '../components/CodeBoxInput';
import ButtonOk from '../components/ButtonOK';
import ButtonBack from '../components/ButtonBack';

export default function JoinGameScreen({navigation}) {
    const backToHome = () => {navigation.navigate("HomeScreen")}

    const [inputCode, setInputCode] = React.useState('');
    const [error, setError] = React.useState(false);

    const goToGameModeScreen = () => {navigation.navigate("GameModeScreen")}

    return (
        <ScrollView 
            keyboardShouldPersistTaps="handled" // ajout de la propriété keyboardShouldPersistTaps
            contentContainerStyle={styles.scrollView}
        >
            <View style={styles.imageContainer}>
                <ImageBackground 
                    source={require('../assets/bg.png')} 
                    resizeMode="cover" 
                    style={styles.image}
                />
            </View>
            <View style={styles.ButtonBack}>
                <ButtonBack onPress={()=>backToHome()}></ButtonBack>
            </View>
            <CodeBoxInput text="Rentrer le code" setInputCode={setInputCode} error={error}/>
            <ButtonOk text="OK" onPress={goToGameModeScreen}/>
        </ScrollView>
    );
    }

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1, // définit la position relative de l'image de fond
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        transform: [{ translateX: 0 }, { translateY: 0 }]
    },
    ButtonBack: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
    },
});