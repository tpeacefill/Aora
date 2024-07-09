// app/screens/(tabs)/_layout.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import Create from './Create';
import Bookmark from './Bookmark';
import { Icons } from '../../../Constants/Icons'; // Adjust the path as needed

const TabsLayout = createBottomTabNavigator();

const Tabs = () => {
  return (
    <TabsLayout.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#161622', // Set the background color for the tab bar
          height: 84,
        },
      }}
    >
      <TabsLayout.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <Icons.Home focused={focused} />,
          headerShown: false,
        }}
      />
      <TabsLayout.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({ focused }) => <Icons.Create focused={focused} />,
          headerShown: false,
        }}
      />
      <TabsLayout.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ focused }) => <Icons.Bookmark focused={focused} />,
          headerShown: false,
        }}
      />
      <TabsLayout.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => <Icons.Profile focused={focused} />,
          headerShown: false,
        }}
      />
    </TabsLayout.Navigator>
  );
};

export default Tabs;
