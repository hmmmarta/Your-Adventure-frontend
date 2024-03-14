import {useFonts, Inter_700Bold, Inter_100Thin} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




export default function App() {
  const [fontsLoades] = useFonts({
    Inter_100Thin,
    Inter_700Bold
  });
  return (
    
    <View style={styles.container}>
      <Text style={styles.fontInterBold}>Sign up</Text>
      <Text style={styles.fontInterThin}>Sign up to start Your Adventure</Text>
      <StatusBar style="auto"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F2F',
  },
  fontInterBold: {
    marginTop: 89,
    marginLeft: 25,
    color: "white",
    fontSize: 40,
    fontFamily: "Inter_700Bold"
  },
  fontInterThin: {
    fontFamily: "Inter_100Thin",
    color: "#969696",
    marginTop: 4,
    marginLeft: 25,
    fontSize: 20
  }
});

