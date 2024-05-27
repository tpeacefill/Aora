// Onboarding.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text>Onboarding Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;
