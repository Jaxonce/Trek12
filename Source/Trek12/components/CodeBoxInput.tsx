import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

type CodeBoxProps = {
    text: string;
    style?: any;
    width?: number;
    height?: number;
}

export default function CodeBox(props: CodeBoxProps){
  return (
    <View style={styles.vueInput}>
        <Text style={styles.textLabel}>{props.text}</Text>
        <View style={styles.inputBox}>
            <TextInput style={styles.text}/>
        </View>
    </View>
        
    );
};

const styles = StyleSheet.create({
    inputBox: {
        width: 265,
        height: 114,
        backgroundColor: "rgba(217, 217, 217, 0.53)",
        borderRadius: 22,
        boxShadow: '0 12px 6px 0 rgba(0, 0, 0, 0.41)',
        backdropFilter: 'blur(4px)',
        borderWidth: 10,
        borderColor: '#583929',
        borderStyle: 'solid',
        margin: 10,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Sketch',
    },
    vueInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLabel: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Sketch',
        marginLeft: 15,
    },
});