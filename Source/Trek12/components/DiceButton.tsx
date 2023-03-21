import React, { useState, useEffect } from 'react';
import { Text,StyleSheet, ImageBackground} from 'react-native';

export default function DiceButton({backgroundColor, number, top, left}) {

    const [diceNumber, setDiceNumber] = useState(number);

    useEffect(() => {
        const interval = setInterval(() => {
            const newNumber = backgroundColor === "#F4D34C" ? Math.round(Math.random() * 5) : Math.round(Math.random() * 5) + 1;
            setDiceNumber(newNumber);
        }, 1000); // génère un nouveau chiffre toutes les 1 secondes

        return () => clearInterval(interval);
    }, []); // exécute l'effet uniquement une fois lors du montage du composant
    return (
        <ImageBackground style={[styles.backgroundButton, {backgroundColor, top, left}]}>
            <Text style={{fontFamily: "Sketch", fontSize: 40, marginTop: 5}}>{diceNumber}</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'yellow', 
        height: 60, 
        width: 60,
        borderRadius: 20,
    }
});