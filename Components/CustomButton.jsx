import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Continue with Email</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 327,
    height: 58,
    position: 'absolute',
    top: 660,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8E01', // Example background color
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#161622',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
});

export default CustomButton
