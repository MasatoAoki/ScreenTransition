import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,　 } from 'react-native';
import FirstItem from '../components/FirstItem';

const FirstScreen =({navigation}) => {

  return (
    <View style={styles.container}>
      <FirstItem
      onPress={() => navigation.navigate("Second")}
      />
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

export default FirstScreen;

