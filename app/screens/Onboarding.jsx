import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AoraLogo from '../../assets/Images/AoraLogo.png';
import OnboardingImage from '../../assets/Images/OnboardingImage.png';
import StrokeImage from '../../assets/Images/Stroke.png'; // Import the Stroke image
import * as Font from 'expo-font';
import CustomButton from '../../Components/CustomButton';

const Onboarding = ({ navigation }) => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    // Load the Poppins-Bold font
    Font.loadAsync({
      'Poppins-Bold': require('../../assets/Fonts/Poppins/Poppins-Black.ttf'),
    });

    // Subscribe to dimension changes
    const dimensionChangeHandler = (newDimensions) => {
      setScreenWidth(newDimensions.window.width);
    };

    Dimensions.addEventListener('change', dimensionChangeHandler);

    return () => {
      // Unsubscribe from dimension changes when component unmounts
      Dimensions.removeEventListener('change', dimensionChangeHandler);
    };
  }, [navigation]);

  // Calculate the position of the Stroke image based on the screen width
  const strokeImagePosition = {
    position: 'absolute',
    bottom: -18, // Adjust the position as needed
    width: screenWidth * 0.3, // Set the width to 30% of the screen width
    resizeMode: 'contain',
    aspectRatio: 1,
    right: screenWidth * 0.05, // Set the right position to 5% of the screen width
  };

  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.onboardingText}>DiscoverEndless</Text>
            <Text style={styles.onboardingText}>
              Possibilities with{' '}
              <Text style={[styles.onboardingText, { color: '#FF8E01' }]}>Aora</Text>
            </Text>
          </View>
          {/* Position the Stroke image absolutely under the word "Aora" */}
          <Image 
            style={[styles.strokeImage, strokeImagePosition]} // Apply the calculated position
            source={StrokeImage}
          />
        </View>
        <Text style={styles.additionalText}>
  Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
</Text>
<CustomButton
  title="Continue with Email"
  handlePress={() => navigation.navigate('AuthLayout')}
/>



        {/* Add any additional content here */}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 1, // Add some padding to the top if needed
    position: 'relative', // Make the container relative to position absolutely
  },
  logo: {
    width: '30%',
    height: undefined,
    resizeMode: 'contain',
    aspectRatio: 1,
    marginBottom: 1, // Adjust this value to reduce the space
  },
  onboardingImage: {
    width: '100%',
    height: undefined,
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  onboardingTextContainer: {
    alignItems: 'center',
    marginTop: 1,
  },
  onboardingText: {
    fontFamily: 'Poppins-Bold', 
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 36,
    letterSpacing: -1,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  additionalText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22.4,
    textAlign: 'center',
    color: '#CDCDE0', // Adjust color as needed
    marginTop: 10,
    marginBottom: 50,
  }
  
 
});

export default Onboarding;
