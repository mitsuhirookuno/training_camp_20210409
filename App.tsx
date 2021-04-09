import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Game from './components/Game';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Text>合宿の課題＠奥野</Text>
      <StatusBar style='auto' />
      <Game />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
