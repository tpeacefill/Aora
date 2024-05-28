import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; // Import SplashScreen from expo-splash-screen
import AppLoading from 'expo-app-loading';
import SplashScreenScreen from './app/screens/SplashScreen';
import Onboarding from './app/screens/Onboarding';
import Tabs from './app/screens/(tabs)/_layout';
import AuthLayout from './app/screens/(auth)/_layout';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Poppins: require('./assets/Fonts/Poppins/Poppins-Regular.ttf'),
      // Add other font variants if needed
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync() // Use preventAutoHideAsync from SplashScreen
      .catch(error => {
        console.warn(error);
      });
    loadFonts();
    return () => {
      SplashScreen.hideAsync() // Use hideAsync from SplashScreen
        .catch(error => {
          console.warn(error);
        });
    };
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
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
          name="AuthLayout"
          component={AuthLayout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
