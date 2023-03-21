import * as React from "react";
import { Text, StyleSheet,Pressable } from "react-native";

type ButtonMenuProps = {
    text: string;
    onPress : any;
}

export default function ButtonMenu(props: ButtonMenuProps) {
    return (
        <Pressable onPress={props.onPress} style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.8
                : 1,
              backgroundColor: '#2277ee'
            },
            styles.ButtonMenu,
          ]}>
            <Text style={styles.text}>{props.text}</Text>
          </Pressable>
    );
}

const styles = StyleSheet.create({
    ButtonMenu: {
        width: 150,
        height: 100,
        backgroundColor: "rgba(217, 217, 217, 0.53)",
        borderRadius: 22,
        boxShadow: '0 12px 6px 0 rgba(0, 0, 0, 0.41)',
        backdropFilter: 'blur(4px)',
        borderWidth: 10,
        borderColor: '#583929',
        borderStyle: 'solid',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black', 
        fontSize: 30, 
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Sketch',
    }
});