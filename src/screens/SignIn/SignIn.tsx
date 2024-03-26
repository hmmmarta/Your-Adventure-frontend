import React from 'react';
import { View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import background from '../../styles/globalStyles';
import styles from '../SignIn/styles';
import Button from '../../components/Button/Button'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';




function SignIn({ navigation }) {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSignInPressed = (data) => {
    console.log(data);
    navigation.navigate("CompleteEnter");
  }
  // const onForgotPasswordPressed=(data) => {
  //   console.log(data);
  // }
    return (
        <View style={background.container}>
            <Image
            source={require('../../images/logo.png')}
            style={styles.image}
            />
            <Text style={styles.fontInterBold}>Sign In</Text>
            <Text style={styles.fontInterRegular}>Please login to continue to your account.</Text>
       
      
      <SafeAreaView>
        <Input
          control={control}
          name="email"
          placeholder="Email"
          secureTextEntry={false}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <View >
          <Input
            control={control}
            name="password"
            placeholder="Password"
            secureTextEntry={visible}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be minimum 8 characters long'
              }
            }}
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
        </View>
      </SafeAreaView>
      <Button
      text='Forgot password?'
      type="PRIMARY"
      onPress={() => navigation.navigate('ForgotPassword')}
      />
      <Button
        
        text="Sign In"
        
        onPress={handleSubmit(onSignInPressed)}
        
      // onPress={() => Alert.alert("Welcome to your Adventure")}
      />
      <View style={{flexDirection:'row', justifyContent:'center', marginTop: 20}}>
        <Text style={styles.fontInterRegular}>Need an account?</Text>
      <Button text="Create one" type='SECONDARY'  onPress={() => navigation.navigate('SignUp')} />
      </View>
            {/* <Button text="Sign In" onPress={() => ('SignIn')} /> */}
            
        </View>
    );
}

export default SignIn;


  
 