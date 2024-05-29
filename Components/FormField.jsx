import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const FormField = ({ title, value, handleChangeText, otherStyles, keyboardType = 'default', placeholder = '', secureTextEntry = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const isPasswordInput = title === 'Password'; // Check if the input is for password

  return (
    <View style={[styles.formFieldView, otherStyles]}>
      <Text style={styles.label}>{title}</Text>
      <View style={[styles.inputContainer, isPasswordInput && styles.passwordContainer]}>
        <TextInput
          style={[
            styles.input,
            isFocused && { borderColor: '#FF9C01', borderWidth: 1 }
          ]}
          value={value}
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          secureTextEntry={!showPassword && secureTextEntry} // Hide password if showPassword is false
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isPasswordInput && ( // Render eye icon only for password input
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={() => setShowPassword(!showPassword)} // Toggle password visibility
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#CDCDE0"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  formFieldView: {
    flexDirection: 'column', // Ensure children are stacked vertically
    marginBottom: 16,        // Equivalent to space-y-2 for vertical spacing
  },
  label: {
    fontFamily: 'Poppins',   
    fontSize: 16,            
    fontWeight: '500',       
    lineHeight: 22.4,    
    color: '#CDCDE0',        
    marginBottom: 8,         // Space between label and input
  },
  inputContainer: {
    flexDirection: 'row',    // Align icon and input horizontally
    alignItems: 'center',    // Center icon and input vertically
  },
  passwordContainer: {
    position: 'relative',    // Position relative for icon container
  },
  input: {
    flex: 1,                 // Take up remaining space
    backgroundColor: '#1E1E2D',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#FFFFFF',
    height: 58,
    borderColor: 'transparent', // Default border color
  },
  eyeIconContainer: {
    position: 'absolute',    // Position the eye icon
    right: 12,               // Adjust as needed for spacing
  },
  eyeIcon: {
    // No additional styles needed
  },
});
