import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import {PostsScreen} from '@/screens';
import {Colors} from '@/utils';

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomTabNavigator">
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: '',
          headerShown: true,
          headerBackTitle: 'Back',
          headerTintColor: Colors.dark,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
