import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function ButtonOK () {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.ok}>OK</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        width: 55,
        height: 32,
        padding: 10,
        backgroundColor: "rgba(217, 217, 217, 0.53)",
        borderRadius: 22,
        boxShadow: '0 12px 6px 0 rgba(0, 0, 0, 0.41)',
        backdropFilter: 'blur(4px)',
        borderWidth: 10,
        borderColor: '#583929',
        borderStyle: 'solid',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ok: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Sketch',
    }
});

