import * as React from "react";
import { View, Text, StyleSheet, Button, Pressable, ImageBackground, Touchable, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";



//buttonNav props
type ButtonGameModeProps = {
    text: string;
    onPress : any;
    pathImg: string;
}

export default function ButtonGameMode(props: ButtonGameModeProps){
  var blur
  var titleImg
  function setDunai(){
    titleImg = "Express"
    blur = 0
  }
  function setKagkot(){
    titleImg = "Soon..."
    blur = 20
  }
  function setDhaulagiri(){
    titleImg = "Soon..."
    blur = 20
  }
  props.pathImg === 'dunai' ? setDunai() : props.pathImg === 'kagkot' ? setKagkot() : setDhaulagiri()
  return (
    // <View style={styles.containerTest}>
        
            <Pressable onPress={props.onPress} style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.8
                : 1,
                height: "100%",
                width: "28%"
                
            }, styles.bigButton

          ]}>
            <ImageBackground source={props.pathImg === 'kagkot' ? require(".././assets/kagkot.png") : props.pathImg === 'dunai' ? require(".././assets/dunai.png") : require(".././assets/dhaulagiri.png") } style={[styles.imgBackground, { borderRadius: 22 }]} blurRadius={blur}>
               <Text style={styles.text}>
              {titleImg }
              </Text>
              </ImageBackground>
             
              <StatusBar hidden={true}></StatusBar>
            {/* <Text style={styles.text}>{props.text}</Text> */}
          </Pressable>   
                    
    // </View>
        
        
    );
};

const styles = StyleSheet.create({
    imgBackground: {
        flex :1,
        position: "relative",
        transform:[{translateX: 0}, {translateY: 0}],
        justifyContent: 'center'
    },
    containerTest:{
        // borderWidth: 12
    },
    bigButton: {
        borderRadius: 22,
        boxShadow: '0 12px 6px 0 rgba(0, 0, 0, 0.41)',
        backdropFilter: 'blur(4px)',
        borderWidth: 10,
        borderColor: '#583929',
        borderStyle: 'solid'
    },
    text: {
        color: 'black', 
        fontSize: 30, 
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Sketch',
    }
});


