import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from "@expo/vector-icons"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FirstStack = () => {
  return(
    <Stack.Navigator>
    <Stack.Screen 
    name="First" 
    component={FirstScreen} 
    />
    <Stack.Screen 
    name="Second" 
    component={SecondScreen} 
    />
  </Stack.Navigator>
  );
};

const ThirdStack =() => {
  return (
    <Stack.Navigator>
    <Stack.Screen 
    name="Third" 
    component={ThirdScreen} 
    />
  </Stack.Navigator>
  );
}

const screenOption = ({route}) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'First') {
      iconName = "home";
    } else if (route.name === 'Third') {
      iconName = "user";
    }

    return <FontAwesome name={iconName} size={size} color={color} />;
  },
})





export default AppNavigator = () => {
    return (
      <NavigationContainer>
          <Tab.Navigator screenOptions={screenOption}>
            <Tab.Screen name="First" component={FirstStack} options={{headerShown: false}}/>
            <Tab.Screen name="Third" component={ThirdStack}options={{headerShown: false}}/>


          </Tab.Navigator>
      </NavigationContainer>
    );
  }