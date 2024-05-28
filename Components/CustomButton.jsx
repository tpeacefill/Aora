import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

const CustomButton = ({ title, handlePress, isLoading }) => {
  const calculateFontSize = (baseSize) => {
    const scale = width / 375; // 375 is a base width for scaling
    return Math.round(baseSize * scale);
  };

  const buttonHeight = width * 0.15; // Calculate height based on width
  const verticalPadding = buttonHeight * 0.2; // Set padding relative to button height

  return (
    <TouchableOpacity
      style={[styles.button, { width: '90%', height: buttonHeight, paddingVertical: verticalPadding }]}
      onPress={handlePress}
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, { fontSize: calculateFontSize(16) }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8E01', // Example background color
    borderRadius: 8,
    paddingHorizontal: 16,
    marginHorizontal: '5%', // Center the button horizontally
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC', // Example disabled background color
  },
  buttonText: {
    fontWeight: '600',
    color: '#161622',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
});

export default CustomButton;
