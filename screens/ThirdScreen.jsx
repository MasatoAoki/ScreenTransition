import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ThirdScreen =() => {
  return (
    <View style={styles.container}>
      <Text style={styles.Titletxt}>ThirdTXT</Text>
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
  Titletxt: {
    fontSize: 20,
    fontWeight: "700"
}, 
});

export default ThirdScreen;

