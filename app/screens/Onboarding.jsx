import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Onboarding = ({ navigation }) => {
  useEffect(() => {
    // Navigate to TabsLayout after a delay or based on a button press
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding Screen</Text>
      <Button
        title="Continue to App"
        onPress={() => navigation.replace('TabsLayout')} // Navigate to the 'TabsLayout' screen
      />
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
  text: {
    fontSize: 24,
  },
});

export default Onboarding;
