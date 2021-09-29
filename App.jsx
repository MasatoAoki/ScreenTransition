import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="FirstScreen" 
        component={FirstScreen} 
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//基本形です

