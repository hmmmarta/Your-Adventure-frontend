import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/screens/SignUp/SignUp';
import SignIn from './src/screens/SignIn/SignIn';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import * as Font from 'expo-font';
import CompleteEnter from './src/screens/CompleteEnter/CompleteEnter';
import Home from './src/screens/Home/Home';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = Font.useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        //initialRouteName="SignIn"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
            borderWidth: 0,
          },
          headerTintColor: '#fff',
          headerTransparent: true,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerTitle: '' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerTitle: '' }} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerTitle: '' }} />
        <Stack.Screen name='CompleteEnter' component={CompleteEnter} options={{ headerTitle: '' , headerLeft: null}} />
        <Stack.Screen name='Home' component={Home} options={{ headerTitle: '' , headerLeft: null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;