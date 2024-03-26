import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Input from "../../components/Input/Input"
import styles from "./styles";
import Button from "../../components/Button/Button";
import background from '../../styles/globalStyles';
import { useForm } from 'react-hook-form';

const SignUp = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSignUpPressed = (data) => {
    console.log(data);
    navigation.navigate("CompleteEnter");
  }
  const validateDateOfBirth = (value) => {
    const dateParts = value.split('.');
    const day = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const year = parseInt(dateParts[2]);

    if (
      isNaN(day) || isNaN(month) || isNaN(year) ||
      day < 1 || day > 31 ||
      month < 1 || month > 12 ||
      year < 1900 || year > 2024
    ) {
      return 'Please enter a valid date of birth (dd.mm.yyyy)'; // Повертаємо повідомлення про помилку
    }

    return true; // Повертаємо true, якщо дата правильна
  };

  return (
    <View style={background.container}>
      <Text style={styles.fontInterBold}>Sign up</Text>
      <Text style={styles.fontInterRegular}>Sign up to start Your Adventure!</Text>
      <SafeAreaView>
        <Input
          control={control}
          name="name"
          placeholder="Your name"
          secureTextEntry={false}

          rules={{
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name should be minimum 2 characters long'
            }
          }}
        />

        <Input
          control={control}
          name="dob"
          placeholder="Date of Birth"
          secureTextEntry={false}
          rules={{
            required: 'Date of Birth is required',
            validate: validateDateOfBirth,
            pattern: {
              value: /^\d{2}\.\d{2}\.\d{4}$/,
              message: 'Please enter a valid date (dd.mm.yyyy)',
            }
            
          }}
        />

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
      <View style={{marginTop:50,}}>
      <Button
      type='TERTIARY'
        text="Sign up"
        onPress={handleSubmit(onSignUpPressed)}
      // onPress={() => Alert.alert("Welcome to your Adventure")}
      />
      </View>
      
    </View>
  );
};

export default SignUp;







