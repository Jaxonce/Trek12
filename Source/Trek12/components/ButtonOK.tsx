import * as React from "react";
import { Text, View, StyleSheet, ImageBackground, Pressable } from "react-native";

type ButtonOkProps = {
  text: string
  onPress: any;
}

export default function ButtonOK (props: ButtonOkProps) {
  return (
    <View>
        <Pressable onPress={props.onPress} style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.8
                : 1,
              
            },
            styles.button,
          ]}>
            <ImageBackground source={require('../assets/bg_wood.jpg')} imageStyle={{ borderRadius: 22}} resizeMode="cover" style={styles.background}>
               <Text style={styles.ok}>{props.text}</Text>
            </ImageBackground>
        </Pressable>
    </View>
    
    
  );
};

const styles = StyleSheet.create({
    button: {
        width: 130,
        height: 95,
        borderRadius: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ok: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        fontFamily: 'Sketch',
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 22
    }
});
