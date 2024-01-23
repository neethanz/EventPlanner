import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from '@/navigators';

export default function App() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
