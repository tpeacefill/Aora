import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import AoraLogo from '../../assets/Images/AoraLogo.png';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={AoraLogo} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '40%', // Adjust this to your liking
    height: undefined,
    aspectRatio: 1, // This will keep the aspect ratio of the image
  },
});

export default SplashScreen;
