import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import Logo from '../../../assets/Images/AoraLogo.png';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <Image source={Logo} style={styles.logo}/>
          <Text style={styles.signupText}>Sign Up</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#161622',
    flex: 1,
  },
  viewContainer: {
    width: '100%',           // full width
    minHeight: '85%',        // min-height of 85% viewport height
    justifyContent: 'center',// center content vertically
    paddingHorizontal: 16,   // padding left and right (px-4 in Tailwind)
    marginVertical: 24,      // margin top and bottom (my-6 in Tailwind)
  },
  logo: {
    width: 115,
    height: 34.07,      
    resizeMode: 'contain',     // sets opacity to 0, making the image invisible
  },
  signupText: {
    fontFamily: 'Poppins',      
    fontSize: 22,               
    fontWeight: '600',          
    lineHeight: 31.9,           
    letterSpacing: -1,         
    color: '#FFFFFF', 
    marginTop: 20,
  },
});

export default SignUp;
