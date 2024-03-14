import {useFonts, Inter_700Bold, Inter_100Thin, Inter_600SemiBold} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';



export default function App() {
  
  
  const [fontsLoades] = useFonts({
    Inter_100Thin,
    Inter_700Bold,
    Inter_600SemiBold
  });
 
  return (
    
    <View style={styles.container}>
      <Text style={styles.fontInterBold}>Sign up</Text>
      <Text style={styles.fontInterThin}>Sign up to start Your Adventure!</Text>
      <StatusBar style="auto"/>
      <TextInputExample />
      <SignUpButton />
    </View>
    
  );
  
}

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('');
  const [dob, onChangeDOB] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  const [focusedInput, setFocusedInput] = React.useState(null);


  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={[
          styles.input,
          focusedInput === 'name' && styles.textInputFocused,
        ]}
        onChangeText={onChangeName}
        onFocus={() => handleFocus('name')}
        onBlur={handleBlur}
        value={name}
        placeholder="Your Name"
        placeholderTextColor="#969696"
      />
      <TextInput
        style={[
          styles.input,
          focusedInput === 'dob' && styles.textInputFocused,
        ]}
        onChangeText={onChangeDOB}
        onFocus={() => handleFocus('dob')}
        onBlur={handleBlur}
        value={dob}
        placeholder="Date of Birth"
        keyboardType="numeric"
        placeholderTextColor="#969696"
      />
      <TextInput
        style={[
          styles.input,
          focusedInput === 'email' && styles.textInputFocused,
        ]}
        onChangeText={onChangeEmail}
        onFocus={() => handleFocus('email')}
        onBlur={handleBlur}
        value={email}
        placeholder="Email"
        placeholderTextColor="#969696"
      />
      <TextInput
        style={[
          styles.input,
          focusedInput === 'password' && styles.textInputFocused,
        ]}
        onChangeText={ onChangePassword}
        onFocus={() => handleFocus('password')}
        onBlur={handleBlur}
        value={password}
        placeholder="Password"
        secureTextEntry={visible}
        placeholderTextColor="#969696"
      />
      <TouchableOpacity style={styles.btnEye} onPress={
        () => {
          setVisible(!visible)
          setShow(!show)}
      }>
        <MaterialCommunityIcons 
        name={show === false ? 'eye-outline' : 'eye-off-outline'}
        size={26}
        color={'#969696'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const SignUpButton = () => (
  <SafeAreaView style={styles.buttonPlacement}>
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Welcome to Your Adventure')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F2F',
  },
  buttonPlacement: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 25,
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
  },
  input: {
    height: 50,
    marginTop: 40,
    marginHorizontal: 25,
    borderWidth: 1.5,
    paddingLeft: 20,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    color: "#969696"
  },
  button: {
    backgroundColor: '#367AFF', 
    padding: 10,
    borderRadius: 10, 
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: "Inter_600SemiBold"
  },
  textInputFocused: {
    borderColor: '#367AFF', 
  },
  btnEye: {
    position: 'absolute',
    right: 40,
    top: 322
  }
});

