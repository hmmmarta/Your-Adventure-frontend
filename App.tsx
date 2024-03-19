
import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native';
import SignUp from './src/screens/SignUp/SignUp';
import background from './src/styles/globalStyles';
import * as Font from 'expo-font';


const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
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
      <SignUp />
    </View>
  );
}
export default App;


