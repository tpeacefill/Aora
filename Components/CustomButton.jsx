import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlePress, isLoading }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isLoading && styles.buttonDisabled]}
      onPress={!isLoading ? handlePress : null}
      disabled={isLoading}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 327,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8E01', // Example background color
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC', // Example disabled background color
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#161622',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
});

export default CustomButton;
