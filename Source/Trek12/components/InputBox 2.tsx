import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";


type InputBoxProps = {
    text: string;
    style?: any;
    width?: number;
    height?: number;
}

export default function InputBox(props: InputBoxProps){
  return (
    <View style={styles.vueInput}>
        <Text style={styles.textLabel}>Nom d'utilisateur</Text>
        <View style={styles.inputBox}>
            <TextInput style={styles.text} placeholder={props.text} />
        </View>
    </View>
        
    );
};

const styles = StyleSheet.create({
    inputBox: {
        width: 161,
        height: 61,
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
        
        
        position: 'absolute',
        top: -60,
        left: 0,
        right: 0,
        bottom: 20,
        margin: 10,
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Sketch',
    },
    vueInput: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        margin: 10,
    },
    textLabel: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Sketch',
        marginLeft: 15,
        position: 'relative',
        
        bottom: 75,
    },
});