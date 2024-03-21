import React from 'react';
import { View, Image, Text } from 'react-native';
import background from '../../styles/globalStyles';
import styles from '../SignIn/styles';
import Button from '../../components/Button/Button'



function SignIn({ navigation }) {
    return (
        <View style={background.container}>
            <Image
            source={require('../../images/logo.png')}
            style={styles.image}
            />
            <Text style={styles.fontInterBold}>Sign In</Text>
            <Text style={styles.fontInterRegular}>Please login to continue to your account.</Text>
            <Button text="Sign In" onPress={() => ('SignIn')} />
            <Button text="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
    );
}

export default SignIn;