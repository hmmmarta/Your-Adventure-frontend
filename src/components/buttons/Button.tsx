import { Alert, SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import styles from "../../screens/SignUp/styles";

const SignUpButton = () => (
    <SafeAreaView style={styles.buttonPlacement}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Welcome to Your Adventure')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
      );
export default SignUpButton;