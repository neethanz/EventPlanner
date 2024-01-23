import {HomeScreen, ProfileScreen} from '@/screens';
import {Colors} from '@/utils';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: Colors.dark},
        tabBarInactiveTintColor: '#757779',
        tabBarActiveTintColor: '#757779',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Feather name="home" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <Feather name="grid" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
