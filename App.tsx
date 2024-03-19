import React from 'react'
//import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import SignUp from './src/screens/SignUp/SignUp';
import background from './src/styles/globalStyles';

const App = () => {
  return (
    <View style={background.container}>
      <SignUp />
    </View>
  );
}
export default App;

