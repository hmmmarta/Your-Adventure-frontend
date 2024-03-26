import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

// interface ButtonProps {
//   type: any;
//   text: string;
//   onPress: () => void;
// }
const button = ({ text, type = "TERTIARY", onPress }) => {
  return (
    <SafeAreaView style={styles.buttonPlacement}>
      <View>
        <TouchableOpacity style={[styles.button , styles[`container_${type}`]]} onPress={onPress}>
          <Text style={[styles.buttonText, styles[`container_${type}`]]}>{text}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default button;
