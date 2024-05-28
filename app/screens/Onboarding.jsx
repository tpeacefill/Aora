import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ScrollView, Text, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AoraLogo from '../../assets/Images/AoraLogo.png';
import OnboardingImage from '../../assets/Images/OnboardingImage.png';
import StrokeImage from '../../assets/Images/Stroke.png';
import * as Font from 'expo-font';
import CustomButton from '../../Components/CustomButton';

const Onboarding = ({ navigation }) => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    Font.loadAsync({
      'Poppins-Bold': require('../../assets/Fonts/Poppins/Poppins-Black.ttf'),
    });

    const dimensionChangeHandler = ({ window }) => {
      setScreenWidth(window.width);
    };

    Dimensions.addEventListener('change', dimensionChangeHandler);

    return () => {
      Dimensions.removeEventListener('change', dimensionChangeHandler);
    };
  }, []);

  const calculateFontSize = (baseSize) => {
    const scale = screenWidth / 375; // Base width for scaling
    return Math.round(baseSize * scale);
  };

  const strokeImagePosition = {
    position: 'absolute',
    bottom: -18,
    width: screenWidth * 0.3,
    resizeMode: 'contain',
    aspectRatio: 1,
    right: screenWidth * 0.05,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={AoraLogo}
          />
          <Image 
            style={styles.onboardingImage}
            source={OnboardingImage}
          />
          <View style={styles.onboardingTextContainer}>
            <Text style={[styles.onboardingText, { fontSize: calculateFontSize(30), lineHeight: calculateFontSize(36) }]}>Discover Endless</Text>
            <Text style={[styles.onboardingText, { fontSize: calculateFontSize(30), lineHeight: calculateFontSize(36) }]}>
              Possibilities with{' '}
              <Text style={{ color: '#FF8E01' }}>Aora</Text>
            </Text>
          </View>
          <Image 
            style={[styles.strokeImage, strokeImagePosition]} 
            source={StrokeImage}
          />
        </View>
        <Text style={[styles.additionalText, { fontSize: calculateFontSize(14), lineHeight: calculateFontSize(22.4) }]}>
          Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
        </Text>
        <CustomButton
          title="Continue with Email"
          handlePress={() => navigation.navigate('AuthLayout')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  logo: {
    width: '30%',
    height: undefined,
    resizeMode: 'contain',
    aspectRatio: 1,
    marginBottom: 2,
  },
  onboardingImage: {
    width: '100%',
    height: undefined,
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  onboardingTextContainer: {
    alignItems: 'center',
    marginTop: 2,
  },
  onboardingText: {
    fontFamily: 'Poppins-Bold', 
    fontWeight: '600',
    letterSpacing: -1,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  additionalText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    textAlign: 'center',
    color: '#CDCDE0',
    marginTop: 10,
    marginBottom: 20,
  },
  strokeImage: {
    // Position the Stroke image absolutely under the word "Aora"
  },
});

export default Onboarding;
