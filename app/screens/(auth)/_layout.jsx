import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator from @react-navigation/stack
import { StatusBar } from 'expo-status-bar';
import SignUp from './SignUp'; // Import SignUp component
import SignIn from './SignIn'; // Import SignIn component

const Stack = createStackNavigator(); // Define Stack navigator

const AuthLayout = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='SignIn'
          component={SignIn}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
}

export default AuthLayout;
