import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";
import styles from "./styles";
import Button from "../../components/Button/Button";
import { useAuth } from "../../context/AuthContex";
const SignUp = () => {
  const [name, onChangeName] = React.useState("");
  const [dob, onChangeDOB] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  const authContex = useAuth();
  const [focusedInput, setFocusedInput] = React.useState(null);

  const handleFocus = (inputName: string) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.fontInterBold}>Sign up</Text>
      <Text style={styles.fontInterThin}>Sign up to start Your Adventure!</Text>
      {/* <StatusBar style="auto" /> */}
      <SafeAreaView>
        <TextInput
          style={[
            styles.input,
            focusedInput === "name" && styles.textInputFocused,
          ]}
          onChangeText={onChangeName}
          onFocus={() => handleFocus("name")}
          onBlur={handleBlur}
          value={name}
          placeholder="Your Name"
          placeholderTextColor="#969696"
        />
        <TextInput
          style={[
            styles.input,
            focusedInput === "dob" && styles.textInputFocused,
          ]}
          onChangeText={onChangeDOB}
          onFocus={() => handleFocus("dob")}
          onBlur={handleBlur}
          value={dob}
          placeholder="Date of Birth"
          keyboardType="numeric"
          placeholderTextColor="#969696"
        />
        <TextInput
          style={[
            styles.input,
            focusedInput === "email" && styles.textInputFocused,
          ]}
          onChangeText={onChangeEmail}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
          value={email}
          placeholder="Email"
          placeholderTextColor="#969696"
        />
        <TextInput
          style={[
            styles.input,
            focusedInput === "password" && styles.textInputFocused,
          ]}
          onChangeText={onChangePassword}
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
          value={password}
          placeholder="Password"
          secureTextEntry={visible}
          placeholderTextColor="#969696"
        />
        <TouchableOpacity
          style={styles.btnEye}
          onPress={() => {
            setVisible(!visible);
            setShow(!show);
          }}
        >
          <MaterialCommunityIcons
            name={show ? "eye-outline" : "eye-off-outline"}
            size={26}
            color={"#969696"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <Button
        text="Sign up"
        onPress={() => {
          authContex.onRegister(email, password);
        }}
      />
    </View>
  );
};

export default SignUp;
