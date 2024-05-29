import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import Logo from '../../../assets/Images/AoraLogo.png';
import FormField from '../../../Components/FormField';
import CustomButton from '../../../Components/CustomButton';

const SignIn = ({ navigation }) => {
  const [form, setForm] = useState({
    Username: '',
    Email: '',
    Password: '',
    showPassword: false,
  });

  const handleInputChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setForm({ ...form, showPassword: !form.showPassword });
  };

  const handleLoginNavigation = () => {
    // Navigate to the SignIn screen
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.signupText}>Sign In</Text>
        
          <FormField
            title="Email"
            value={form.Email}
            handleChangeText={(value) => handleInputChange('Email', value)}
            otherStyles={{ marginTop: 7 }}
            keyboardType="email-address"
            placeholder="Enter your email"
          />
          <FormField
            title="Password"
            value={form.Password}
            handleChangeText={(value) => handleInputChange('Password', value)}
            otherStyles={{ marginTop: 7 }}
            secureTextEntry={!form.showPassword}
            placeholder="Enter your password"
          />
        </View>
        <CustomButton
          title="Sign In"
          handlePress={() => console.log('Sign In pressed', form)}
        />
        <TouchableOpacity onPress={handleLoginNavigation}>
          <Text style={styles.redirectLogin}>
            Don't have an account?{' '}
            <Text style={styles.loginText}>Sign up</Text>
          </Text>
        </TouchableOpacity>
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
    width: '100%',
    minHeight: '55%',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  logo: {
    width: 115,
    height: 34.07,
    resizeMode: 'contain',
  },
  signupText: {
    fontFamily: 'Poppins',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 31.9,
    letterSpacing: -1,
    color: '#FFFFFF',
    marginTop: 40,
    marginBottom: 30,
  },
  redirectLogin: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20.3,
    textAlign: 'center',
    color: '#CDCDE0',
    marginTop: 30,
  },
  loginText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20.3,
    textAlign: 'center',
    color: '#FF9001',
  },
});

export default SignIn;
