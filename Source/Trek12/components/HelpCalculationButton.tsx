import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function HelpCalculationButton({options, defaultValue, onSelect}) {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleValueChange = (value) => {
        if (value === selectedValue) {
          setSelectedValue(null); // déselectionne le bouton
          onSelect(null);
        } else {
          setSelectedValue(value);
          onSelect(value);
        }
      };

  return (
    <RadioButton.Group
      onValueChange={handleValueChange}
      value={selectedValue}
    >
      {options.map((option) => (
        <RadioButton.Item
          key={option.label}
          label={option.label}
          value={option.value}
          color="#007aff"
          uncheckedColor="#c7c7cc"
          labelStyle={{ fontSize: 25, fontFamily: "Sketch", color: "white" }}
        />
      ))}
    </RadioButton.Group>
  );
}