import React from 'react';
import { View, Image, Text } from 'react-native';
import background from '../../styles/globalStyles';
import styles from './styles';
import Button from '../../components/Button/Button';
import { useForm } from 'react-hook-form';

const CompleteEnter = ({navigation}) => {
    const { handleSubmit } = useForm();
    const onCompletePressed = (data) => {
        console.log(data);
        navigation.navigate("Home");
      }
    return(
        <View style={background.container}>
            <Image
            source={require('../../images/success.png')}
            style={styles.image}
            />
            <Text style={styles.fontSemiBold}>Success!</Text>
            <Text style={styles.fontInterRegular}>Congratulations! You’re now part of the Your Adventure Community. Your personalized travel experiences await.</Text>
            <View style={{marginTop: 110}}>
            <Button
            text="Continue"
            onPress={handleSubmit(onCompletePressed)}
            />
            </View>
            </View>
    );
}


export default CompleteEnter;