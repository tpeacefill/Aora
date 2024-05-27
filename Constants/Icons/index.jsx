// Icons/index.js
import React from 'react';
import CustomTabIcon from './CustomTabIcon'; // Adjust the path as needed

export const Icons = {
  Home: (props) => <CustomTabIcon name="home-outline" label="Home" {...props} />,
  Create: (props) => <CustomTabIcon name="create-outline" label="Create" {...props} />,
  Bookmark: (props) => <CustomTabIcon name="bookmark-outline" label="Bookmark" {...props} />,
  Profile: (props) => <CustomTabIcon name="person-outline" label="Profile" {...props} />,
};
