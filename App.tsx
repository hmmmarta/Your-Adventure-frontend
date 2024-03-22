import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import SignUp from "./src/screens/SignUp/SignUp";
import { AuthProvider, useAuth } from "./src/context/AuthContex";
import Home from "./src/screens/Home/Home";
export default function App() {
  const authContext = useAuth();

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
