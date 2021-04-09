import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Game from './components/Game'
import MineSweeper from './components/MineSweeper'
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Ionicons name='md-beer-outline' style={styles.iconIcons} size={64}/>
      <Text>合宿の課題＠奥野</Text>
      <Game />
      <MineSweeper />
      <StatusBar style='light' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconIcons: {
    // size: 64,
    color: 'yellow'
  }
})
