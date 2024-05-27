import { Ionicons } from '@expo/vector-icons';

export const Icons = {
  Home: ({ focused, size = 24, color = '#CDCDE0' }) => (
    <Ionicons
      name="home-outline"
      size={size}
      color={focused ? '#FFA001' : color}
    />
  ),
  Create: ({ focused, size = 24, color = '#CDCDE0' }) => (
    <Ionicons
      name="create-outline"
      size={size}
      color={focused ? '#FFA001' : color}
    />
  ),
  Bookmark: ({ focused, size = 24, color = '#CDCDE0' }) => (
    <Ionicons
      name="bookmark-outline"
      size={size}
      color={focused ? '#FFA001' : color}
    />
  ),
  Profile: ({ focused, size = 24, color = '#CDCDE0' }) => (
    <Ionicons
      name="person-outline"
      size={size}
      color={focused ? '#FFA001' : color}
    />
  ),
};
