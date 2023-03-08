import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';
import HelpCalculationButton from '../components/HelpCalculationButton';
import ButtonMenu from '../components/ButtonMenu';

export default function OptionsScreen({navigation}) {
    const [selectedOption, setSelectedOption] = useState('optionHelpCalculation');

    const handleSelectOption = (optionValue) => {
        setSelectedOption(optionValue);
        console.log(`Option sélectionnée: ${optionValue}`);
    };

    const radioOptions = [
        { label: "Help Calculation",
          value: "optionHelpCalculation",
        }
    ];

    const goToMenu = () => {navigation.navigate('PauseScreen')};
    return(
        <ImageBackground source={require(".././assets/bg_wood.jpg")} style={styles.backgroundImage}>
            <View style={styles.container}>
                <HelpCalculationButton options={radioOptions} defaultValue={selectedOption} onSelect={handleSelectOption}/>
                <ButtonMenu onPress={()=>goToMenu()} text='Back'/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
});