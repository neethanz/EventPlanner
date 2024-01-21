// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import Posts from '../screens/Posts';

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Posts" component={Posts} options={{title: 'Posts',headerShown:true}} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
