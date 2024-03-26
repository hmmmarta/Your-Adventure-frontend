import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import background from '../../styles/globalStyles';
import styles from './styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { useForm } from 'react-hook-form';




function ForgotPassword({navigation}) {
    const [show, setShow] = React.useState(false);
    const [visible, setVisible] = React.useState(true);
    const { control, handleSubmit, formState: { errors } } = useForm();
    
    const onResetPasswordPressed = (data) => {
        console.log(data);
        navigation.navigate("SignIn");
      };
    
    return (
        <View style={background.container}>
            <Text style={styles.fontInterBold}>Forgot password</Text>
            <Text style={styles.fontInterRegular}>Reset your Password and make strong</Text>
            <Text style={styles.fontSemiBold}>Password should contain at least 8 characters</Text>
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
      <View style={{marginTop:130}}>
      <Button
        text="Reset password"
        type='TERTIARY'
        onPress={handleSubmit(onResetPasswordPressed)}
      />
      </View>
      
        </View>
    );
}

export default ForgotPassword;