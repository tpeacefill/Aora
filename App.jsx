import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SplashScreenScreen from './app/screens/SplashScreen';
import Onboarding from './app/screens/Onboarding';
import Tabs from './app/screens/(tabs)/_layout';
import SignUp from './app/screens/(auth)/Sign-Up'; // Import the SignUp screen

const Stack = createStackNavigator();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'Poppins-Regular': require('./assets/Fonts/Poppins/Poppins-Regular.ttf'),
          // Add other font variants if needed
        });
        setIsAppReady(true);
      } catch (error) {
        console.error('Error loading app:', error);
      }
    }

    prepareApp();
  }, []);

  useEffect(() => {
    if (isAppReady) {
      SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null; // Render nothing while loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreenScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabsLayout"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp" // Add the SignUp screen to the navigator
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
