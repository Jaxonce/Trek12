import React, {useRef, useEffect} from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import PauseButton from '../components/PauseButton';
import DiceButton from '../components/DiceButton';


export default function GameScreen({navigation}) {
    const turn = ["1/19", "2/19", "3/19", "4/19", "5/19", "6/19", "7/19", "8/19", "9/19", "10/19", "11/19", "12/19", "13/19", "14/19", "15/19", "16/19", "17/19", "18/19", "19/19"]

    return (
        <ImageBackground source={require(".././assets/bg_game.png")} style={styles.backgroundImage}>
            <Text style={{fontFamily: "Sketch", fontSize: 30, top: 15, left: 340}}>{turn[0]}</Text>
            <PauseButton navigation={navigation}></PauseButton>
            <DiceButton backgroundColor="yellow" number="0" top="-7%" left="50%"/>
            <DiceButton backgroundColor="red" number="1" top="-23%" left="58%"/>
            <View style={styles.container1}>
                 <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.container3}>
                <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.container4}>
                <Text style={styles.text}>4</Text>
            </View>
            <View style={styles.container5}>
                <Text style={styles.text}>5</Text>
            </View>
            <View style={styles.container6}>
                <Text style={styles.text}>6</Text>
            </View>
            <View style={styles.container7}>
                <Text style={styles.text}>7</Text>
            </View>
            <View style={styles.container8}>
                <Text style={styles.text}>8</Text>
            </View>
            <View style={styles.container9}>
                <Text style={styles.text}>9</Text>
            </View>
            <View style={styles.container10}>
                <Text style={styles.text}>10</Text>
            </View>
            <View style={styles.container11}>
                <Text style={styles.text}>11</Text>
            </View>
            <View style={styles.container12}>
                <Text style={styles.text}>12</Text>
            </View>
            <View style={styles.container13}>
                <Text style={styles.text}>13</Text>
            </View>
            <View style={styles.container14}>
                <Text style={styles.text}>14</Text>
            </View>
            <View style={styles.container15}>
                <Text style={styles.text}>15</Text>
            </View>
            <View style={styles.container16}>
                <Text style={styles.text}>16</Text>
            </View>
            <View style={styles.container17}>
                <Text style={styles.text}>17</Text>
            </View>
            <View style={styles.container18}>
                <Text style={styles.text}>18</Text>
            </View>
            <View style={styles.container19}>
                <Text style={styles.text}>19</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    position: "relative",
    transform:[{translateX: 0}, {translateY: 0}]
    },
    container1: {
        position: "relative",
        left: "18.3%",
        top:"-31%",
    },
    container2: {
        position: "relative",
        left: "12.3%",
        top: "-36%",
    },
    container3: {
        position: "relative",
        left: "13.7%",
        top:"-32%"
    },
    container4: {
        position: "relative",
        left: "9.5%",
        top: "-31%"
    },
    container5: {
        position: "relative",
        left: "11.5%",
        top: "-27%"
    },
    container6: {
        position: "relative",
        left: "15.5%",
        top: "-45%"
    },
    container7: {
        position: "relative",
        left: "19.5%",
        top: "-63%"
    },
    container8: {
        position: "relative",
        left: "21.3%",
        top: "-59.5%"
    },
    container9: {
        position: "relative",
        left: "17.5%",
        top: "-58%"
    },
    container10: {
        position: "relative",
        left: "24.7%",
        top: "-86%"
    },
    container11: {
        position: "relative",
        left: "29.5%",
        top: "-103%"
    },
    container12: {
        position: "relative",
        left: "26.3%",
        top: "-91%"
    },
    container13: {
        position: "relative",
        left: "22.5%",
        top: "-90%"
    },
    container14: {
        position: "relative",
        left: "28.2%",
        top: "-96%"
    },
    container15: {
        position: "relative",
        left: "32.1%",
        top: "-114%"
    },
    container16: {
        position: "relative",
        left: "35.7%",
        top: "-132.5%"
    },
    container17: {
        position: "relative",
        left: "38%",
        top: "-129.3%"
    },
    container18: {
        position: "relative",
        left: "41.5%",
        top: "-148.3%"
    },
    container19: {
        position: "relative",
        left: "47.1%",
        top: "-152%"
    },
      text: {
        fontSize: parseFloat('200') / 100 * 16,
        fontFamily: "Sketch"
      }
});




