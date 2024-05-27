// CustomTabIcon.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomTabIcon = ({ name, label, focused }) => {
  const iconColor = focused ? '#FFA001' : '#CDCDE0';
  const textColor = focused ? '#FFA001' : '#CDCDE0';
  const fontWeight = focused ? 'bold' : 'normal';

  return (
    <View style={styles.container}>
      <Ionicons name={name} size={24} color={iconColor} style={{ fontWeight }} />
      <Text style={[styles.label, { color: textColor, fontWeight }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default CustomTabIcon;
