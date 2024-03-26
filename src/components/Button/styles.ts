import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container_PRIMARY: {
    //marginTop:-10,
    backgroundColor: '#1F1F2F',
    color: "#969696",
    fontSize: 14,
    fontFamily: "Inter-Regular",
    position: 'relative',
    alignSelf: 'flex-end'
  },
  container_TERTIARY: {
    //marginTop: 0,
    //flex: 1,
  },
  container_SECONDARY: {
    backgroundColor: '#1F1F2F',
    color:"#367AFF",
    textDecorationLine: 'underline',
    marginTop: -10
    
  },
  buttonPlacement: {
    //flex: 1,
    marginTop: 10,
    marginHorizontal: 25,
  },
  button: {
    backgroundColor: "#367AFF",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Inter-SemiBold",
  },
  textInputFocused: {
    borderColor: "#367AFF",
  },
  
});
export default styles;
