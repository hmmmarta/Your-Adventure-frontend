import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

interface ButtonProps {
  text: string;
  onPress: () => void;
}
const button = ({ text, onPress }: ButtonProps) => {
  return (
    <SafeAreaView style={styles.buttonPlacement}>
      <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default button;
