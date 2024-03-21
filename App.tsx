import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native';
import SignUp from './src/screens/SignUp/SignUp';
import background from './src/styles/globalStyles';
import * as Font from 'expo-font';
import SignIn from './src/screens/SignIn/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <View style={background.container}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}
export default App;

