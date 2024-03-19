import {useFonts, Inter_700Bold, Inter_100Thin, Inter_600SemiBold} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import styles from './styles';
import background from '../../styles/globalStyles';
import SignUpButton from '../../components/buttons/Button';


const SignUp = () => {
  
  
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_700Bold,
    Inter_600SemiBold
  });
 
  return (
    
    <View style={background.container}>
      <Text style={styles.fontInterBold}>Sign up</Text>
      <Text style={styles.fontInterThin}>Sign up to start Your Adventure!</Text>
      <StatusBar style="auto"/>
      <TextInputExample />
      <SignUpButton />
    </View>
  );
}
export default SignUp;

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
  
  

  







