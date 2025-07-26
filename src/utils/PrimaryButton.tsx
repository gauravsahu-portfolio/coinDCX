import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const PrimaryButton = ({ text, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity
        style={{...containerStyle, ...styles.mainContainer}}
      >
        <Text style={{...textStyle, ...styles.textContainer}}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
        marginLeft: 10,
        boxSizing: 'border-box'
    },
    textContainer: {
        fontWeight: 'bold',
    }
});

export default PrimaryButton;