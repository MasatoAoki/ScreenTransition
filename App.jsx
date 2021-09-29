import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

export default function App() {
  return (
    <View style={styles.container}>
   <FirstScreen/>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


