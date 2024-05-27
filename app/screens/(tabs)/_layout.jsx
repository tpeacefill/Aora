import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import Create from './Create';
import Bookmark from './Bookmark';
import { Icons } from '../../../Constants/Icons/index';

const TabsLayout = createBottomTabNavigator();

const Tabs = () => {
  return (
    <TabsLayout.Navigator>
      <TabsLayout.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <Icons.Home focused={focused} />
        }}
      />
      <TabsLayout.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({ focused }) => <Icons.Create focused={focused} />
        }}
      />
      <TabsLayout.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ focused }) => <Icons.Bookmark focused={focused} />
        }}
      />
      <TabsLayout.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => <Icons.Profile focused={focused} />
        }}
      />
    </TabsLayout.Navigator>
  );
};

export default Tabs;
