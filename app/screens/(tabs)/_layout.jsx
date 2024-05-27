import React from 'react';
import { Tabs } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import Create from './Create';
import Bookmark from './Bookmark';

const TabsLayout = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <TabsLayout.Navigator>
      <TabsLayout.Screen name="Home" component={Home} />
      <TabsLayout.Screen name="Create" component={Create} />
      <TabsLayout.Screen name="Bookmark" component={Bookmark} />
      <TabsLayout.Screen name="Profile" component={Profile} />
    </TabsLayout.Navigator>
  );
};

export default TabsNavigator;
