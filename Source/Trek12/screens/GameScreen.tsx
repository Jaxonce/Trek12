import React, {useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import PauseButton from '../components/PauseButton';
import DiceButton from '../components/DiceButton';
import { StatusBar } from 'expo-status-bar';


export default function GameScreen({navigation}) {
    const diceValue = 12
    const [cases, setCases] = useState(Array(19).fill('X'));
    const containers = [  ["-31%", "18.3%"],
    ["-36%", "12.3%"],
    ["-32%", "13.7%"],
    ["-31%", "9.5%"],
    ["-27%", "11.5%"],
    ["-45%", "15.5%"],
    ["-63%", "19.5%"],
    ["-59.5%", "21.3%"],
    ["-58%", "17.5%"],
    ["-86%", "24.7%"],
    ["-103%", "29.5%"],
    ["-91%", "26.3%"],
    ["-90%", "22.5%"],
    ["-96%", "28.2%"],
    ["-114%", "32.1%"],
    ["-132.5%", "35.7%"],
    ["-129.3%", "38%"],
    ["-148.3%", "41.5%"],
    ["-152%", "47.1%"]
];

    const [mode, setMode] = useState('zone');
    const [zoneNumbers, setZoneNumbers] = useState([]);
    const [chainNumbers, setChainNumbers] = useState([]);
    const turn = ["1/19", "2/19", "3/19", "4/19", "5/19", "6/19", "7/19", "8/19", "9/19", "10/19", "11/19", "12/19", "13/19", "14/19", "15/19", "16/19", "17/19", "18/19", "19/19"]

    const handlePressNumber = (value, index) => {
        if(value === "X"){
            //verif si à coté
            setCases(prevCases => {
                const newCases = prevCases.slice();
                newCases.splice(index, 1, diceValue); 
                return newCases;
              });
              //appeler nouveau tour
        }
        if (!zoneNumbers.find(zone => zone === value) && !chainNumbers.find(chain => chain === value) && value !== "X"){
            if (mode === 'zone') {
                //vérif si zone possible
          setZoneNumbers([...zoneNumbers, [index,value]]);
            } else if (mode === 'chain') {
                //verif si chaine possible
            setChainNumbers([...chainNumbers, [index,value]]);
            }
        }
      };

      const styleHandlePressNumber = (value,index) => {
        if(value !== 'X'){
            if(zoneNumbers.find((arr) => arr[0] === index && arr[1] === value)){
            return styles.zoneNumber
            }
            if(chainNumbers.find((arr) => arr[0] === index && arr[1] === value)){
                return styles.chainNumber
            }
        }
        if(value === 'X'){
            return styles.textX
        }
        return styles.text
      }


      const styleContainer = (number) => {
        return stylesContainer(containers[number][0],containers[number][1]).container1
      }
  
    return (
        <>
        <ImageBackground source={require(".././assets/bg_game.png")} style={styles.backgroundImage}>
                <Text style={{fontFamily: "Sketch", fontSize: 30, top: 15, left: 340}}>{turn[0]}</Text>
            <PauseButton navigation={navigation}></PauseButton>      
            <DiceButton backgroundColor="#F4D34C" number="0" top="-7%" left="54%"/>
            <DiceButton backgroundColor="#B45746" number="1" top="-23%" left="62%"/>
            <TouchableOpacity style={styles.containerZoneChain} onPress={() => setMode(mode === 'zone' ? 'chain' : 'zone')}>
                    <Text style={mode === 'zone' ? styles.zoneNumber : styles.chainNumber}>{mode === 'zone' ? 'Zone' : 'Chain'}</Text>
            </TouchableOpacity>
            <StatusBar hidden={true}></StatusBar>
            
            {cases.map((value, index) => (
            <View key={index} style={styleContainer(index)}>
                <TouchableOpacity onPress={() => handlePressNumber(value, index)}>
                    <Text style={styleHandlePressNumber(value,index)}>{value}</Text>
                </TouchableOpacity>
            </View>
                ))}
            
        </ImageBackground>
        </>
        
    );
}

const stylesContainer = (top, left) => StyleSheet.create({
    container1: {
        left: left,
        top: top,
        position: "relative",
        width : "10%"
    },
  });

const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    position: "relative",
    transform:[{translateX: 0}, {translateY: 0}]
    },
    zoneNumber: {
        color: "blue",
        fontSize: parseFloat('200') / 100 * 16,
        fontFamily: "Sketch"
    },
    chainNumber: {
        color: "green",
        fontSize: parseFloat('200') / 100 * 16,
        fontFamily: "Sketch"
    },
    text: {
        fontSize: parseFloat('200') / 100 * 16,
        fontFamily: "Sketch"
    },
    textX: {
        fontSize: parseFloat('200') / 100 * 16,
        fontFamily: "Sketch",
        // opacity: 0
    },
    containerZoneChain: {
        top:"5%",
        left: "56%",
        width: "15%"

    }
});




