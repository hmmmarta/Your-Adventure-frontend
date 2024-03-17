import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
// import {
//   useFonts,
//   Inter_700Bold,
//   Inter_100Thin,
//   Inter_600SemiBold,
// } from "@expo-google-fonts/inter";
import SignUp from "./src/screens/SignUp/SignUp";
import { AuthProvider, useAuth } from "./src/context/AuthContex";
import Home from "./src/screens/Home/Home";
export default function App() {
  const authContext = useAuth();
  // const [fontsLoades] = useFonts({
  //   Inter_100Thin,
  //   Inter_700Bold,
  //   Inter_600SemiBold,
  // });
  useEffect(() => {
    console.log("App", authContext?.authState?.authenticated);
  }, [authContext?.authState]);
  return (
    <AuthProvider>
      <View style={styles.container}>
        {!authContext?.authState?.authenticated ? <SignUp /> : <Home />}
      </View>
    </AuthProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F2F",
  },
});
